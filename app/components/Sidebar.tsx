const committees = [
  {
    id: 1,
    name: "لجنة التميز",
    progress: 82,
  },

  {
    id: 2,
    name: "لجنة التحصيل",
    progress: 65,
  },

  {
    id: 3,
    name: "لجنة النشاط",
    progress: 48,
  },

  {
    id: 4,
    name: "لجنة التوجيه",
    progress: 91,
  },

  {
    id: 5,
    name: "الأمن والسلامة",
    progress: 70,
  },
]

export default function Sidebar() {

  return (

    <aside className="w-80 bg-[#0f172a] text-white min-h-screen p-6 border-l border-white/10">

      <div className="mb-10">

        <h1 className="text-3xl font-bold tracking-tight">
          Governance OS
        </h1>

        <p className="text-slate-400 mt-2">
          School Committees System
        </p>

      </div>

      <div className="space-y-4">

        {committees.map((committee) => (

          <div
            key={committee.id}
            className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-5 transition-all duration-300 cursor-pointer backdrop-blur-xl"
          >

            <div className="flex justify-between items-center mb-4">

              <h3 className="font-semibold text-lg">
                {committee.name}
              </h3>

              <span className="text-sm text-slate-400">
                {committee.progress}%
              </span>

            </div>

            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">

              <div
                className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-2 rounded-full"
                style={{
                  width: `${committee.progress}%`
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </aside>
  )
}