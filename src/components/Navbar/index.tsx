import { useEffect, useState } from "react"
import { BiSolidMoon, BiSolidSun } from "react-icons/bi"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
  const navMenus = [
    { name: "Home", link: "/#home" },
    { name: "About", link: "/#about" },
    { name: "Services", link: ".#services" },
    { name: "Contact", link: "#" },
  ]
  const [showMenu, setShowMenu] = useState(false)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  )

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  const togglemenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <nav className="bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container flex items-center justify-between py-3 sm:py-0">
          <h1 className="text-primary text-3xl">Porfolio</h1>
          {/* desktop menu */}
          <div className="hidden sm:block">
            <ul className="flex cursor-pointer items-center gap-4 py-6">
              {navMenus.map(menu => (
                <li key={menu.name}>
                  <a
                    className="px-2 py-4 text-xl font-semibold"
                    href={menu.link}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {theme === "dark" ? (
                <BiSolidSun
                  className="cursor-pointer text-2xl text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="cursor-pointer text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobil menu */}
          <div className="block sm:hidden">
            <div className="flex items-center gap-4">
              {/* theme toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="cursor-pointer text-2xl text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="cursor-pointer text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}

              <FiMenu
                className="cursor-pointer text-2xl dark:text-white"
                onClick={togglemenu}
              />
            </div>
            {showMenu && (
              <div className="fixed top-16 right-0 left-0 z-10 rounded-b-xl bg-white py-10 shadow-lg dark:bg-gray-900">
                <ul className="flex flex-col items-center gap-4">
                  {navMenus.map(menu => (
                    <li key={menu.name}>
                      <a
                        className="inline-block cursor-pointer px-2 py-4 text-xl font-semibold md:py-6"
                        href={menu.link}
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
