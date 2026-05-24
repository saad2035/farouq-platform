"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const committees = [
    {
      id: "tamayoz",
      name: "لجنة التميز",
      progress: 82,
    },
    {
      id: "edaria",
      name: "اللجنة الإدارية",
      progress: 65,
    },
    {
      id: "tahseel",
      name: "لجنة التحصيل الدراسي",
      progress: 45,
    },
  ]

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">
      <h1 className="text-5xl font-bold text-center mb-4">
        منصة الفاروق الثانوية
      </h1>

      <p className="text-center text-gray-400 mb-10">
        متابعة واعتماد أعمال اللجان
      </p>

      <div className="grid gap-6">
        {committees.map((committee) => (
          <div
            key={committee.id}
            onClick={() =>
              router.push(`/committee/${committee.id}`)
            }
            className="bg-[#07122b] border border-cyan-900 rounded-3xl p-6 cursor-pointer hover:scale-[1.02] transition"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">
                {committee.name}
              </h2>

              <span className="text-cyan-400 text-2xl font-bold">
                {committee.progress}%
              </span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
              <div
                className="bg-cyan-400 h-4 rounded-full"
                style={{
                  width: `${committee.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}