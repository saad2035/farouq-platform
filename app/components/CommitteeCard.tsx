import Link from "next/link"

interface Props {

  id: string
  name: string
  progress: number

}

function CommitteeCard({
  id,
  name,
  progress,
}: Props) {

  return (

    <Link href={`/committee/${id}`}>

      <div className="bg-[#020b1d] hover:bg-[#0a1731] transition rounded-[30px] p-8 border border-cyan-900/20">

        <div className="flex items-center justify-between mb-8">

          <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-3xl">
            📁
          </div>

          <div className="text-cyan-400 text-3xl font-black">
            {progress}%
          </div>

        </div>

        <h3 className="text-3xl font-black mb-6">
          {name}
        </h3>

        <div className="w-full h-4 bg-[#071226] rounded-full overflow-hidden">

          <div
            className="h-full bg-cyan-400 rounded-full"
            style={{
              width: `${progress}%`
            }}
          />

        </div>

      </div>

    </Link>

  )
}

export default CommitteeCard