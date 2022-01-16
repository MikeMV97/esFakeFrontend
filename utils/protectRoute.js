import { readCookie } from "../utils/cookies";
import { useRouter } from "next/router";

export const protectRoute = () => {
    const router = useRouter()
    if (process.browser) {
        const token = readCookie('token')
        if (!token) {
            router.push('/login')
        }
    }
}
