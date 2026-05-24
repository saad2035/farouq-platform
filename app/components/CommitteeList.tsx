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

]

export default function CommitteeList() {

  return (

    <div className="bg-[#071226] rounded-3xl p-6 mt-6">

      <h2 className="text-3xl font-bold mb-6">
        اللجان
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {committees.map((committee) => (

          <Link
            key={committee.id}
            href={`/committee/${committee.id}`}
          >

            <div className="bg-[#0b1730] rounded-3xl p-6 border border-cyan-900 hover:border-cyan-400 transition-all">

              <div className="flex justify-between items-center mb-5">

                <div className="text-5xl">
                  📁
                </div>

                <div className="text-cyan-400 text-3xl font-bold">
                  {committee.progress}%
                </div>

              </div>

              <h3 className="text-3xl font-bold mb-4">
                {committee.name}
              </h3>

              <div className="w-full h-3 bg-[#09111f] rounded-full overflow-hidden">

                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{
                    width: `${committee.progress}%`
                  }}
                />

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>

  )
}