"use client"

import {
  Folder,
  Upload,
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from "lucide-react"

const committees = [
  {
    name: "لجنة التميز",
    progress: 82,
    files: 22,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "اللجنة الإدارية",
    progress: 61,
    files: 18,
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "لجنة التحصيل الدراسي",
    progress: 45,
    files: 13,
    color: "from-red-400 to-pink-500",
  },
  {
    name: "لجنة التوجيه الطلابي",
    progress: 71,
    files: 20,
    color: "from-cyan-400 to-sky-500",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
      <div className="grid grid-cols-12 min-h-screen">
        {/* RIGHT SIDEBAR */}

        <aside className="col-span-2 border-l border-white/10 bg-[#061225] p-6">
          <div className="mb-10">
            <h1 className="text-5xl font-extrabold leading-tight">
              منصة الفاروق
              <br />
              الثانوية
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              متابعة واعتماد أعمال اللجان
            </p>
          </div>

          <button className="w-full bg-cyan-400 hover:bg-cyan-300 transition rounded-3xl py-5 text-black text-2xl font-bold shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            + رفع ملف جديد
          </button>

          <div className="mt-10 space-y-5">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:border-cyan-400 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-cyan-400" size={28} />

                  <span className="text-3xl font-bold">
                    {committee.progress}%
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-relaxed">
                  {committee.name}
                </h3>

                <p className="text-gray-400 text-lg mt-1">
                  {committee.files} ملف
                </p>

                <div className="mt-5 h-3 rounded-full bg-black/30 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${committee.color}`}
                    style={{
                      width: `${committee.progress}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* CENTER */}

        <section className="col-span-7 p-8">
          <div className="bg-gradient-to-br from-[#07152b] to-[#08101f] border border-white/10 rounded-[40px] p-10 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-7xl font-black mb-3">
                  اللجنة الإدارية
                </h1>

                <p className="text-gray-400 text-2xl">
                  متابعة دورة اعتماد الملفات والوثائق
                </p>
              </div>

              <div className="w-24 h-24 rounded-3xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <Folder className="text-cyan-400" size={50} />
              </div>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-4 gap-6 mt-12">
              {[
                {
                  title: "نسبة الإنجاز",
                  value: "61%",
                  color: "text-cyan-400",
                },
                {
                  title: "إجمالي المطلوب",
                  value: "29",
                  color: "text-white",
                },
                {
                  title: "الملفات المرفوعة",
                  value: "18",
                  color: "text-green-400",
                },
                {
                  title: "الملفات الناقصة",
                  value: "11",
                  color: "text-red-400",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white/5 border border-white/10 p-7"
                >
                  <div className="text-gray-400 text-xl">
                    {item.title}
                  </div>

                  <div
                    className={`mt-5 text-6xl font-black ${item.color}`}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* WORKFLOW */}

            <div className="mt-10 rounded-3xl bg-black/20 border border-white/10 p-10">
              <h2 className="text-5xl font-black mb-3">
                دورة الاعتماد
              </h2>

              <p className="text-gray-400 text-xl">
                جميع الملفات تمر بمراحل المراجعة والاعتماد
              </p>

              <div className="grid grid-cols-4 gap-6 mt-12">
                {[
                  {
                    title: "رفع الملف",
                    number: 1,
                    icon: Upload,
                    color: "bg-cyan-400",
                  },
                  {
                    title: "المراجعة",
                    number: 2,
                    icon: Clock3,
                    color: "bg-yellow-400",
                  },
                  {
                    title: "التدقيق",
                    number: 3,
                    icon: ShieldCheck,
                    color: "bg-blue-400",
                  },
                  {
                    title: "الاعتماد",
                    number: 4,
                    icon: CheckCircle2,
                    color: "bg-green-400",
                  },
                ].map((step, i) => {
                  const Icon = step.icon

                  return (
                    <div
                      key={i}
                      className="text-center"
                    >
                      <div
                        className={`w-28 h-28 mx-auto rounded-full ${step.color} flex items-center justify-center shadow-2xl`}
                      >
                        <Icon
                          className="text-black"
                          size={45}
                        />
                      </div>

                      <div className="mt-5 text-3xl font-bold">
                        {step.title}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* LEFT SIDEBAR */}

        <aside className="col-span-3 border-r border-white/10 bg-[#061225] p-6">
          <h2 className="text-5xl font-black mb-3">
            النشاط الأخير
          </h2>

          <p className="text-gray-400 text-xl mb-8">
            آخر عمليات الرفع والاعتماد
          </p>

          <div className="space-y-5">
            {[
              "تم رفع تقرير النشاط",
              "تم اعتماد الخطة التشغيلية",
              "ملف بانتظار المراجعة",
              "تمت إضافة اجتماع جديد",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 flex items-center justify-between"
              >
                <div>
                  <div className="text-2xl font-bold">
                    {item}
                  </div>

                  <div className="text-gray-400 mt-2">
                    اللجنة الإدارية
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center">
                  ✓
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  )
}