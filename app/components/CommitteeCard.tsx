import Link from "next/link"

type Props = {
  id: string
  name: string
  progress: number
}

export default function CommitteeCard({
  id,
  name,
  progress,
}: Props) {

  return (

    <Link
      href={`/committee/${id}`}
      className="bg-[#071226] rounded-[30px] p-6 block hover:scale-[1.02] transition border border-cyan-900/20"
    >

      <div className="flex items-center justify-between mb-5">

        <div className="text-cyan-400 text-4xl font-black">
          {progress}%
        </div>

        <div className="w-16 h-16 rounded-2xl bg-[#0b1325] flex items-center justify-center text-3xl">
          📁
        </div>

      </div>

      <h2 className="text-3xl font-black mb-5">
        {name}
      </h2>

      <div className="w-full h-4 bg-[#0b1325] rounded-full overflow-hidden">

        <div
          className="h-full bg-cyan-400 rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </Link>

  )
}