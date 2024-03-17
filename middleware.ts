import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAuth } from './lib/auth'

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login' || path === '/signup'
    const token = request.cookies.get('token')?.value || ''
    const verifiedToken = token && await verifyAuth(token).catch((error) => {
        console.log(error);
    })

    if (isPublicPath && verifiedToken) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    if (!isPublicPath && !verifiedToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: [
        '/profile',
        '/login',
        '/signup',
        '/dashboard'
    ]
}