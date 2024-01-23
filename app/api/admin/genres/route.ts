import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

export async function GET() {
    try {
        const getData = await prisma.genres.findMany({
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                images: true
            }
        });
        return NextResponse.json({
            message: 'success',
            data: getData
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to get data'
        }, {  status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const formDataSchema = z.object({
        name: z.string().min(1, { message: "name must be fill" }),
        slug: z.string().min(1, { message: "Slug field is required" }),
        description: z.string().min(1,{ message: "Description field is required" }),
        images: z.string().array().min(1, { message: "At least one image is required" })
    });
    try {
        const formData = await req.json();
        const validatedData = formDataSchema.parse(formData);
        if (validatedData.name) {
            const checkName = await prisma.genres.findFirst({
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
        await prisma.genres.create({
            data: {
                name: validatedData.name,
                slug: validatedData.slug,
                description: validatedData.description,
                images: validatedData.images
            }
        });
        return NextResponse.json({
            message: "success"
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error'
        }, { status: 500 });
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
        const query = await prisma.genres.update({
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
            message: 'success updating data',
            data: query
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to update data'
        }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const formData = await req.json();
        await prisma.genres.delete({
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