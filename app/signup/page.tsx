"use client"
export default function Page() {
    return (
        <main className="h-[95vh] flex items-center justify-center">
            <form action="/api/signup" className="bg-slate-300 p-6 lg:w-99 rounded-xl lg:grid lg:grid-cols-2 shadow-lg">
                <h1 className="text-center text-2xl col-span-2">Sign-up</h1>
                <div className="mt-3 lg:mr-3">
                    <label htmlFor="name1">First Name</label>
                    <input type="text" name="fname" id="name1" className="bg-slate-200 border-b-2 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700 ml-3 rounded-lg pl-1" />
                </div>
                <div className="mt-3 lg:mr-3">
                    <label htmlFor="name2">Last Name</label>
                    <input type="text" name="lname" id="name2" className="bg-slate-200 border-b-2 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700 ml-3 rounded-lg pl-1" />
                </div>
                <div className="mt-3 lg:mr-3 col-span-2 flex justify-center flex-col">
                    <label htmlFor="email" className="lg:mx-5">Email</label>
                    <input type="text" name="email" id="email" className="bg-slate-200 border-b-2 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700 ml-3 rounded-lg lg:w-[36rem] mt-1 pl-1 self-center" />
                </div>
                <div className="mt-3 lg:mr-3 col-span-2 flex justify-center flex-col">
                    <label htmlFor="password" className="lg:mx-1">Password</label>
                    <input type="password" name="password" id="password" className="bg-slate-200 border-b-2 border-slate-600 hover:border-blue-300 h-10 text-black placeholder-gray-700 ml-3 rounded-lg lg:w-[36rem] mt-1 pl-1 self-center" />
                </div>
                <div className="mt-4 col-span-2 flex justify-center">
                    <input type="button" value="Continue" className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-2/3 cursor-pointer rounded-lg h-8 text-xl pl-1" />
                </div>
            </form>
        </main>
    )
}