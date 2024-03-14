"use client"
import { usePathname, useRouter } from "next/navigation"

export default () => {
    const pathname = usePathname()
    const router = useRouter()

    const step = pathname.split("/").pop()

    const handler = () => {

        router.back() 
        // push(`/step/${step}`)

    }

    
    return <button 
        onClick={handler}
        className={step < 2 ? "hidden" : ""
    }>Next Step</button>
}