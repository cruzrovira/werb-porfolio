const About = () => {
  return (
    <>
      <section id="about" className="bg-white dark:bg-gray-800 dark:text-white">
        <div className="container py-10 sm:py-16 md:w-[70%]">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className="text-center text-6xl font-bold text-black/5 xl:text-8xl dark:text-gray-700">
                ABOUT
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                About me
              </h1>
            </div>
            <div className="text-slate-500">
              <p>
                I am a passionate developer with experience in creating modern
                web applications. I focus on building intuitive and functional
                user experiences, always looking for new ways to optimize and
                improve my projects.
              </p>
              <br />
              <p>
                My main focus is innovation and quality, ensuring that each
                project not only meets but exceeds expectations.
              </p>
              <div>
                <a href="#" className="primary-btn my-6 mr-6 inline-block">
                  Dowload Resume
                </a>
                <a href="tel:+50375382292" className="outline-btn inline-block">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
