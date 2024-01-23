import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const query = await prisma.events.findMany({
            take: 5
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
export const revalidate = 1;