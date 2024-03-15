import Link from "next/link"

export default function navbar() {
    return (
        <nav>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>Signup</Link></li>
            </ul>
        </nav>
    )
}