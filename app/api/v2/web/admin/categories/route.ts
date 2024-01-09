import { NextRequest, NextResponse } from "next/server";
import { apiKeyCheck } from "@/lib/CryptoLib";
import prisma from "@/lib/prisma";

export type WebCategoriesPageResponse = (
    {
        _count: {
            products: number
        }
    } & CategoriesModelType
    )
export async function GET(req: NextRequest) {
    const headerKey: string | null = req.headers.get('X-Api-Key');
    if (!headerKey) {
        return NextResponse.json({
            message: `You Shouldn't here man..`
        }, { status: 403 });
    }
    const apiKeyTest: { ok: boolean, message: string } = await apiKeyCheck(headerKey);
    if (!apiKeyTest.ok) {
        return NextResponse.json({
            message: apiKeyTest.message
        }, { status: 401 });
    }

    const idParam: string | null = req.nextUrl.searchParams.get('id');
    const checkParam: string | null = req.nextUrl.searchParams.get('check');

    if (idParam) {
        try {
            const queryResult: CategoriesModelType | null = await prisma.categories.findFirst({
                where: {
                    id: idParam
                }
            });
            if (!queryResult) {
                return NextResponse.json({
                    message: 'Categories not Found'
                }, { status: 404 });
            }
            return NextResponse.json({
                message: 'success',
                data: queryResult
            }, { status: 200 });
        }
        catch (error) {
            return NextResponse.json({
                message: 'An Occurred while querying to Database'
            }, { status: 500 });
        }
    } else if (checkParam) {
        try {
            const queryResult: CategoriesModelType | null = await prisma.categories.findUnique({
                where: {
                    name: checkParam
                }
            });
            if (queryResult) {
                return NextResponse.json({
                    message: 'Category already exist!'
                }, { status: 409 });
            }

            return NextResponse.json({
                message: 'Category can be used'
            }, { status: 200 });
        } catch (error) {
            return NextResponse.json({
                message: 'An Occurred while querying to Database'
            }, { status: 500 });
        }
    }

    const pageParam: string | null = req.nextUrl.searchParams.get('page');
    const takeParam: string | null = req.nextUrl.searchParams.get('take');

    const takeQuery: number = takeParam
        ? Number(takeParam)
        : 20;

    const skipQuery: number | undefined = pageParam
        ? takeQuery * Number(pageParam)
        : undefined;
    try {
        const queryResult: WebCategoriesPageResponse[] = await prisma.categories.findMany({
            include: {
                _count: {
                    select: {
                        products: true,
                    }
                }
            },
            skip: skipQuery,
            take: takeQuery
        });

        return NextResponse.json({
            message: 'success',
            data: queryResult
        });
    } catch (error) {
        return NextResponse.json({
            message: 'An Occurred while querying to Database'
        }, { status: 500 });
    }
}

export const revalidate = 1;