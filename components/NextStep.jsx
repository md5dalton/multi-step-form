"use client"
import { usePathname, useRouter } from "next/navigation"

export default () => {
    const pathname = usePathname()
    const router = useRouter()

    const step = pathname.split("/").pop()

    const handler = () => {

        const page = step >= 4 ? 4 : +step + 1

        router.push(`/step/${page}`)

    }

    
    return <button 
        onClick={handler}
        className="
            h-10 px-4 grid place-items-center rounded
            bg-marine-blue text-white text-sm
        "
    >Next Step</button>
}