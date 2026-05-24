type Props = {
  title: string
  value: string
  color: string
}

export default function StatCard({
  title,
  value,
  color,
}: Props) {

  return (

    <div className="bg-[#071226] rounded-[30px] p-8 border border-cyan-900/20">

      <div className="text-gray-400 text-xl mb-4">
        {title}
      </div>

      <div
        className={`text-6xl font-black ${color}`}
      >
        {value}
      </div>

    </div>

  )
}