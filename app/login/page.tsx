import Link from "next/link";

export default function Page() {
    return (
        <main className="w-full h-[95vh] flex items-center justify-center">
            <section className=" lg:w-1/4 w-4/5 h-1/3 flex flex-col justify-around items-center bg-slate-300 rounded-xl">
                <p className="relative text-center text-3xl w-2/3">Login</p>
                <input className="bg-transparent border-b-2 w-2/3 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700" type="text" placeholder="email" />
                <input className="bg-transparent border-b-2 w-2/3 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700" type="password" placeholder="password" />
                <input className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-2/3 cursor-pointer rounded-lg h-8" type="submit" value={"Login"} />
                <Link href={'/signup'}>signup</Link>
            </section>
        </main>
    )
}
