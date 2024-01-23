import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const homeBanner = await prisma.series.findMany({
            select: {
                id: true,
                name: true,
                slug: true,
                images: true
            },
            take: -1
        });

        const newProducts =  await prisma.products.findMany({
            select: {
                audiences: {
                    select: {
                        name: true
                    }
                },
                categories: {
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
                id: true,
                name: true,
                description: true,
                specs: true,
                price: true,
                images: true,
                stock: true
            },
            take: -10
        });

        const newSeries = await prisma.series.findMany({
            select: {
                id: true,
                name: true,
                slug: true,
                images: true
            },
            skip: 1,
            take: -6
        });

        const newEvents = await prisma.events.findMany({
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                images: true,
                status: true,
                beginDate: true,
                endDate: true
            },
            where: {
                status: true
            },
            take: -4
        });

        const newGenres = await prisma.genres.findMany({
            select: {
                id: true,
                name: true,
                slug: true,
                images: true
            },
            take: -8
        });

        const audiences = await prisma.audiences.findMany({
            select: {
                id: true,
                name: true,
                images: true
            }
        });
        return NextResponse.json({
            message: 'success',
            data: {
                homeBanner: homeBanner,
                newProducts: newProducts,
                newSeries: newSeries,
                newEvents: newEvents,
                newGenres: newGenres,
                audiences: audiences
            }
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'An error to get data'
        }, { status: 500 });
    }
}

export const revalidate = 1;
