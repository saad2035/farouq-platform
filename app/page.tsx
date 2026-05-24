"use client"

import Link from "next/link"

const committees = [
  {
    id: "tamayoz",
    name: "لجنة التميز",
    progress: 0,
    uploaded: 0,
    total: 29,
  },
  {
    id: "edaria",
    name: "اللجنة الإدارية",
    progress: 0,
    uploaded: 0,
    total: 29,
  },
  {
    id: "tahseel",
    name: "لجنة التحصيل الدراسي",
    progress: 0,
    uploaded: 0,
    total: 29,
  },
  {
    id: "towjeeh",
    name: "لجنة التوجيه الطلابي",
    progress: 0,
    uploaded: 0,
    total: 29,
  },
  {
    id: "nashat",
    name: "لجنة النشاط الطلابي",
    progress: 0,
    uploaded: 0,
    total: 29,
  },
  {
    id: "amn",
    name: "فريق الأمن والسلامة",
    progress: 0,
    uploaded: 0,
    total: 29,
  },
  {
    id: "eaqa",
    name: "فريق ذوي الإعاقة",
    progress: 0,
    uploaded: 0,
    total: 29,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            منصة الفاروق الثانوية
          </h1>

          <p className="text-gray-400 text-xl">
            متابعة واعتماد أعمال اللجان
          </p>
        </div>

        {/* BUTTON */}

        <div className="flex justify-center mb-12">
          <button className="bg-cyan-400 hover:bg-cyan-300 transition text-black font-black text-2xl px-10 py-5 rounded-[30px] shadow-[0_0_40px_rgba(34,211,238,0.4)]">
            + رفع ملف جديد
          </button>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">

          <div className="bg-[#071226] border border-cyan-900/30 rounded-[30px] p-8 text-center">
            <div className="text-gray-400 text-xl mb-4">
              إجمالي المطلوب
            </div>

            <div className="text-6xl font-black">
              29
            </div>
          </div>

          <div className="bg-[#071226] border border-cyan-900/30 rounded-[30px] p-8 text-center">
            <div className="text-gray-400 text-xl mb-4">
              نسبة الإنجاز
            </div>

            <div className="text-6xl font-black text-cyan-400">
              0%
            </div>
          </div>

          <div className="bg-[#071226] border border-cyan-900/30 rounded-[30px] p-8 text-center">
            <div className="text-gray-400 text-xl mb-4">
              الملفات المرفوعة
            </div>

            <div className="text-6xl font-black text-green-400">
              0
            </div>
          </div>

          <div className="bg-[#071226] border border-cyan-900/30 rounded-[30px] p-8 text-center">
            <div className="text-gray-400 text-xl mb-4">
              الملفات الناقصة
            </div>

            <div className="text-6xl font-black text-red-400">
              29
            </div>
          </div>

        </div>

        {/* COMMITTEES */}

        <div className="bg-[#071226] border border-cyan-900/30 rounded-[40px] p-8">

          <h2 className="text-4xl font-black mb-8 text-center">
            اللجان
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {committees.map((committee) => (

              <Link
                href={`/committee/${committee.id}`}
                key={committee.id}
                className="bg-[#020b1d] border border-cyan-900/30 rounded-[28px] p-6 block hover:scale-[1.03] transition duration-300"
              >

                <div className="flex items-center justify-between mb-6">

                  <div className="text-cyan-400 text-3xl font-black">
                    {committee.progress}%
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#16233d] flex items-center justify-center text-3xl">
                    📁
                  </div>

                </div>

                <h3 className="text-3xl font-black mb-6 leading-relaxed">
                  {committee.name}
                </h3>

                <div className="w-full h-4 bg-[#09111f] rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-cyan-400 rounded-full"
                    style={{
                      width: `${committee.progress}%`,
                    }}
                  />
                </div>

                <div className="flex justify-between text-gray-400 text-lg">

                  <span>
                    المرفوع: {committee.uploaded}
                  </span>

                  <span>
                    المطلوب: {committee.total}
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>
    </main>
  )
}