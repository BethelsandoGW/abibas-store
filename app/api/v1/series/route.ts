import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { undefined } from "zod";

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
            }, {status : 500});
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
export const revalidate = 1;