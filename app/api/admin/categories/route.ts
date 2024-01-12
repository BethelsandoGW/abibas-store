import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import { z } from "zod";

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
    const formDataSchema = z.object({
        name: z.string().min(1, { message: "name must be fill" }),
        slug: z.string().min(1, { message: "Slug field is required" }),
        description: z.string().min(1,{ message: "Description field is required" }),
        images: z.array(z.string()).min(1, { message: "At least one image is required" })
    });
    try {
        const formData = await req.json();
        const validatedData = formDataSchema.parse(formData);
        if (!validatedData.name || !validatedData.slug || !validatedData.description || !validatedData.images) {
            return NextResponse.json({
                message: 'Invalid Required field'
            }, { status: 400 });
        }
        if (validatedData.name) {
            const checkName: CategoriesModelType | null = await prisma.categories.findFirst({
                where: {
                    name: validatedData.name
                }
            });
            if (checkName) {
                return NextResponse.json({
                   message: 'Name already exist!'
                }, {status: 400});
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
        },{ status: 201 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to create data'
        },{ status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    const formDataSchema = z.object({
        name: z.string().min(1, { message: "name must be fill" }),
        slug: z.string().min(1, { message: "Slug field is required" }),
        description: z.string().min(1,{ message: "Description field is required" }),
        images: z.string().array().min(1, { message: "At least one image is required" })
    });
    try {
        const formData = await req.json();
        const validatedData = formDataSchema.parse(formData);
        if (!formData.name || !formData.slug || !formData.description || !formData.images) {
            return NextResponse.json({
                message: 'Invalid Required field'
            }, { status: 400 });
        }
        if (validatedData.name) {
            const checkName: CategoriesModelType | null = await prisma.categories.findFirst({
                where: {
                    name: validatedData.name
                }
            });
            if (checkName) {
                return NextResponse.json({
                    message: 'Name already exist!'
                }, {status: 400});
            }
        }
        const query = await prisma.categories.update({
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
        }, { status: 500});
    }
}

export const revalidate = 1;