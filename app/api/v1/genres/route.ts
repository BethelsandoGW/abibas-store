import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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

export const revalidate = 1;