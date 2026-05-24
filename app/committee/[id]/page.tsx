"use client"

import { useParams } from "next/navigation"

export default function CommitteePage() {
  const params = useParams()

  return (
    <main className="min-h-screen bg-[#020817] text-white p-10">
      <h1 className="text-5xl font-bold mb-6">
        صفحة اللجنة
      </h1>

      <div className="bg-[#07122b] p-6 rounded-3xl border border-cyan-900">
        <p className="text-3xl text-cyan-400">
          لجنة: {params.id}
        </p>
      </div>
    </main>
  )
}