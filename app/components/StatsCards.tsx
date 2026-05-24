function StatsCards() {

  return (

    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-10">

      <div className="bg-[#071226] rounded-[30px] p-8 border border-cyan-900/20">

        <div className="text-gray-400 mb-4 text-xl">
          إجمالي المطلوب
        </div>

        <div className="text-6xl font-black">
          29
        </div>

      </div>

      <div className="bg-[#071226] rounded-[30px] p-8 border border-cyan-900/20">

        <div className="text-gray-400 mb-4 text-xl">
          الملفات المرفوعة
        </div>

        <div className="text-6xl font-black text-green-400">
          18
        </div>

      </div>

      <div className="bg-[#071226] rounded-[30px] p-8 border border-cyan-900/20">

        <div className="text-gray-400 mb-4 text-xl">
          الملفات الناقصة
        </div>

        <div className="text-6xl font-black text-red-400">
          11
        </div>

      </div>

      <div className="bg-[#071226] rounded-[30px] p-8 border border-cyan-900/20">

        <div className="text-gray-400 mb-4 text-xl">
          نسبة الإنجاز
        </div>

        <div className="text-6xl font-black text-cyan-400">
          61%
        </div>

      </div>

    </div>

  )
}

export default StatsCards