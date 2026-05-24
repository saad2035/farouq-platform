import type { Metadata } from "next"
import "./globals.css"

import "@fontsource/cairo/400.css"
import "@fontsource/cairo/600.css"
import "@fontsource/cairo/700.css"
import "@fontsource/cairo/800.css"
import "@fontsource/cairo/900.css"

export const metadata: Metadata = {
  title: "منصة الفاروق الثانوية",
  description: "منصة متابعة واعتماد أعمال اللجان المدرسية",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Cairo, sans-serif",
          background: "#020817",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  )
}