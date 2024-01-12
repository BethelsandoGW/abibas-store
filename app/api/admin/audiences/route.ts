import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
    try {
        const query = await prisma.audiences.findMany({
            select: {
                id: true,
                name: true,
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
        images: z.array(z.string()).min(1, { message: "At least one image is required" }),
    });
    try {
        const formData = await req.json();
        const validatedData = formDataSchema.parse(formData);
        if (!validatedData.name || !validatedData.images) {
            return NextResponse.json({
                message: 'Invalid Required field'
            }, { status: 400 });
        }
        if (validatedData.name) {
            const checkName = await prisma.audiences.findFirst({
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
        await prisma.audiences.create({
            data: {
                name: validatedData.name,
                images: validatedData.images,
            }
        });
        return NextResponse.json({
            message: 'success'
        },{ status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to create data'
        },{ status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    const formDataSchema = z.object({
        name: z.string().min(1, { message: "name must be fill" }),
        images: z.array(z.string()).min(1, { message: "At least one image is required" }),
    });
    try {
        const formData = await req.json();
        const validatedData  = formDataSchema.parse(formData);
        if (!validatedData.name || !validatedData.images) {
            return NextResponse.json({
                message: 'Invalid Required field'
            }, { status: 400 });
        }
        if (validatedData.name){
            const checkName: AudiencesModelType | null  = await prisma.audiences.findFirst({
                where: {
                    name: validatedData.name
                }
            });
            if (checkName){
                return NextResponse.json({
                    message: 'Name already exist!'
                }, {status: 400});
            }
        }
        const query : AudiencesModelType | null = await prisma.audiences.update({
            where: {
                id: formData.id
            },
            data: {
                name: validatedData.name,
                images: validatedData.images,
            }
        });
        return NextResponse.json({
            message: 'success',
            data: query
        }, { status: 200 });
    } catch (error : string| any ) {
        error.message
        return NextResponse.json({
            message: 'An error to updating data',
        }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const formData = await req.json();
        await prisma.audiences.delete({
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