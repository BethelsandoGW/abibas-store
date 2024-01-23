import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z, ZodObject } from "zod";

export async function GET() {
    try {
        const query  = await prisma.events.findMany({
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                images: true,
                status: true,
                beginDate: true,
                endDate: true
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
    const dataSchema  = z.object({
        name: z.string().min(1, { message: "name must be fill" }),
        slug: z.string().min(1, { message: "Slug field is required" }),
        description: z.string().min(1,{ message: "Description field is required" }),
        images: z.array(z.string()).min(1, { message: "At least one image is required" }),
        status: z.boolean(),
        beginDate: z.coerce.date(),
        endDate: z.coerce.date()
    });
    try {
        const form = await req.json();
        const validatedData = dataSchema.parse(form);
        if (validatedData.name) {
            const checkName = await prisma.events.findFirst({
                where: {
                    name: validatedData.name
                }
            });
            if (checkName) {
                return NextResponse.json({
                   message: "Name already exist!"
                }, { status: 400 });
            }
        }
        await prisma.events.create({
            data: {
                name: validatedData.name,
                slug: validatedData.slug,
                description: validatedData.description,
                images: validatedData.images,
                status: validatedData.status,
                beginDate: validatedData.beginDate,
                endDate: validatedData.endDate
            }
        });
        return NextResponse.json({
            message: 'success'
        },{ status: 201 });
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        },{ status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    const formDataSchema : ZodObject<any> = z.object({
        name: z.string().min(1, { message: "name must be fill" }),
        slug: z.string().min(1, { message: "Slug field is required" }),
        description: z.string().min(1,{ message: "Description field is required" }),
        images: z.array(z.string()).min(1, { message: "At least one image is required" }),
        status: z.boolean(),
        beginDate: z.coerce.date(),
        endDate: z.coerce.date()
    });
    try {
        const formData = await req.json();
        const validatedData: any | null = formDataSchema.parse(formData);
        const query: EventsModelType | null = await prisma.events.update({
            data: {
                name: validatedData.name,
                slug: validatedData.slug,
                description: validatedData.description,
                images: validatedData.images,
                status: validatedData.status,
                beginDate: validatedData.beginDate,
                endDate: validatedData.endDate
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
        await prisma.events.delete({
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