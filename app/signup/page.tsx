"use client"
export default function Page() {
    return (
        <main className="h-screen flex items-center justify-center">
            <form action="/signup" className="lg:w-1/4 w-4/5 h-2/3 flex flex-col justify-around items-center bg-[#708D81] rounded-xl" method="post">
                <p className="relative text-center text-3xl w-2/3">Signup</p>
                <input className="border-2 border-black w-2/3 focus:border-none hover:border-blue-300 rounded-lg h-10 text-black bg-[#F4D58D]" type="text" placeholder="Email" />
                <input className="border-2 border-black w-2/3 focus:border-none hover:border-blue-300 rounded-lg h-10 text-black bg-[#F4D58D]" type="text" placeholder="Name" />
                <input className="border-2 border-black w-2/3 focus:border-none hover:border-blue-300 rounded-lg h-10 text-black bg-[#F4D58D]" type="password" placeholder="Enter Password" />
                <input className="border-2 border-black w-2/3 focus:border-none hover:border-blue-300 rounded-lg h-10 text-black bg-[#F4D58D]" type="password" placeholder="Re-enter Password" />
                <input className="border-2 border-black bg-[#BF0603] w-2/3 cursor-pointer" type="submit" value={"Signup"} onSubmit={(e) => e.preventDefault()} />
            </form>
        </main>
    )
}