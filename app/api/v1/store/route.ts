import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const take = req.nextUrl.searchParams.get('take')
            ? Number(req.nextUrl.searchParams.get('take'))
            : 20;
        const name = req.nextUrl.searchParams.get('name')
            ? String(req.nextUrl.searchParams.get('name'))
            : undefined;
        const categories = req.nextUrl.searchParams.get('categories')
            ? String(req.nextUrl.searchParams.get('categories'))
            : undefined;
        const audiences = req.nextUrl.searchParams.get('audiences')
            ? String(req.nextUrl.searchParams.get('audiences'))
            : undefined;
        const min = req.nextUrl.searchParams.get('min')
            ? Number(req.nextUrl.searchParams.get('min'))
            : undefined;
        const max = req.nextUrl.searchParams.get('max')
            ? Number(req.nextUrl.searchParams.get('max'))
            : undefined;

        const where: any = {};
        if (name) where.name = name;
        if (categories) where.categories = { name: categories };
        if (audiences) where.audiences = { name: audiences };
        if (min !== undefined && max !== undefined) {
            where.price = {
                gte: min,
                lte: max
            };
        }

        const query = await prisma.products.findMany({
            where: {
                name: name,
                categories: {
                    name: categories
                },
                audiences: {
                    name: audiences
                },
                price: {
                    gte: min,
                    lte: max
                }
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
            take: take
        });

        if (query.length===0){
            return NextResponse.json({
                message: 'Data not found'
            }, { status: 500 });
        }

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