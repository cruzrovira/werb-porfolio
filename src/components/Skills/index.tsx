import SkillsLevel from "../SkillsLevel"

const Skills = () => {
  return (
    <>
      <section id="about" className="bg-white dark:bg-gray-800 dark:text-white">
        <div className="container py-10 sm:py-16 md:w-[70%]">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
            <div className="relative font-bold sm:order-2">
              <div className="text-center text-6xl font-bold text-black/5 xl:text-8xl dark:text-gray-700">
                SKILLS
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                SKILLS
              </h1>
            </div>
            <div className="text-slate-500 sm:order-1">
              <SkillsLevel skillsName="HTML" percentage="98%" />
              <SkillsLevel skillsName="CSS" percentage="90%" />
              <SkillsLevel skillsName="JS" percentage="80%" />
              <SkillsLevel skillsName="TYPESCRIPT" percentage="80%" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
