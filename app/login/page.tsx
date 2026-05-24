"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    // مؤقتًا دخول تجريبي

    if (
      email === "admin@farouq.com"
    ) {

      localStorage.setItem(
        "role",
        "admin"
      )

      router.push("/")

      return
    }

    localStorage.setItem(
      "role",
      "committee"
    )

    router.push("/")
  }

  return (

    <main className="min-h-screen bg-[#020817] text-white flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-[#071226] rounded-[40px] p-10 border border-cyan-900/20">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-black mb-4">
            منصة الفاروق
          </h1>

          <p className="text-gray-400 text-xl">
            Smart Governance Platform
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div>

            <label className="block mb-3 text-xl font-bold">
              البريد الإلكتروني
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full bg-[#020b1d] border border-cyan-900/20 rounded-2xl px-5 py-4 text-xl outline-none"
            />

          </div>

          <div>

            <label className="block mb-3 text-xl font-bold">
              كلمة المرور
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full bg-[#020b1d] border border-cyan-900/20 rounded-2xl px-5 py-4 text-xl outline-none"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-300 transition text-black font-black text-2xl py-5 rounded-2xl shadow-[0_0_35px_rgba(34,211,238,0.4)]"
          >
            تسجيل الدخول
          </button>

        </form>

      </div>

    </main>

  )
}