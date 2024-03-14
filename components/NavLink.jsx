"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default ({ children, activeClassName = "text-[#12c38b]", className, ...props }) => {
    const pathname = usePathname()
    const active = pathname === props.href 
    // const active = pathname.startsWith(props.href) 

    return (
        <Link {...props} className={`${className ? className : ""}${active ? " " + activeClassName : ""}`} >
            {children}
        </Link>
    )
}