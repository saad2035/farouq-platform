"use client"

import Link from "next/link"

export default function Sidebar() {

  return (

    <aside className="hidden md:flex flex-col w-[280px] min-h-screen bg-[#071226] border-l border-cyan-900/20 p-6">

      {/* LOGO */}

      <div className="mb-12">

        <h1 className="text-4xl font-black text-cyan-400 mb-2">
          FAROUQ
        </h1>

        <p className="text-gray-400">
          Smart Governance
        </p>

      </div>

      {/* NAVIGATION */}

      <nav className="space-y-3">

        <Link
          href="/"
          className="bg-cyan-400 text-black font-black px-5 py-4 rounded-2xl block"
        >
          الرئيسية
        </Link>

        <Link
          href="/committees"
          className="bg-[#0b1325] hover:bg-[#111c34] transition px-5 py-4 rounded-2xl block"
        >
          اللجان
        </Link>

        <Link
          href="/reports"
          className="bg-[#0b1325] hover:bg-[#111c34] transition px-5 py-4 rounded-2xl block"
        >
          التقارير
        </Link>

        <Link
          href="/notifications"
          className="bg-[#0b1325] hover:bg-[#111c34] transition px-5 py-4 rounded-2xl block"
        >
          الإشعارات
        </Link>

        <Link
          href="/settings"
          className="bg-[#0b1325] hover:bg-[#111c34] transition px-5 py-4 rounded-2xl block"
        >
          الإعدادات
        </Link>

      </nav>

      {/* FOOTER */}

      <div className="mt-auto">

        <div className="bg-[#0b1325] rounded-3xl p-5">

          <div className="text-gray-400 mb-2">
            حالة النظام
          </div>

          <div className="text-green-400 font-black text-xl">
            متصل
          </div>

        </div>

      </div>

    </aside>

  )
}