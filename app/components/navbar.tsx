import Link from "next/link"

export default function navbar() {
    return (
        <nav className="bg-slate-300">
            <ul className="flex justify-items-start w-[5vh] items-center">
                <li className="mx-3 py-4"><Link href={'/'}>Home</Link></li>
                <li className="mx-3 py-4"><Link href={'/login'}>Login</Link></li>
                <li className="mx-3 py-4"><Link href={'/signup'}>Signup</Link></li>
            </ul>
        </nav>
    )
}