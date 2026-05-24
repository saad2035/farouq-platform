"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import StatsCards from "../components/StatsCards"
import CommitteeCard from "../components/CommitteeCard"

const committees = [

  {
    id: "tamayoz",
    name: "لجنة التميز",
    progress: 82,
  },

  {
    id: "edaria",
    name: "اللجنة الإدارية",
    progress: 61,
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

  {
    id: "nashat",
    name: "لجنة النشاط الطلابي",
    progress: 91,
  },

  {
    id: "amn",
    name: "فريق الأمن والسلامة",
    progress: 53,
  },

  {
    id: "eaqa",
    name: "فريق ذوي الإعاقة",
    progress: 37,
  },

]

export default function Home() {

  const router = useRouter()

  useEffect(() => {

    const role =
      localStorage.getItem("role")

    if (!role) {

      router.push("/login")

    }

  }, [router])

  return (

    <main className="min-h-screen bg-[#020817] text-white flex">

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENT */}

      <div className="flex-1 p-5 md:p-10 overflow-x-hidden">

        {/* HEADER */}

        <Header />

        {/* STATS */}

        <StatsCards />

        {/* WORKFLOW */}

        <div className="bg-[#071226] rounded-[35px] border border-cyan-900/20 p-8 mb-10">

          <div className="mb-8">

            <h2 className="text-4xl font-black mb-3">
              دورة الاعتماد
            </h2>

            <p className="text-gray-400 text-lg">
              جميع الملفات تمر بمراحل المراجعة والاعتماد
            </p>

          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">

            <div className="bg-[#020b1d] rounded-[30px] p-8 text-center">

              <div className="w-20 h-20 rounded-full bg-cyan-400 flex items-center justify-center text-black text-4xl font-black mx-auto mb-5">
                1
              </div>

              <div className="text-3xl font-black">
                رفع الملف
              </div>

            </div>

            <div className="bg-[#020b1d] rounded-[30px] p-8 text-center">

              <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-black text-4xl font-black mx-auto mb-5">
                2
              </div>

              <div className="text-3xl font-black">
                المراجعة
              </div>

            </div>

            <div className="bg-[#020b1d] rounded-[30px] p-8 text-center">

              <div className="w-20 h-20 rounded-full bg-blue-400 flex items-center justify-center text-black text-4xl font-black mx-auto mb-5">
                3
              </div>

              <div className="text-3xl font-black">
                التدقيق
              </div>

            </div>

            <div className="bg-[#020b1d] rounded-[30px] p-8 text-center">

              <div className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center text-black text-4xl font-black mx-auto mb-5">
                4
              </div>

              <div className="text-3xl font-black">
                الاعتماد
              </div>

            </div>

          </div>

        </div>

        {/* COMMITTEES */}

        <div className="bg-[#071226] rounded-[35px] border border-cyan-900/20 p-8">

          <div className="mb-10">

            <h2 className="text-4xl font-black mb-3">
              اللجان والفرق
            </h2>

            <p className="text-gray-400 text-lg">
              متابعة أعمال اللجان المدرسية
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {committees.map((committee) => (

              <CommitteeCard
                key={committee.id}
                id={committee.id}
                name={committee.name}
                progress={committee.progress}
              />

            ))}

          </div>

        </div>

      </div>

    </main>

  )
}