"use client"

import Link from "next/link"

const committees = [
  {
    id: "tamayoz",
    name: "لجنة التميز",
    color: "from-cyan-500 to-blue-600",
    progress: 82,
  },
  {
    id: "edaria",
    name: "اللجنة الإدارية",
    color: "from-purple-500 to-pink-600",
    progress: 64,
  },
  {
    id: "tahseel",
    name: "لجنة التحصيل الدراسي",
    color: "from-emerald-500 to-green-600",
    progress: 45,
  },
  {
    id: "tawjeeh",
    name: "لجنة التوجيه الطلابي",
    color: "from-orange-500 to-red-500",
    progress: 71,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white p-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10">
          <h1 className="text-5xl font-black mb-3">
            منصة الفاروق الثانوية
          </h1>

          <p className="text-slate-400 text-xl">
            إدارة ومتابعة أعمال اللجان والفرق المدرسية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {committees.map((committee) => (
            <Link
              key={committee.id}
              href={`/committee/${committee.id}`}
            >
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer">

                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${committee.color} mb-5`}
                />

                <h2 className="text-2xl font-bold mb-6">
                  {committee.name}
                </h2>

                <div className="mb-2 flex justify-between text-sm text-slate-400">
                  <span>نسبة الإنجاز</span>
                  <span>{committee.progress}%</span>
                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${committee.color}`}
                    style={{ width: `${committee.progress}%` }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}