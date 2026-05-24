"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function CommitteePage() {
  const params = useParams()

  const committeeName = decodeURIComponent(
    params.id as string
  )

  const [files, setFiles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const committee = {
    name: committeeName,
    required: 29,
  }

  // تحميل الملفات
  const loadFiles = async () => {
    const { data, error } = await supabase
      .from("files")
      .select("*")
      .eq("committee", committee.name)
      .order("created_at", { ascending: false })

    if (!error && data) {
      setFiles(data)
    }

    setLoading(false)
  }

  useEffect(() => {
    loadFiles()
  }, [])

  // رفع ملف
  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]

    if (!file) return

    const filePath = `${committee.name}/${Date.now()}-${file.name}`

    // رفع الملف إلى Storage
    const { error: uploadError } =
      await supabase.storage
        .from("committee-files1")
        .upload(filePath, file)

    if (uploadError) {
      alert("فشل رفع الملف")
      console.log(uploadError)
      return
    }

    // رابط الملف
    const {
      data: { publicUrl },
    } = supabase.storage
      .from("committee-files1")
      .getPublicUrl(filePath)

    // حفظ البيانات
    const { error: insertError } =
      await supabase.from("files").insert([
        {
          committee: committee.name,
          file_name: file.name,
          file_url: publicUrl,
          status: "قيد المراجعة",
          created_at: new Date(),
        },
      ])

    if (insertError) {
      alert("فشل حفظ البيانات")
      console.log(insertError)
      return
    }

    // تحديث الملفات
    await loadFiles()

    alert("تم رفع الملف بنجاح")
  }

  // اعتماد الملف
  const approveFile = async (id: number) => {
    await supabase
      .from("files")
      .update({
        status: "تم الاعتماد",
      })
      .eq("id", id)

    loadFiles()
  }

  // رفض الملف
  const rejectFile = async (id: number) => {
    await supabase
      .from("files")
      .update({
        status: "مرفوض",
      })
      .eq("id", id)

    loadFiles()
  }

  const uploadedCount = files.length

  const percent = Math.round(
    (uploadedCount / committee.required) * 100
  )

  return (
    <main className="min-h-screen bg-[#020b2d] text-white p-5">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black mb-3">
          {committee.name}
        </h1>

        <p className="text-gray-400 text-2xl mb-10">
          إدارة ملفات اللجنة
        </p>

        {/* رفع الملفات */}
        <div className="bg-[#07143f] rounded-[35px] p-8 mb-10 border border-cyan-900">

          <label className="bg-cyan-400 text-black font-black text-3xl px-10 py-5 rounded-full cursor-pointer inline-block shadow-[0_0_40px_#00d9ff]">
            + رفع ملف جديد

            <input
              type="file"
              className="hidden"
              onChange={handleUpload}
            />
          </label>

        </div>

        {/* الإحصائيات */}
        <div className="grid grid-cols-2 gap-5 mb-10">

          <div className="bg-[#07143f] rounded-[30px] p-8">
            <p className="text-gray-400 text-2xl mb-4">
              نسبة الإنجاز
            </p>

            <h2 className="text-cyan-400 text-6xl font-black">
              {percent}%
            </h2>
          </div>

          <div className="bg-[#07143f] rounded-[30px] p-8">
            <p className="text-gray-400 text-2xl mb-4">
              الملفات المرفوعة
            </p>

            <h2 className="text-green-400 text-6xl font-black">
              {uploadedCount}
            </h2>
          </div>

        </div>

        {/* الملفات */}
        <div className="bg-[#07143f] rounded-[35px] p-8">

          <h2 className="text-5xl font-black mb-8">
            الملفات المرفوعة
          </h2>

          {loading ? (
            <p>جاري التحميل...</p>
          ) : files.length === 0 ? (
            <div className="bg-[#091845] rounded-[25px] p-10 text-center text-gray-400 text-3xl">
              لا توجد ملفات مرفوعة حتى الآن
            </div>
          ) : (
            <div className="space-y-5">

              {files.map((file) => (

                <div
                  key={file.id}
                  className="bg-[#091845] rounded-[25px] p-6"
                >

                  <div className="flex justify-between items-center mb-4">

                    <div>
                      <h3 className="text-2xl font-bold">
                        {file.file_name}
                      </h3>

                      <p className="text-gray-400 mt-2">
                        {file.status}
                      </p>
                    </div>

                    <a
                      href={file.file_url}
                      target="_blank"
                      className="bg-cyan-500 text-black px-5 py-3 rounded-full font-bold"
                    >
                      عرض الملف
                    </a>

                  </div>

                  {/* أزرار الاعتماد */}
                  <div className="flex gap-3 mt-5">

                    <button
                      onClick={() => approveFile(file.id)}
                      className="bg-green-500 text-black font-bold px-5 py-3 rounded-full"
                    >
                      اعتماد
                    </button>

                    <button
                      onClick={() => rejectFile(file.id)}
                      className="bg-red-500 text-white font-bold px-5 py-3 rounded-full"
                    >
                      رفض
                    </button>

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