import { jwtVerify } from "jose";

interface UserJwtPayload {
    jti: string,
    iat: number
}

export async function verifyAuth(token: string) {
    try {
        const verified = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY))
        return verified.payload as UserJwtPayload
    } catch (error) {
        throw new Error('Verification failed')
    }
}