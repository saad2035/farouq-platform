"use client"

import { useState } from "react"

export default function Home() {

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const committees = [
    { name: "لجنة التميز", progress: 82 },
    { name: "اللجنة الإدارية", progress: 61 },
    { name: "لجنة التحصيل الدراسي", progress: 45 },
    { name: "لجنة التوجيه الطلابي", progress: 71 },
    { name: "لجنة النشاط الطلابي", progress: 91 },
  ]

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0]

    if (!file) return

    setUploadedFiles((prev) => [
      ...prev,
      file.name,
    ])
  }

  return (

    <main className="min-h-screen bg-[#020817] text-white p-4 md:p-8 overflow-x-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">

          <div className="text-center md:text-right">

            <h1 className="text-4xl md:text-7xl font-black mb-4">
              اللجنة الإدارية
            </h1>

            <p className="text-gray-400 text-lg md:text-2xl">
              متابعة دورة اعتماد الملفات والوثائق
            </p>

          </div>

          {/* UPLOAD BUTTON */}

          <label className="bg-cyan-400 hover:bg-cyan-300 transition cursor-pointer text-black font-bold px-8 py-5 rounded-3xl text-xl shadow-[0_0_30px_rgba(34,211,238,0.4)]">

            + رفع ملف جديد

            <input
              type="file"
              className="hidden"
              onChange={handleUpload}
            />

          </label>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          <div className="bg-[#081225] rounded-3xl p-6 text-center border border-cyan-500/10">

            <p className="text-gray-400 mb-3">
              نسبة الإنجاز
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-cyan-400">
              61%
            </h2>

          </div>

          <div className="bg-[#081225] rounded-3xl p-6 text-center border border-cyan-500/10">

            <p className="text-gray-400 mb-3">
              إجمالي المطلوب
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              29
            </h2>

          </div>

          <div className="bg-[#081225] rounded-3xl p-6 text-center border border-cyan-500/10">

            <p className="text-gray-400 mb-3">
              الملفات المرفوعة
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-green-400">
              {uploadedFiles.length}
            </h2>

          </div>

          <div className="bg-[#081225] rounded-3xl p-6 text-center border border-cyan-500/10">

            <p className="text-gray-400 mb-3">
              الملفات الناقصة
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-red-400">
              {29 - uploadedFiles.length}
            </h2>

          </div>

        </div>

        {/* WORKFLOW */}

        <div className="bg-[#081225] rounded-[40px] p-6 md:p-10 mb-10 border border-cyan-500/10">

          <h2 className="text-3xl md:text-5xl font-black mb-4 text-center">
            دورة الاعتماد
          </h2>

          <p className="text-gray-400 text-center mb-10 text-lg">
            جميع الملفات تمر بمراحل المراجعة والاعتماد
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              { step: 1, title: "رفع الملف", color: "bg-cyan-400" },
              { step: 2, title: "المراجعة", color: "bg-yellow-400" },
              { step: 3, title: "التدقيق", color: "bg-sky-400" },
              { step: 4, title: "الاعتماد", color: "bg-green-400" },
            ].map((item) => (

              <div
                key={item.step}
                className="bg-[#0b1428] rounded-3xl p-6 text-center"
              >

                <div
                  className={`w-20 h-20 ${item.color} rounded-full mx-auto flex items-center justify-center text-3xl font-black text-black mb-5`}
                >
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

        {/* COMMITTEES */}

        <div className="bg-[#081225] rounded-[40px] p-6 md:p-10 mb-10 border border-cyan-500/10">

          <h2 className="text-3xl md:text-5xl font-black mb-10 text-center">
            اللجان
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {committees.map((committee, index) => (

              <div
                key={index}
                className="bg-[#0b1428] rounded-3xl p-6"
              >

                <div className="flex items-center justify-between mb-4">

                  <h3 className="text-xl md:text-2xl font-bold">
                    {committee.name}
                  </h3>

                  <span className="text-cyan-400 text-2xl font-black">
                    {committee.progress}%
                  </span>

                </div>

                <div className="w-full h-3 bg-[#111827] rounded-full overflow-hidden">

                  <div
                    className="h-full bg-cyan-400 rounded-full"
                    style={{
                      width: `${committee.progress}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* UPLOADED FILES */}

        <div className="bg-[#081225] rounded-[40px] p-6 md:p-10 border border-cyan-500/10">

          <h2 className="text-3xl md:text-5xl font-black mb-10 text-center">
            الملفات المرفوعة
          </h2>

          {uploadedFiles.length === 0 ? (

            <div className="text-center text-gray-400 text-xl">
              لا توجد ملفات مرفوعة حتى الآن
            </div>

          ) : (

            <div className="space-y-4">

              {uploadedFiles.map((file, index) => (

                <div
                  key={index}
                  className="bg-[#0b1428] rounded-3xl p-5 flex items-center justify-between"
                >

                  <span className="text-lg md:text-xl font-bold">
                    {file}
                  </span>

                  <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-2xl">
                    تم الرفع
                  </span>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </main>

  )
}