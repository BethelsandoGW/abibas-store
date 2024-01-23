import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z, ZodError } from "zod";

export async function GET(req: NextRequest) {
    try {
        const pageParam: number | null= req.nextUrl.searchParams.has('page')
            ? Number(req.nextUrl.searchParams.get('page'))
            : 1;
        const takeParam: number | null = req.nextUrl.searchParams.has('take')
            ?  Number(req.nextUrl.searchParams.get('take'))
            : 25;
        const skip = (pageParam - 1) * takeParam;
        const query = await prisma.products.findMany({
            take: takeParam,
            skip: skip,
            orderBy: {
                name: 'asc'
            }
        });
        const queryResult = query.map((productItem) => {
            return {
                ...productItem,
                specs: JSON.parse(productItem.specs),
            };
        });
        return NextResponse.json({
            message: 'success',
            data: queryResult
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to get data!'
        }, { status: 500 });
    }
}

export async function POST(req: NextRequest)  {
    const formDataSchema = z.object({
        audienceId: z.string().min(1, { message: "audiences must be fill" }),
        categoryId: z.string().min(1, { message: "categories must be fill" }),
        genresId: z.string().min(1, { message: "genres must be fill" }),
        seriesId: z.string().min(1, { message: "series must be fill" }),
        name: z.string().min(1, { message: "name must be fill" }),
        gender: z.enum([ 'MALE', 'FEMALE', 'UNISEX' ]),
        slug: z.string().min(1, { message: "Slug field is required" }),
        description: z.string().min(1,{ message: "Description field is required" }),
        specs: z.object({
            color: z.string().array().nonempty({ message: "color must be fill" }),
            material: z.string().array().nonempty({ message: "specification must be filled" }),
            size: z.string().array().nonempty({ message: "size must be fill" })
        }),
        images: z.array(z.string()).min(1, { message: "At least one image is required" }),
        price: z.number().min(1,{ message: "price must be fill" }),
        stock: z.number().min(1, { message: "stock must be fill" })
    });
    try {
        const formData = await req.json();
        const validatedData  = formDataSchema.parse(formData);
        if (validatedData.name) {
            const checkName = await prisma.products.findFirst({
                where: {
                    name: validatedData.name
                }
            });
            if (checkName) {
                return NextResponse.json({
                   message: "Name already exist!"
                });
            }
        }
        await prisma.products.create({
            data: {
                name: validatedData.name,
                gender: validatedData.gender,
                slug: validatedData.slug,
                description: validatedData.description,
                specs: JSON.stringify(validatedData.specs),
                images: validatedData.images,
                price: validatedData.price,
                stock: validatedData.stock,
                audiences: {
                    connect: {
                        id: validatedData.audienceId
                    }
                },
                categories: {
                    connect: {
                        id: validatedData.categoryId
                    }
                },
                genres: {
                    connect: {
                        id: validatedData.genresId
                    }
                },
                series: {
                    connect: {
                        id: validatedData.seriesId
                    }
                }
            }
        });
        return NextResponse.json({
            message: "success"
        }, { status: 201 });
    } catch (error: any) {
        const zodMessage: string | null = error instanceof ZodError
            ? error.message
            : null;
        return NextResponse.json({
            message: `${ zodMessage ?? error.message }`
        }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    const formDataSchema = z.object({
        audienceId: z.string().min(1),
        categoryId: z.string().min(1),
        genresId: z.string().min(1),
        seriesId: z.string().min(1),
        name: z.string().min(1, { message: "name must be fill" }),
        gender: z.enum([ 'MALE', 'FEMALE', 'UNISEX' ]),
        slug: z.string().min(1, { message: "Slug field is required" }),
        description: z.string().min(1,{ message: "Description field is required" }),
        specs: z.string().min(1, { message: "At least one description must be fill" }),
        images: z.array(z.string()).min(1, { message: "At least one image is required" }),
        price: z.number(z.string()).min(1,{ message: "price must be fill" }),
        stock: z.number(z.string()).min(1, { message: "stock must be fill" })
    });
    try {
        const formData = await req.json();
        const validatedData = formDataSchema.parse(formData);
        const query = await prisma.products.update({
            data: {
                name: validatedData.name,
                gender: validatedData.gender,
                slug: validatedData.slug,
                description: validatedData.description,
                specs: validatedData.specs,
                images: validatedData.images,
                price: validatedData.price,
                stock: validatedData.stock,
                audienceId: validatedData.audienceId,
                categoryId: validatedData.categoryId,
                genresId: validatedData.genresId,
                seriesId: validatedData.seriesId
            },
            where: {
                id: formData.id
            }
        });
        return NextResponse.json({
            message: 'success',
            data: query
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to updating data'
        }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const formData = await req.json();
        await prisma.products.delete({
            where: {
                id: formData.id
            }
        });
        return NextResponse.json({
            message: 'success'
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'error'
        }, { status: 500 });
    }
}
export const revalidate = 1;