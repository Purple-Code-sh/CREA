import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import snowMan from "../assets/snowman.webp";
import ReglamentosGrid from "../components/ReglamentosGrid";
import partner1 from "../assets/partner_1.webp";
import partner2 from "../assets/partner_2.webp";
import partner3 from "../assets/partner_3.webp";
import partner4 from "../assets/partner_4.webp";

import { Link } from "react-router";

function Xmas() {
  const categoriesArray = [
    {
      name: "Minisumo autónomo profesional",
      link: "https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl",
    },
    {
      name: "Minisumo RC profesional",
      link: "https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl",
    },
    {
      name: "Minisumo autónomo amateur",
      link: "https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl",
    },
    {
      name: "Minisumo RC amateur",
      link: "https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl",
    },
    {
      name: "Microsumo",
      link: "https://docs.google.com/document/d/1Zd5_bKdkOZDldijVbBp4a5fnF_jPxZENVx-3VbZYtbQ/edit#heading=h.lrxxfbed5gkl",
    },
    {
      name: "Midisumo",
      link: "https://docs.google.com/document/d/1cIoabS2r8yPsKuxU3GErV-bnoNiSVQJP2PMdBAeiTRM/edit?usp=sharing",
    },
    {
      name: "Seguidor de línea profesional",
      link: "https://docs.google.com/document/d/1Rf05I65rkRRZ-yZVycBUTn5rYrbeFq3orRDf3bm4B-w/edit#heading=h.32gsyl5eo0v1",
    },
    {
      name: "Seguidor de línea amateur",
      link: "https://docs.google.com/document/d/1Rf05I65rkRRZ-yZVycBUTn5rYrbeFq3orRDf3bm4B-w/edit#heading=h.32gsyl5eo0v1",
    },
    {
      name: "Guerra 1 lb",
      link: "https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f",
    },
    {
      name: "Guerra 3 lb",
      link: "https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f",
    },
    {
      name: "Guerra 12 lb",
      link: "https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f",
    },
    {
      name: "Robosoccer",
      link: "https://docs.google.com/document/d/1An3iLLKc9C9CeJBwyR-7pms6LVJqUl4SOI4Y18ReCD8/edit",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-shAccent-600/50 to-black via-shAccent-600/30">
        <Navbar />
        <main className="container max-w-7xl pt-24 sm:pt-28 md:pt-32 lg:pt-36 mb-16 flex flex-col justify-between items-center lg:flex-row gap-12">
          <section className=" w-full lg:w-1/2">
            <p className="max-w-prose font-bold text-center lg:text-left  text-base lg:text-lg mx-auto mb-8">
              Xmas es el evento anual donde se une la{" "}
              <strong>robótica de competencia</strong> y el{" "}
              <strong>networking</strong> entre entusiastas de la tecnología,
              estudiantes y empresas.
            </p>
            <p className="max-w-prose text-base  text-center lg:text-left lg:text-lg mx-auto">
              Es organizado por el Club de Robótica de ESIME Azcapotzalco, por
              lo que se lleva acabo en las instalaciones de la universidad.
            </p>
            <h3 className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left mt-10 text-primary-500 font-bold">
              4 y 5 de Diciembre ¡No faltes!
            </h3>
            {/* <div className='mx-auto mt-8 w-fit flex-none text-base lg:text-lg font-medium rounded-xl py-3 px-6 text-black bg-primary hover:bg-secondary/85 hover:scale-105'>
                  <Link
                    to='https://docs.google.com/forms/d/e/1FAIpQLSdPmPZQSUtVt3pN-Dk3IOiIFgLFZ8DT6pNls18MvjHuOVF6lQ/viewform?usp=sf_link'
                    className='active:text-white hover:font-semibold cursor-pointer'
                  >
                    Inscríbete
                  </Link>
                </div> */}
          </section>

          <section className="w-full lg:w-1/2 flex items-center justify-between">
            <img src={snowMan} alt="" className="w-1/2 max-w-72 mx-auto" />
            <img
              src="/favicon_alt-full.webp"
              alt=""
              className="w-1/3 max-w-52 mx-auto"
            />
          </section>
        </main>

        <section
          id="rules"
          className=" container max-w-7xl pt-20 md:pt-24 lg:pt-28 font-didacte flex flex-col justify-center pb-10"
        >
          <h2 className="text-4xl font-medium text-center font-zen text-white mb-10 md:mb-12 xl:mb-16">
            Ubicación del evento
          </h2>
          <div className="flex justify-center items-center rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.5674036437363!2d-99.17596312568189!3d19.48853388180289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f865e1f932f1%3A0xfd53f914ccbd67b4!2sAv.%20de%20las%20Granjas%2C%20El%20Jaguey%2C%20Azcapotzalco%2C%2002519%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1ses-419!2smx!4v1732412787388!5m2!1ses-419!2smx"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section
          id="rules"
          className=" container max-w-7xl pt-20 md:pt-24 lg:pt-28 font-didacte pb-10"
        >
          <ReglamentosGrid />
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
      </section>
      <Footer />
    </>
  );
}

export default Xmas;
