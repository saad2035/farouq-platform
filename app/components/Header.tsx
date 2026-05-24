export default function Header() {

  return (

    <div className="flex items-center justify-between mb-10">

      <div>

        <h1 className="text-5xl font-black mb-2">
          منصة الفاروق الثانوية
        </h1>

        <p className="text-gray-400 text-xl">
          Smart Accreditation Governance Platform
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="bg-[#071226] px-5 py-4 rounded-2xl">
          المشرف العام
        </div>

        <div className="w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center text-black font-black text-2xl">
          س
        </div>

      </div>

    </div>

  )
}