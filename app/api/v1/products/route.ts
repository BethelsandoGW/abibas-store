import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const idParams = req.nextUrl.searchParams.get('idParams')
            ? String(req.nextUrl.searchParams.get('idParams'))
            : undefined;
        const name = req.nextUrl.searchParams.get('name')
            ? String(req.nextUrl.searchParams.get('name'))
            : undefined;
        const audiences = req.nextUrl.searchParams.get('audiences')
            ? String(req.nextUrl.searchParams.get('audiences'))
            : undefined;
        const query = await prisma.products.findMany({
            where: {
                id: idParams,
                name: name,
                audiences: {
                    name: audiences
                },
            },
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                specs: true,
                images: true,
                price: true,
                stock: true,
                audiences: {
                    select: {
                        name: true
                    }
                },
                genres: {
                    select: {
                        name: true
                    }
                },
                series: {
                    select: {
                        name: true
                    }
                },
                categories: {
                    select: {
                        name: true
                    }
                }
            },
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

export const revalidate = 1;