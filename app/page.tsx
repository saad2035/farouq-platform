"use client"

import { useParams } from "next/navigation"

export default function CommitteePage() {

  const params = useParams()

  const committeeName =
    decodeURIComponent(
      params.id as string
    )

  return (

    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-6xl font-black mb-4">
            {committeeName}
          </h1>

          <p className="text-gray-400 text-2xl">
            إدارة ملفات اللجنة
          </p>

        </div>

        <div className="bg-[#081225] rounded-[40px] p-10 border border-cyan-500/10 mb-10">

          <div className="flex justify-center">

            <label className="bg-cyan-400 hover:bg-cyan-300 transition text-black text-2xl font-black px-10 py-5 rounded-[30px] cursor-pointer shadow-[0_0_40px_rgba(34,211,238,0.5)]">

              رفع ملف جديد

              <input
                type="file"
                className="hidden"
              />

            </label>

          </div>

        </div>

        <div className="bg-[#081225] rounded-[40px] p-10 border border-cyan-500/10">

          <h2 className="text-5xl font-black mb-10 text-center">
            الملفات المرفوعة
          </h2>

          <div className="bg-[#0b1428] rounded-[30px] p-10 text-center text-gray-400 text-2xl">

            لا توجد ملفات مرفوعة حتى الآن

          </div>

        </div>

      </div>

    </main>

  )
}