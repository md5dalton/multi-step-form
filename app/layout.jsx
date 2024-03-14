import { Ubuntu } from "next/font/google"
import "./globals.css"

const font = Ubuntu({ subsets: ["latin"] })

export const metadata = {
  title: "Multi-step form",
  description: "Multi-step form frontend mentor coding challenge",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
