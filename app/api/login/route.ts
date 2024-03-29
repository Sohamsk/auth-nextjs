import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db/connection";
import bcryptjs from "bcryptjs";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  try {
    await connect();
    // get data from req
    const { email, password } = await req.json();

    // fetch profile
    const profile = await User.findOne({ Email: email });
    if (!profile)
      return NextResponse.json({ Message: "User Not found" }, { status: 400 });

    // authenticate password
    if (!(await bcryptjs.compare(password, profile.Password))) {
      return NextResponse.json(
        { Message: "Invalid Password" },
        { status: 400 }
      );
    }
    // sign jwt
    const data = {
      id: profile._id,
    };
    const token = await new SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime("1m")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY!));

    // set cookies and send back response
    const resp = NextResponse.json(
      { Message: "Successfully logged in" },
      { status: 200 }
    );
    resp.cookies.set("token", token, {
        httpOnly: true
    })
    return resp;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
