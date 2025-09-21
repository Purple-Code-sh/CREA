import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className=" backdrop-blur-xl absolute top-0 z-50 w-full py-2 md:py-4">
      <section className="flex items-center justify-between container max-w-7xl">
        <div>
          <NavLink to="/CREA/inicio">
            <img
              src="/CREA/favicon_alt.webp"
              alt="logo"
              title="Home"
              className="w-10 h-auto sm:hidden cursor-pointer"
            />
          </NavLink>

          <NavLink to="/CREA/inicio">
            <img
              src="/CREA/favicon_alt-full.webp"
              alt="logo"
              title="Home"
              className="w-12 lg:w-16 h-auto sm:block hidden cursor-pointer"
            />
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 text-xs sm:text-sm lg:text-base font-medium">
          <NavLink
            to="/CREA/inicio"
            className={({ isActive }) =>
              isActive ? "text-txt_white_p" : "text-txt_white hover:underline"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/CREA/sobre-nosotros"
            className={({ isActive }) =>
              isActive ? "text-txt_white_p" : "text-txt_white hover:underline"
            }
          >
            ¿Quiénes Somos?
          </NavLink>

          <NavLink
            to="/CREA/contacto"
            className={({ isActive }) =>
              isActive ? "text-txt_white_p" : "text-txt_white hover:underline"
            }
          >
            Contacto
          </NavLink>
        </div>
      </section>
    </nav>
  );
}
