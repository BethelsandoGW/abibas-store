import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import sharp from "sharp";
import crypto from "crypto";

export async function GET(req: NextRequest) {
    try {
        const idParams  = req.nextUrl.searchParams.get('id')
            ? String(req.nextUrl.searchParams.get('id'))
            : NextResponse.json({
                message: 'ID not found!'
            }, { status: 500 });
        const query = await prisma.user.findMany({
            select: {
                id: true,
                fullname: true,
                username: true,
                images: true
            },
            where: {
                id: idParams.toString()
            }
        });
        return NextResponse.json({
            message: 'success',
            data: query
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
           message: 'An error to get data'
        }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const formDataSchema = z.object({
        fullname: z.string().min(1, { message: "fullname must be fill" }),
        username: z.string().min(1, { message: "username field is required" }),
        password: z.string().min(1, { message: "password field is required" }),
        email: z.string().email({ message: "email field is required" }),
        images: z.string().array().min(1, { message: "At least one image is required" })
    });
    try {
        const formData = await req.json();
        const validatedData = formDataSchema.parse(formData);
        if (validatedData.username){
            const check : {username: string} | null = await prisma.user.findFirst({
                select: {
                    username: true
                },
                where: {
                    username: validatedData.username
                }
            });
            if (check) {
                return NextResponse.json({
                    message: 'Name already used!'
                }, { status: 400 });
            }
        }
        try {
            const ArrImage: FormDataEntryValue[] = Array.from(validatedData.images);
            ArrImage.map(async (image: FormDataEntryValue): Promise<void> => {
                const img: File = image as File;
                const arrBuffer: ArrayBuffer = await img.arrayBuffer();
                const uint8Array: Uint8Array = new Uint8Array(arrBuffer);
                await sharp(uint8Array)
                    .toFormat('webp')
                    .resize({ width: 1024 })
                    .webp({ quality: 85 })
                    .toFile(`./public/assets/images/${crypto.randomBytes(7).toString('hex') + '-' + img.name}.webp`);
            });
            await prisma.user.create({
                data: {
                    fullname: validatedData.fullname,
                    username: validatedData.username,
                    password: validatedData.password,
                    email: validatedData.email,
                    role: String("USER"),
                    images: validatedData.images
                }
            });
        } catch (error) {
            return NextResponse.json({
                message: 'An error to upload images'
            }, { status: 500 });
        }
        return NextResponse.json({
           message: 'success'
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to get data'
        }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest){
    const formDataSchema = z.object({
        fullname: z.string().min(1, { message: "fullname must be fill" }),
        username: z.string().min(1, { message: "username field is required" }),
        email: z.string().email({ message: "email field is required" }),
        images: z.string().array().min(1, { message: "At least one image is required" })
    });
    try {
        const formData = await req.json();
        if (!formData.fullname || !formData.username || !formData.email || !formData.images) {
            return NextResponse.json({
                message: 'Invalid Required field'
            }, { status: 400 });
        }
        const validatedData = formDataSchema.parse(formData);
        let whereInput: { } | undefined = {};
        const idParams: string | null = req.nextUrl.searchParams.get('id');
        idParams
            ? whereInput = { ...whereInput, id: idParams }
            : NextResponse.json({
                message: 'Missing parameter id'
            }, { status: 400 });

        const query = await prisma.user.update({
            data: {
                fullname: validatedData.fullname,
                username: validatedData.username,
                email: validatedData.email,
                images: validatedData.images
            },
            where: {
                id: whereInput.toString()
            }
        });
        return NextResponse.json({
            message: 'success',
            data: query
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to get data'
        }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest){
    try {
        const idParams = req.nextUrl.searchParams.get('idParams')
            ? String(req.nextUrl.searchParams.get('idParams'))
            : NextResponse.json({
                message: 'Id not found!'
            });
        await prisma.user.delete({
            where: {
                id: idParams.toString()
            }
        });
        return NextResponse.json({
            message: 'success'
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to get data'
        }, { status: 500 });
    }
}

export const revalidate = 1;