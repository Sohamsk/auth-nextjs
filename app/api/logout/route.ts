import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({ Message: "Successfully logged out" }, { status: 200 })
        response.cookies.set('token', "", {
            httpOnly: true,
            expires: new Date(0)
        })
        return response
    } catch (error: any) {
        console.log(error);

        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}