"use client"

import Link from "next/link"

const committees = [
  {
    id: "tamayoz",
    name: "لجنة التميز",
    progress: 76,
    uploaded: 22,
    required: 29,
  },
  {
    id: "edaria",
    name: "اللجنة الإدارية",
    progress: 62,
    uploaded: 18,
    required: 29,
  },
  {
    id: "tahseel",
    name: "لجنة التحصيل الدراسي",
    progress: 45,
    uploaded: 13,
    required: 29,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020B2D] text-white p-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4">
            منصة الفاروق الثانوية
          </h1>

          <p className="text-gray-400 text-xl">
            متابعة واعتماد أعمال اللجان
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {committees.map((committee) => (
            <Link
              key={committee.id}
              href={`/committee/${committee.id}`}
              className="bg-[#07153D] rounded-3xl p-6 border border-cyan-900 hover:scale-105 transition"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-5xl">📁</div>

                <div className="text-cyan-400 text-3xl font-black">
                  {committee.progress}%
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">
                {committee.name}
              </h2>

              <div className="w-full h-4 bg-[#0A1B4F] rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{
                    width: `${committee.progress}%`,
                  }}
                />
              </div>

              <div className="flex justify-between text-gray-400">
                <span>
                  المطلوب: {committee.required}
                </span>

                <span>
                  المرفوع: {committee.uploaded}
                </span>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  )
}