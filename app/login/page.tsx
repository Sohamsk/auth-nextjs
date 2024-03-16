"use client"
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const resp = await axios.post("/api/login", user)
            if (resp.status === 200)
                router.push('/')
        } catch (error) {
            console.log('login failed');
        }
    }

    return (
        <main className="w-full h-[95vh] flex items-center justify-center">
            <form className=" lg:w-1/4 w-4/5 h-1/3 flex flex-col justify-around items-center bg-slate-300 rounded-xl" onSubmit={onLogin}>
                <h1 className="relative text-center text-3xl w-2/3">Login</h1>
                <label htmlFor="email"></label>
                <input className="bg-transparent border-b-2 w-2/3 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700" type="email" placeholder="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                <label htmlFor="password"></label>
                <input className="bg-transparent border-b-2 w-2/3 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700" type="password" placeholder="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                <input className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-2/3 cursor-pointer rounded-lg h-8" type="submit" value={"Login"} />
                <Link href={'/signup'}>signup</Link>
            </form>
        </main>
    )
}
