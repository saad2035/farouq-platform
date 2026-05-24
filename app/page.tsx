"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "../../lib/supabase"

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

  const [uploading, setUploading] =
    useState(false)

  async function loadFiles() {

    const { data, error } =
      await supabase
        .from("files")
        .select("*")
        .eq("committee", committee.name)
        .order("created_at", {
          ascending: false,
        })

    console.log(data)
    console.log(error)

    if (data) {
      setFiles(data)
    }
  }

  useEffect(() => {
    loadFiles()
  }, [])

  async function handleUpload(
    e: any
  ) {

    const file = e.target.files?.[0]

    if (!file) return

    setUploading(true)

    const fileName =
      Date.now() + "-" + file.name

    const {
      error: uploadError,
    } = await supabase.storage
      .from("committee-files1")
      .upload(fileName, file)

    if (uploadError) {

      alert(uploadError.message)

      setUploading(false)

      return
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("committee-files1")
      .getPublicUrl(fileName)

    const {
      data,
      error: insertError,
    } = await supabase
      .from("files")
      .insert([
        {
          committee: committee.name,
          file_name: file.name,
          file_url: publicUrl,
          status: "قيد المراجعة",
        },
      ])
      .select()

    console.log(data)

    console.log(insertError)

    if (insertError) {

      alert(insertError.message)

      setUploading(false)

      return
    }

    await loadFiles()

    setUploading(false)
  }

  async function approveFile(id: number) {

    await supabase
      .from("files")
      .update({
        status: "تم الاعتماد",
      })
      .eq("id", id)

    loadFiles()
  }

  async function rejectFile(id: number) {

    await supabase
      .from("files")
      .update({
        status: "مرفوض",
      })
      .eq("id", id)

    loadFiles()
  }

  const approvedFiles =
    files.filter(
      (file) =>
        file.status ===
        "تم الاعتماد"
    ).length

  const progress = Math.round(
    (approvedFiles /
      committee.total) *
      100
  )

  return (

    <main className="min-h-screen bg-[#020817] text-white p-4 md:p-10">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-4xl md:text-7xl font-black mb-4">
            {committee?.name}
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl">
            متابعة واعتماد ملفات اللجنة
          </p>

        </div>

        <div className="bg-[#071226] border border-cyan-900/20 rounded-[35px] p-8 mb-10 text-center">

          <label className="cursor-pointer">

            <input
              type="file"
              className="hidden"
              onChange={handleUpload}
            />

            <div className="inline-block bg-cyan-400 hover:bg-cyan-300 transition text-black font-black text-2xl px-10 py-5 rounded-[25px] shadow-[0_0_35px_rgba(34,211,238,0.4)]">

              {uploading
                ? "جارٍ الرفع..."
                : "+ رفع ملف جديد"}

            </div>

          </label>

        </div>

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
              {committee?.total}
            </div>

          </div>

          <div className="bg-[#071226] rounded-[30px] p-6 text-center">

            <div className="text-gray-400 mb-4 text-lg">
              المتبقي
            </div>

            <div className="text-red-400 text-5xl font-black">
              {committee?.total -
                approvedFiles}
            </div>

          </div>

        </div>

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

              {files.map((file) => (

                <div
                  key={file.id}
                  className="bg-[#020b1d] rounded-[25px] p-5"
                >

                  <div className="flex flex-col gap-5">

                    <div>

                      <div className="text-2xl font-black mb-3 break-all">

                        📄 {file.file_name}

                      </div>

                      <div
                        className={`text-xl font-bold ${
                          file.status ===
                          "تم الاعتماد"
                            ? "text-green-400"
                            : file.status ===
                              "مرفوض"
                            ? "text-red-400"
                            : "text-yellow-400"
                        }`}
                      >

                        {file.status}

                      </div>

                    </div>

                    <div className="flex gap-3 flex-wrap">

                      <a
                        href={file.file_url}
                        target="_blank"
                        className="bg-cyan-400 hover:bg-cyan-300 transition text-black font-black px-5 py-3 rounded-2xl"
                      >
                        عرض الملف
                      </a>

                      <button
                        onClick={() =>
                          approveFile(file.id)
                        }
                        className="bg-green-500 hover:bg-green-400 transition text-black font-black px-5 py-3 rounded-2xl"
                      >
                        اعتماد
                      </button>

                      <button
                        onClick={() =>
                          rejectFile(file.id)
                        }
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