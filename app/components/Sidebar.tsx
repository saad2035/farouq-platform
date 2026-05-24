import Link from "next/link"

function Sidebar() {

  return (

    <aside className="hidden lg:flex w-[260px] min-h-screen bg-[#071226] border-l border-cyan-900/20 p-6 flex-col">

      <div className="mb-14">

        <h2 className="text-3xl font-black text-cyan-400">
          FAROUQ
        </h2>

      </div>

      <nav className="space-y-4">

        <Link
          href="/"
          className="block bg-cyan-400 text-black font-black px-5 py-4 rounded-2xl"
        >
          الرئيسية
        </Link>

        <Link
          href="/committee/tamayoz"
          className="block bg-[#020b1d] hover:bg-[#0a1731] transition px-5 py-4 rounded-2xl"
        >
          لجنة التميز
        </Link>

        <Link
          href="/committee/edaria"
          className="block bg-[#020b1d] hover:bg-[#0a1731] transition px-5 py-4 rounded-2xl"
        >
          اللجنة الإدارية
        </Link>

        <Link
          href="/committee/tahseel"
          className="block bg-[#020b1d] hover:bg-[#0a1731] transition px-5 py-4 rounded-2xl"
        >
          التحصيل الدراسي
        </Link>

      </nav>

    </aside>

  )
}

export default Sidebar