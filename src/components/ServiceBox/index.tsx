import { AiFillLayout } from "react-icons/ai"
import { FaCode, FaMobileAlt } from "react-icons/fa"
import { IoIosStats } from "react-icons/io"

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and modern websites tailored to your needs.",
    image: "https://picsum.photos/200/300",
    icon: <FaCode className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for both Android and iOS.",
    image: "https://picsum.photos/200/300",
    icon: <FaMobileAlt className="text-4xl" />,
    bgColor: "bg-green-500/70",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces for better user experience.",
    image: "https://picsum.photos/200/300",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-purple-500/70",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Promoting your brand effectively through various digital channels.",
    image: "https://picsum.photos/200/300",
    icon: <IoIosStats className="text-4xl" />,
    bgColor: "bg-red-500/70",
  },
]
const ServiceBox = () => {
  return (
    <section id="services" className="container my-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map(({ id, bgColor, description, icon, image, title }) => (
          <div
            key={id}
            // style={{ backgroundImage: `url(${image})` }}
            className={`rounded-xl text-white ${bgColor} bg-cover bg-no-repeat bg-blend-overlay`}
          >
            <div className="rounded-3xl p-3 backdrop-blur-xs md:p-16">
              {icon}

              <h1 className="text-2xl font-bold">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceBox
