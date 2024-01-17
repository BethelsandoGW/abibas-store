import { NextResponse } from "next/server";

export function middleware() {
    // if (req.nextUrl.pathname.startsWith('/api/v2/web')) {
    //     const headerKey: string | null = req.headers.get('X-Api-Key');
    //     if (!headerKey) {
    //         return NextResponse.json({
    //             message: `You Shouldn't here man..`
    //         }, { status: 403 });
    //     }
    //     try {
    //         const { iv, key } = JSON.parse(headerKey);
    //         if (!iv || !key ) {
    //             return NextResponse.json({
    //                 message: 'Invalid API Key man... Ganbare Ganbare :D'
    //             }, { status: 401 });
    //         }
    //     } catch (error: any) {
    //         return NextResponse.json({
    //             message: error.message
    //                 ? 'Nice Try man..'
    //                 : 'Whoops.. we have some challenger huh'
    //         }, { status: 403 });
    //     }
    // }

    return NextResponse.next();
}
