"use client"

import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase"

export default function Home() {

  const [files, setFiles] = useState<any[]>([])
  const [uploading, setUploading] = useState(false)

  const committees = [
    "لجنة التميز",
    "اللجنة الإدارية",
    "لجنة التحصيل الدراسي",
    "لجنة التوجيه الطلابي",
    "لجنة النشاط الطلابي",
  ]

  async function loadFiles() {

    const { data } = await supabase
      .from("files")
      .select("*")
      .order("created_at", { ascending: false })

    if (data) {
      setFiles(data)
    }
  }

  useEffect(() => {
    loadFiles()
  }, [])

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>,
    committee: string
  ) {

    const file = e.target.files?.[0]

    if (!file) return

    setUploading(true)

    const fileName = `${Date.now()}-${file.name}`

    const { error: uploadError } = await supabase.storage
      .from("committee-files")
      .upload(fileName, file)

    if (uploadError) {
      alert("فشل رفع الملف")
      setUploading(false)
      return
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("committee-files")
      .getPublicUrl(fileName)

    await supabase.from("files").insert([
      {
        committee,
        file_name: file.name,
        file_url: publicUrl,
      },
    ])

    await loadFiles()

    setUploading(false)

    alert("تم رفع الملف بنجاح")
  }

  function committeeStats(name: string) {

    const committeeFiles = files.filter(
      (f) => f.committee === name
    )

    const uploaded = committeeFiles.length

    const required = 10

    const progress = Math.min(
      Math.round((uploaded / required) * 100),
      100
    )

    return {
      uploaded,
      required,
      progress,
      missing: required - uploaded,
    }
  }

  const totalUploaded = files.length
  const totalRequired = committees.length * 10

  const overallProgress = Math.round(
    (totalUploaded / totalRequired) * 100
  )

  return (

    <main className="min-h-screen bg-[#020817] text-white p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-7xl font-black mb-5">
            اللجنة الإدارية
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl">
            متابعة دورة اعتماد الملفات والوثائق
          </p>

        </div>

        {/* OVERALL STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">

          <div className="bg-[#081225] rounded-3xl p-6 text-center">

            <p className="text-gray-400 mb-3">
              نسبة الإنجاز
            </p>

            <h2 className="text-5xl font-black text-cyan-400">
              {overallProgress}%
            </h2>

          </div>

          <div className="bg-[#081225] rounded-3xl p-6 text-center">

            <p className="text-gray-400 mb-3">
              إجمالي المطلوب
            </p>

            <h2 className="text-5xl font-black">
              {totalRequired}
            </h2>

          </div>

          <div className="bg-[#081225] rounded-3xl p-6 text-center">

            <p className="text-gray-400 mb-3">
              الملفات المرفوعة
            </p>

            <h2 className="text-5xl font-black text-green-400">
              {totalUploaded}
            </h2>

          </div>

          <div className="bg-[#081225] rounded-3xl p-6 text-center">

            <p className="text-gray-400 mb-3">
              الملفات الناقصة
            </p>

            <h2 className="text-5xl font-black text-red-400">
              {totalRequired - totalUploaded}
            </h2>

          </div>

        </div>

        {/* COMMITTEES */}

        <div className="grid md:grid-cols-2 gap-6">

          {committees.map((committee, index) => {

            const stats = committeeStats(committee)

            return (

              <div
                key={index}
                className="bg-[#081225] rounded-[35px] p-6 border border-cyan-500/10"
              >

                <div className="flex items-center justify-between mb-6">

                  <div>

                    <h2 className="text-2xl md:text-3xl font-black mb-2">
                      {committee}
                    </h2>

                    <p className="text-gray-400">
                      {stats.uploaded} من {stats.required} ملفات
                    </p>

                  </div>

                  <div className="text-4xl font-black text-cyan-400">
                    {stats.progress}%
                  </div>

                </div>

                {/* PROGRESS */}

                <div className="w-full h-4 bg-[#111827] rounded-full overflow-hidden mb-6">

                  <div
                    className="h-full bg-cyan-400 rounded-full transition-all"
                    style={{
                      width: `${stats.progress}%`,
                    }}
                  />

                </div>

                {/* UPLOAD */}

                <label className="bg-cyan-400 hover:bg-cyan-300 transition cursor-pointer text-black font-bold px-6 py-4 rounded-2xl inline-block mb-6">

                  {uploading
                    ? "جارٍ الرفع..."
                    : "رفع ملف جديد"}

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      handleUpload(e, committee)
                    }
                  />

                </label>

                {/* FILES */}

                <div className="space-y-3">

                  {files
                    .filter(
                      (f) => f.committee === committee
                    )
                    .map((file, i) => (

                      <div
                        key={i}
                        className="bg-[#0b1428] rounded-2xl p-4"
                      >

                        <div className="flex items-center justify-between mb-3">

                          <div>

                            <p className="font-bold text-lg">
                              {file.file_name}
                            </p>

                            <p className="text-sm text-gray-400">
                              {file.stage}
                            </p>

                          </div>

                          <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-xl text-sm">
                            {file.status}
                          </span>

                        </div>

                        <a
                          href={file.file_url}
                          target="_blank"
                          className="text-cyan-400 underline"
                        >
                          عرض الملف
                        </a>

                      </div>

                    ))}

                </div>

              </div>

            )
          })}

        </div>

      </div>

    </main>

  )
}