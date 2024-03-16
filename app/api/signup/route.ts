import { connect } from '@/db/connection'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
connect()

export async function POST(req: NextRequest) {
    try {
        const { FirstName, LastName, email, password } = await req.json()

        // checking if user already exists
        const user = await User.findOne({ Email: email });

        if (user)
            return NextResponse.json({ Message: "User already exists" }, { status: 400 })

        // hash password
        const salt = await bcrypt.genSalt(13)
        const hashedPassword = await bcrypt.hash(password, salt)

        // adding the user into the db
        const newUser = new User({
            userName: FirstName + " " + LastName,
            Email: email,
            Password: hashedPassword
        })
        await newUser.save()
        return NextResponse.json({ Message: "Successfull" }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

