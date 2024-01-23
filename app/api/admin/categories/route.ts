import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const formDataSchema = z.object({
    name: z.string().min(1, { message: "name must be fill" }),
    slug: z.string().min(1, { message: "Slug field is required" }),
    description: z.string().min(1,{ message: "Description field is required" }),
    images: z.array(z.string()).min(1, { message: "At least one image is required" })
});

export async function GET() {
    try {
        const query = await prisma.categories.findMany({
           select: {
               id: true,
               name: true,
               slug: true,
               description: true,
               images: true
           }
        });
        return NextResponse.json({
            message: 'Success',
            data: query
        },{ status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to get data'
        },{ status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const formData: FormData = await req.formData();
        const validatedData = formDataSchema.parse({
            name: formData.get('name'),
            slug: formData.get('slug'),
            description: formData.get('description'),
            images: formData.get('images')
        });
        if (validatedData.name) {
            const checkName: CategoriesModelType | null = await prisma.categories.findFirst({
                where: {
                    name: validatedData.name
                }
            });
            if (checkName) {
                return NextResponse.json({
                   message: 'Name already exist!'
                }, { status: 400 });
            }
        }
        await prisma.categories.create({
            data: {
                name: validatedData.name,
                slug: validatedData.slug,
                description: validatedData.description,
                images: validatedData.images
            }
        });

        return NextResponse.json({
            message: 'success'
        },{ status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        },{ status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const formData = await req.json();
        const validatedData = formDataSchema.parse(formData);
        const query: CategoriesModelType | null = await prisma.categories.update({
            data: {
                name: validatedData.name,
                slug: validatedData.slug,
                description: validatedData.description,
                images: validatedData.images
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
            message: 'An error to updating data',
        }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const formData = await req.json();
        await prisma.categories.delete({
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