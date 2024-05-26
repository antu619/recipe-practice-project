

export default function SectionHeader({title}) {
  return (
    <div className="my-20">
        <h1 className="text-4xl text-center">{title}</h1>
        <div className="flex justify-center mt-4">
        <div className="w-48 h-1 bg-rose-600 rounded-full"></div>
        </div>
        </div>
  )
}
