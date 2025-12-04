import ServiceBox from "../ServiceBox"

const Services = () => {
  return (
    <>
      <section className="bg-secondary py-10 dark:bg-gray-900 dark:text-white">
        <div className="container flex flex-col items-center">
          <h1 className="border-primary mb-3 inline-block border-b-2 pb-1 text-center text-3xl font-bold">
            Services
          </h1>
          <p className="mx-auto text-center text-slate-500 md:w-[50%]">
            Explore a wide range of solutions designed to boost your project.
            From design and development to optimization and support, we are here
            to help you achieve your goals.
          </p>
        </div>
        {/* Services card */}
        <div>
          <ServiceBox />
        </div>
      </section>
    </>
  )
}

export default Services
