import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { undefined, z } from "zod";

export async function GET(req: NextRequest) {
    const count = req.nextUrl.searchParams.get('count')
        ? Number(req.nextUrl.searchParams.get('count'))
        : 20;

    let whereInput: { } | undefined = {};
    const idParams: string | null = req.nextUrl.searchParams.get('id');
    idParams
        ? whereInput = { ...whereInput, id: idParams }
        : whereInput = undefined;
    try {
        const queryData = await prisma.series.findMany({
            where: whereInput,
            take: count
        });

        if (queryData.length===0) {
            return NextResponse.json({
                message: 'ID not found!'
            }, { status : 500 });
        }
        return NextResponse.json({
            message: 'success',
            data: queryData,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to get data!'
        }, { status: 500 });
    }

}
export async function POST(req: NextRequest)  {

    const formDataSchema = z.object({
        name: z.string().min(1, { message: "name must be fill" }),
        slug: z.string().min(1, { message: "Slug field is required" }),
        description: z.string().min(1,{ message: "Description field is required" }),
        images: z.string().array().min(1, { message: "At least one image is required" })
    });
    try {
        const formData = await req.json();
        const validatedData = formDataSchema.parse(formData);
        await prisma.series.create({
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
    } catch (error: any) {
        return NextResponse.json({
            message: `${ error ?? 'An error occurred while connecting to database' }`
        }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    const formDataSchema = z.object({
        name: z.string().min(1, { message: "name must be fill" }),
        slug: z.string().min(1, { message: "Slug field is required" }),
        description: z.string().min(1,{ message: "Description field is required" }),
        images: z.array(z.string()).min(1, { message: "At least one image is required" })
    });
    try {
        const formData = await req.json();
        const validatedData = formDataSchema.parse(formData);
        const query = await prisma.series.update({
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
            message: 'An error to updating data'
        }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const formData = await req.json();
        await prisma.series.delete({
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