"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function AdminPage() {

  const [files, setFiles] = useState<any[]>([])

  useEffect(() => {
    fetchFiles()
  }, [])

  async function fetchFiles() {

    const { data, error } = await supabase
      .from("files")
      .select("*")
      .order("id", { ascending: false })

    if (!error && data) {
      setFiles(data)
    }
  }

  async function approveFile(id: number) {

    await supabase
      .from("files")
      .update({
        status: "معتمد"
      })
      .eq("id", id)

    fetchFiles()
  }

  async function rejectFile(id: number) {

    await supabase
      .from("files")
      .update({
        status: "مرفوض"
      })
      .eq("id", id)

    fetchFiles()
  }

  return (

    <main className="min-h-screen bg-[#020817] text-white p-6">

      <h1 className="text-5xl font-bold mb-3">
        لوحة المشرف
      </h1>

      <p className="text-gray-400 mb-10 text-xl">
        متابعة واعتماد ملفات اللجان
      </p>

      <div className="grid gap-6">

        {files.map((file) => (

          <div
            key={file.id}
            className="bg-[#071226] rounded-3xl p-6 border border-cyan-900"
          >

            <div className="flex justify-between items-start flex-wrap gap-4">

              <div>

                <h2 className="text-3xl font-bold mb-2">
                  {file.file_name}
                </h2>

                <p className="text-cyan-400 text-lg">
                  {file.committee}
                </p>

                <p className="text-gray-400 mt-2">
                  الحالة:
                  {" "}
                  <span className="text-white">
                    {file.status || "قيد المراجعة"}
                  </span>
                </p>

              </div>

              <div className="flex gap-3 flex-wrap">

                <a
                  href={file.file_url}
                  target="_blank"
                  className="bg-cyan-500 text-black px-5 py-3 rounded-2xl font-bold"
                >
                  عرض الملف
                </a>

                <button
                  onClick={() => approveFile(file.id)}
                  className="bg-green-500 px-5 py-3 rounded-2xl font-bold"
                >
                  اعتماد
                </button>

                <button
                  onClick={() => rejectFile(file.id)}
                  className="bg-red-500 px-5 py-3 rounded-2xl font-bold"
                >
                  رفض
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}