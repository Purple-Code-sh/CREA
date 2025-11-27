import Countdown from "../components/countdown/Countdown";
import Navbar from "../components/Navbar";
import ReglamentosGrid from "../components/ReglamentosGrid";
import { Link } from "react-router";
// import schedule1 from "../assets/schedule_1.webp";
// import schedule2 from "../assets/schedule_2.webp";
import scheduleNew1 from "../assets/NewScheduleDay1.webp";
import scheduleNew2 from "../assets/NewScheduleDay2.webp";
import partner1 from "../assets/partner_1.webp";
import partner2 from "../assets/partner_2.webp";
import partner3 from "../assets/partner_3.webp";
import partner4 from "../assets/partner_4.webp";
import Footer from "../components/Footer";

function Home() {
  const joke = () => {
    alert("Es totalmente GRATIS ¿Qué esperabas?");
  };

  return (
    <>
      <section
        id="hero"
        className="bg-gradient-to-b  from-shAccent-600/30 via-shAccent-600/80 to-shAccent-600/10"
      >
        <section className="bg-gradient-to-l h-fit from-black/70 via-transparent to-black/70">
          <Navbar />
          <div className="container max-w-7xl pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-10 font-didacte">
            <h1 className="w-full mt-12 text-center text-5xl font-extrabold  md:mt-16 md:text-6xl xl:mt-20 lg:text-7xl xl:text-8xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-br font-zen from-txt_white to-txt_white_p">
                Xmas
              </span>{" "}
              <span className="bg-clip-text text-transparent font-extrabold bg-gradient-to-tr from-accent-500 to-secondary">
                2025
              </span>
            </h1>
            <h3 className="w-full mt-3 text-center font-didact font-semibold text-xs text-primary-600 md:mt-4 md:text-sm lg:mt-6 lg:text-base xl:mt-8 xl:text-lg">
              Nuestro evento mas importante del año <br />
              <h4 className="mt-1 font-bold text-primary_dark/85">
                4 y 5 de Diciembre
              </h4>
            </h3>
            <div className="flex flex-col gap-8 lg:gap-12 w-fit my-8 mx-auto text-center font-medium md:flex-row md:text-lg md:mt-12 xl:text-xl xl:mt-16">
              <Link to="/CREA/xmas">
                <button className="cursor-pointer p-3 min-w-[250px] text-center h-fit rounded-lg text-black  bg-primary-500 hover:bg-secondary/85 hover:scale-105">
                  Inscribete
                </button>
              </Link>

              <button
                className="cursor-pointer p-3 min-w-[250px] text-center h-fit rounded-lg text-txt_white_p/60  bg-shAccent-600 hover:bg-accent-500/85 hover:scale-105"
                onClick={joke}
              >
                Precios
              </button>
            </div>
            <div className="mx-auto text-center mb-20 md:mb-24 xl:mb-28">
              <Link
                to="/CREA/xmas"
                className="w-full px-10 py-2 underline cursor-pointer text-accent-600 opacity-60  hover:opacity-100 active:text-secondary  text-center font-semibold text-xs md:mt-4 md:text-sm lg:mt-6 lg:text-base xl:mt-8 xl:text-lg"
              >
                Más información
              </Link>
            </div>

            <Countdown />
          </div>
        </section>
      </section>

      <section
        id="schedule"
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 container max-w-7xl pt-24 sm:pt-28 md:pt-32 lg:pt-36 font-didacte"
      >
        <div className="flex justify-center">
          <img
            src={scheduleNew1}
            alt="horario para el primer dia"
            className="w-full rounded-xl max-w-md lg:max-w-lg"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={scheduleNew2}
            alt="horario para el segundo dia"
            className="w-full rounded-xl max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      <section
        id="schedule"
        className="grid grid-cols-4 gap-8 md:gap-10 lg:gap-12 container pb-10 max-w-7xl pt-12 sm:pt-16 md:pt-20 lg:pt-24 font-didacte"
      >
        <div className="flex justify-center">
          <img
            src={partner1}
            alt="horario para el primer dia"
            className="w-full rounded-xl max-w-40"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={partner2}
            alt="horario para el segundo dia"
            className="w-full rounded-xl max-w-40"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={partner3}
            alt="horario para el primer dia"
            className="w-full rounded-xl max-w-40"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={partner4}
            alt="horario para el segundo dia"
            className="w-full rounded-xl max-w-40"
          />
        </div>
      </section>

      <section
        id="rules"
        className=" container max-w-7xl pt-20 md:pt-24 lg:pt-28 font-didacte pb-10"
      >
        <ReglamentosGrid />
      </section>

      <Footer />
    </>
  );
}

export default Home;
