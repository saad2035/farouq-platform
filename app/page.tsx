"use client"

import Link from "next/link"

const committees = [
  {
    id: "tamayoz",
    name: "لجنة التميز",
    progress: 82,
  },
  {
    id: "edaria",
    name: "اللجنة الإدارية",
    progress: 64,
  },
  {
    id: "tahseel",
    name: "لجنة التحصيل الدراسي",
    progress: 45,
  },
  {
    id: "towjeeh",
    name: "لجنة التوجيه الطلابي",
    progress: 71,
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-4">
            منصة الفاروق الثانوية
          </h1>

          <p className="text-slate-400 text-lg">
            إدارة ومتابعة أعمال اللجان والفرق المدرسية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {committees.map((committee) => (
            <Link
              key={committee.id}
              href={`/committee/${committee.id}`}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {committee.name}
                </h2>

                <span className="text-cyan-400 font-bold text-xl">
                  %{committee.progress}
                </span>
              </div>

              <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full rounded-full"
                  style={{ width: `${committee.progress}%` }}
                />
              </div>

              <p className="mt-4 text-slate-400">
                متابعة الملفات والاعتمادات الخاصة باللجنة
              </p>

            </Link>
          ))}

        </div>
      </div>
    </main>
  )
}