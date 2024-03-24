import { Ubuntu } from "next/font/google"
import Footer from "./Footer"
import "./globals.css"
import Nav from "./Nav"

const font = Ubuntu({ 
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"]
})

export const metadata = {
    title: "Multi-step form",
    description: "Multi-step form frontend mentor coding challenge",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-very-light-gray">
            <body className={`${font.className} relative pb-24`}>
                <Nav />
                <main
                    style={{width: "calc(100% - 2rem)"}}
                    className="
                        mx-auto -mt-20
                        px-6 py-8 shadow-card
                        bg-white
                        text-marine-blue
                        rounded-xl
                    "
                >
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
