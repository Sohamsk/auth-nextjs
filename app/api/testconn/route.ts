import { connect } from "@/db/connection";
import { Query } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    connect()
    const response = NextResponse.json({ "msg": "api working" }, { status: 200 })
    return response
}