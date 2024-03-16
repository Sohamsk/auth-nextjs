"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import React from "react"

export default function Page() {
    const router = useRouter()
    const [loading, setLoading] = React.useState(false)

    const [user, setUser] = React.useState({
        FirstName: "",
        LastName: "",
        email: "",
        password: ""
    })


    async function onSignup(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            setLoading(true)
            const resp = await axios.post('/api/signup', user)
            if (resp.status === 201)
                router.push('/')
        } catch (error: any) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="h-[95vh] flex items-center justify-center">
            <form className="bg-slate-300 p-6 lg:w-99 rounded-xl lg:grid lg:grid-cols-2 shadow-lg" onSubmit={onSignup} >
                <h1 className="text-center text-2xl col-span-2">{loading ? "Processing" : "Sign up"}</h1>
                <div className="mt-3 lg:mr-3">
                    <label htmlFor="name1">First Name</label>
                    <input type="text" name="fname" id="name1" className="bg-slate-200 border-b-2 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700 ml-3 rounded-lg pl-1" onChange={(e) => setUser({ ...user, FirstName: e.target.value })} required />
                </div>
                <div className="mt-3 lg:mr-3">
                    <label htmlFor="name2">Last Name</label>
                    <input type="text" name="lname" id="name2" className="bg-slate-200 border-b-2 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700 ml-3 rounded-lg pl-1" onChange={(e) => setUser({ ...user, LastName: e.target.value })} required />
                </div>
                <div className="mt-3 lg:mr-3 col-span-2 flex justify-center flex-col">
                    <label htmlFor="email" className="lg:mx-5">Email</label>
                    <input type="email" name="email" id="email" className="bg-slate-200 border-b-2 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700 ml-3 rounded-lg lg:w-[36rem] mt-1 pl-1 self-center" onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                </div>
                <div className="mt-3 lg:mr-3 col-span-2 flex justify-center flex-col">
                    <label htmlFor="password" className="lg:mx-1">Password</label>
                    <input type="password" name="password" id="password" className="bg-slate-200 border-b-2 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700 ml-3 rounded-lg lg:w-[36rem] mt-1 pl-1 self-center" onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                </div>
                <div className="mt-4 col-span-2 flex justify-center">
                    <input type="submit" value="Continue" className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-2/3 cursor-pointer rounded-lg h-8 text-xl pl-1" />
                </div>
            </form>
        </main>
    )
}