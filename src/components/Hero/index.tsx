import personImage from "../../assets/person2.png"

const Hero = () => {
  return (
    <>
      <main className="bg-secondary w-full dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 items-center space-y-2 py-12 sm:h-[600px] sm:grid-cols-2 sm:py-0">
          <div>
            <div className="grid justify-items-center space-y-2 sm:justify-items-start">
              <p className="uppercase">hello </p>
              <p className="text-4xl font-bold text-black/80 md:text-6xl dark:text-white">
                I´m Oscar Rovira
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Freelance web & <br /> full stack Developer
              </p>
              <p className="text-center text-black/75 sm:text-left dark:text-white/70">
                I build modern, efficient and scalable applications using
                technologies like JavaScript, TypeScript, React and Node.js. I
                focus on writing clean code, creating intuitive user experiences
                and delivering solutions that solve real problems. I’m always
                learning, experimenting and improving to offer the best possible
                results in cada proyecto.
              </p>

              <a
                className="primary-btn inline-block px-6"
                href="mailto:cruzrovira@gmail.com"
              >
                Hire me
              </a>
            </div>
          </div>
          {/* imagen container */}
          <div>
            <img
              src={personImage}
              alt="Person Image"
              className="mx-auto w-full md:max-w-lg"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
