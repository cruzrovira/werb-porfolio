interface props {
  skillsName: string
  percentage: `${number}%`
}
const SkillsLevel = ({ skillsName, percentage }: props) => {
  return (
    <>
      <div className="mt-4 space-y-2">
        <div className="flex items-end justify-between">
          <p className="text-xl font-bold">{skillsName}</p>
          <p className="text-sm">{percentage}</p>
        </div>
        <div className="h-2 w-full rounded-full bg-slate-200">
          <div
            style={{ width: `${percentage}` }}
            className="bg-primary h-2 w-[90%] rounded-full"
          ></div>
        </div>
      </div>
    </>
  )
}

export default SkillsLevel
