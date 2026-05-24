const requirements = [
  {
    id: 1,
    title: "الخطة التشغيلية",
    required: 1,
    uploaded: 1,
    status: "مكتمل",
  },

  {
    id: 2,
    title: "الاجتماعات",
    required: 4,
    uploaded: 2,
    status: "قيد العمل",
  },

  {
    id: 3,
    title: "التقارير",
    required: 20,
    uploaded: 15,
    status: "قيد العمل",
  },

  {
    id: 4,
    title: "الإحصائيات الدورية",
    required: 4,
    uploaded: 4,
    status: "مكتمل",
  },
]

const getStatusColor = (status: string) => {

  switch (status) {

    case "مكتمل":
      return "bg-emerald-100 text-emerald-700"

    case "قيد العمل":
      return "bg-amber-100 text-amber-700"

    case "متأخر":
      return "bg-red-100 text-red-700"

    default:
      return "bg-slate-100 text-slate-700"
  }
}

export default function CommitteePage() {

  const totalRequired =
    requirements.reduce(
      (sum, item) => sum + item.required,
      0
    )

  const totalUploaded =
    requirements.reduce(
      (sum, item) => sum + item.uploaded,
      0
    )

  const progress =
    Math.round(
      (totalUploaded / totalRequired) * 100
    )

  return (

    <div className="min-h-screen bg-slate-100 p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            لجنة التميز
          </h1>

          <p className="text-slate-500 mt-2">
            متابعة واعتماد متطلبات اللجنة
          </p>

        </div>

        <button className="bg-teal-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-teal-800 transition">

          + رفع ملف جديد

        </button>

      </div>

      {/* Progress */}
      <div className="bg-white rounded-3xl p-8 shadow-lg mb-10">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-2xl font-bold">
            نسبة الإنجاز
          </h2>

          <span className="text-4xl font-bold text-emerald-600">
            {progress}%
          </span>

        </div>

        <div className="w-full bg-slate-200 rounded-full h-5 overflow-hidden">

          <div
            className="bg-emerald-500 h-5 rounded-full transition-all"
            style={{
              width: `${progress}%`
            }}
          />

        </div>

        <div className="mt-4 text-slate-500">

          تم رفع

          <span className="font-bold mx-2 text-slate-800">
            {totalUploaded}
          </span>

          من أصل

          <span className="font-bold mx-2 text-slate-800">
            {totalRequired}
          </span>

          متطلب

        </div>

      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-3xl p-8 shadow-lg">

          <p className="text-slate-500">
            إجمالي المتطلبات
          </p>

          <h3 className="text-5xl font-bold text-slate-700 mt-4">
            {totalRequired}
          </h3>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">

          <p className="text-slate-500">
            الملفات المرفوعة
          </p>

          <h3 className="text-5xl font-bold text-cyan-600 mt-4">
            {totalUploaded}
          </h3>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">

          <p className="text-slate-500">
            المتبقي
          </p>

          <h3 className="text-5xl font-bold text-red-500 mt-4">
            {totalRequired - totalUploaded}
          </h3>

        </div>

      </div>

      {/* Requirements Table */}
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold">
            متطلبات اللجنة
          </h2>

          <button className="bg-slate-900 text-white px-5 py-3 rounded-2xl hover:bg-slate-800 transition">

            عرض جميع الملفات

          </button>

        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b text-right">

              <th className="pb-5">
                العنصر
              </th>

              <th className="pb-5">
                المطلوب
              </th>

              <th className="pb-5">
                المرفوع
              </th>

              <th className="pb-5">
                نسبة الإنجاز
              </th>

              <th className="pb-5">
                الحالة
              </th>

            </tr>

          </thead>

          <tbody>

            {requirements.map((item) => {

              const percentage =
                Math.round(
                  (item.uploaded / item.required) * 100
                )

              return (

                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50 transition"
                >

                  <td className="py-6 font-medium">
                    {item.title}
                  </td>

                  <td className="py-6">
                    {item.required}
                  </td>

                  <td className="py-6">
                    {item.uploaded}
                  </td>

                  <td className="py-6 w-72">

                    <div className="flex items-center gap-4">

                      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">

                        <div
                          className="bg-teal-600 h-3 rounded-full"
                          style={{
                            width: `${percentage}%`
                          }}
                        />

                      </div>

                      <span className="text-sm font-bold text-slate-600">
                        {percentage}%
                      </span>

                    </div>

                  </td>

                  <td className="py-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm ${getStatusColor(item.status)}`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              )
            })}

          </tbody>

        </table>

      </div>

    </div>
  )
}