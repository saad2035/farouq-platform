"use client"

import { useParams } from "next/navigation"
import { useState } from "react"

const committees: any = {
  tamayoz: {
    name: "لجنة التميز",
    total: 29,
  },

  edaria: {
    name: "اللجنة الإدارية",
    total: 29,
  },

  tahseel: {
    name: "لجنة التحصيل الدراسي",
    total: 29,
  },

  towjeeh: {
    name: "لجنة التوجيه الطلابي",
    total: 29,
  },

  nashat: {
    name: "لجنة النشاط الطلابي",
    total: 29,
  },

  amn: {
    name: "فريق الأمن والسلامة",
    total: 29,
  },

  eaqa: {
    name: "فريق ذوي الإعاقة",
    total: 29,
  },
}

export default function CommitteePage() {

  const params = useParams()

  const id = params.id as string

  const committee = committees[id]

  const [files, setFiles] = useState<any[]>([])

  const approvedFiles = files.filter(
    (file) => file.status === "تم الاعتماد"
  ).length

  const progress = Math.round(
    (approvedFiles / committee.total) * 100
  )

  const handleUpload = (e: any) => {

    const selectedFiles = Array.from(e.target.files)

    const uploaded = selectedFiles.map((file: any) => ({
      name: file.name,
      status: "قيد المراجعة",
    }))

    setFiles([...files, ...uploaded])
  }

  const approveFile = (index: number) => {

    const updated = [...files]

    updated[index].status = "تم الاعتماد"

    setFiles(updated)
  }

  const rejectFile = (index: number) => {

    const updated = [...files]

    updated[index].status = "مرفوض"

    setFiles(updated)
  }

  return (

    <main className="min-h-screen bg-[#020817] text-white p-4 md:p-10">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-10">

          <h1 className="text-4xl md:text-7xl font-black mb-4">
            {committee.name}
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl">
            متابعة واعتماد ملفات اللجنة
          </p>

        </div>

        {/* UPLOAD */}

        <div className="bg-[#071226] border border-cyan-900/20 rounded-[35px] p-8 mb-10 text-center">

          <label className="cursor-pointer">

            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleUpload}
            />

            <div className="inline-block bg-cyan-400 hover:bg-cyan-300 transition text-black font-black text-2xl px-10 py-5 rounded-[25px] shadow-[0_0_35px_rgba(34,211,238,0.4)]">
              + رفع ملف جديد
            </div>

          </label>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 gap-4 mb-10">

          <div className="bg-[#071226] rounded-[30px] p-6 text-center">

            <div className="text-gray-400 mb-4 text-lg">
              نسبة الإنجاز
            </div>

            <div className="text-cyan-400 text-5xl font-black">
              {progress}%
            </div>

          </div>

          <div className="bg-[#071226] rounded-[30px] p-6 text-center">

            <div className="text-gray-400 mb-4 text-lg">
              الملفات المعتمدة
            </div>

            <div className="text-green-400 text-5xl font-black">
              {approvedFiles}
            </div>

          </div>

          <div className="bg-[#071226] rounded-[30px] p-6 text-center">

            <div className="text-gray-400 mb-4 text-lg">
              إجمالي المطلوب
            </div>

            <div className="text-white text-5xl font-black">
              {committee.total}
            </div>

          </div>

          <div className="bg-[#071226] rounded-[30px] p-6 text-center">

            <div className="text-gray-400 mb-4 text-lg">
              المتبقي
            </div>

            <div className="text-red-400 text-5xl font-black">
              {committee.total - approvedFiles}
            </div>

          </div>

        </div>

        {/* PROGRESS */}

        <div className="bg-[#071226] rounded-[35px] p-8 mb-10">

          <div className="flex justify-between mb-4">

            <span className="text-2xl font-bold">
              التقدم
            </span>

            <span className="text-cyan-400 text-2xl font-black">
              {progress}%
            </span>

          </div>

          <div className="w-full h-5 bg-[#0b1325] rounded-full overflow-hidden">

            <div
              className="h-full bg-cyan-400 rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* FILES */}

        <div className="bg-[#071226] rounded-[35px] p-6">

          <h2 className="text-4xl font-black mb-8 text-center">
            الملفات المرفوعة
          </h2>

          {files.length === 0 ? (

            <div className="bg-[#020b1d] rounded-[25px] p-12 text-center text-gray-400 text-2xl">
              لا توجد ملفات مرفوعة
            </div>

          ) : (

            <div className="space-y-5">

              {files.map((file, index) => (

                <div
                  key={index}
                  className="bg-[#020b1d] rounded-[25px] p-5"
                >

                  <div className="flex flex-col gap-5">

                    <div>

                      <div className="text-2xl font-black mb-3 break-all">
                        📄 {file.name}
                      </div>

                      <div
                        className={`text-xl font-bold ${
                          file.status === "تم الاعتماد"
                            ? "text-green-400"
                            : file.status === "مرفوض"
                            ? "text-red-400"
                            : "text-yellow-400"
                        }`}
                      >
                        {file.status}
                      </div>

                    </div>

                    <div className="flex gap-3 flex-wrap">

                      <button
                        onClick={() => approveFile(index)}
                        className="bg-green-500 hover:bg-green-400 transition text-black font-black px-5 py-3 rounded-2xl"
                      >
                        اعتماد
                      </button>

                      <button
                        onClick={() => rejectFile(index)}
                        className="bg-red-500 hover:bg-red-400 transition text-white font-black px-5 py-3 rounded-2xl"
                      >
                        رفض
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </main>
  )
}