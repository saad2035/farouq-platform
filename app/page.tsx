"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import StatsCards from "./components/StatsCards"
import Workflow from "./components/Workflow"
import CommitteeList from "./components/CommitteeList"

export default function Home() {

  const router = useRouter()

  useEffect(() => {

    const role =
      localStorage.getItem("role")

    if (!role) {

      router.push("/login")

    }

  }, [])

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

        <Workflow />

        {/* COMMITTEES */}

        <CommitteeList />

      </div>

    </main>

  )
}