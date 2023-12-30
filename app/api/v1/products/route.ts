import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    try {

    } catch (error) {
        return NextResponse.json({
           message: 'An error to get data'
        }, {status: 500});
    }
}

export async function POST() {
    try {

    } catch (error) {
        return NextResponse.json({
           message: 'An error to get data'
        },{ status: 500 });
    }
}