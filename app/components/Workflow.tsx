export default function Workflow() {
  return (
    <div className="bg-[#071226] rounded-3xl p-6 mt-6">
      <h2 className="text-3xl font-bold mb-4">
        دورة الاعتماد
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-[#0b1730] p-6 rounded-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-400 text-black flex items-center justify-center mx-auto text-2xl font-bold">
            1
          </div>

          <p className="mt-4 text-xl">
            رفع الملف
          </p>
        </div>

        <div className="bg-[#0b1730] p-6 rounded-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center mx-auto text-2xl font-bold">
            2
          </div>

          <p className="mt-4 text-xl">
            المراجعة
          </p>
        </div>

        <div className="bg-[#0b1730] p-6 rounded-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-blue-400 text-black flex items-center justify-center mx-auto text-2xl font-bold">
            3
          </div>

          <p className="mt-4 text-xl">
            التدقيق
          </p>
        </div>

        <div className="bg-[#0b1730] p-6 rounded-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-green-400 text-black flex items-center justify-center mx-auto text-2xl font-bold">
            4
          </div>

          <p className="mt-4 text-xl">
            الاعتماد
          </p>
        </div>

      </div>
    </div>
  )
}