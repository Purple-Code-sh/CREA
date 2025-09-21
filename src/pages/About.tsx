import Navbar from "../components/Navbar";
function About() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b  from-shAccent-600/20 via-shAccent-600/60 to-shAccent-600/20"
    >
      <section className="bg-gradient-to-l h-fit from-black/70 via-transparent to-black/70">
        <Navbar />
        <main className="container max-w-7xl pt-24 sm:pt-28 md:pt-32 lg:pt-36">
          <h1 className="text-4xl font-medium  text-center font-zen text-white/90 my-10 md:my-12 xl:my-16">
            Club de Robótica ESIME Azcapotzalco
          </h1>
          <div className="flex flex-col-reverse gap-12 pb-8 md:flex-row md:justify-between text-white/90 items-center justify-center ">
            <div className="w-full md:w-7/12  flex flex-col">
              <h3 className="text-lg font-bold  md:text-xl  text-center md:text-left  xl:text-2xl">
                Somos un club dedicado a la creación e innovación de proyectos
                tecnológicos, con un enfoque en la robótica de competencia.
              </h3>
              <br />
              <p className="text-lg  md:text-xl  text-center md:text-left  xl:text-2xl">
                Representamos a nuestra institución participando en diversos
                torneos, tanto nacionales como internacionales. De igual manera
                promovemos y educamos sobre tecnología, impartiendo cursos,
                charlas y demostraciones.
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <img
                src="/favicon_alt-full.webp"
                alt="nuestro logo"
                className="w-full h-auto max-w-52 mx-auto"
              />
            </div>
          </div>
          <section className="mt-20 md:mt-24 lg:mt-28 font-didacte pb-10">
            <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl text-center md:text-left mb-4 text-primary-500">
              Visión
            </h2>
            <p className=" max-w-prose md:text-lg lg:text-xl text-center mx-auto md:text-left md:ml-0 mb-10 md:mb-12 xl:mb-16">
              Convertirnos en el mejor club de robótica de toda latinoamérica y
              obtener reconocimiento a nivel mundial. Además de ser un nuevo
              pilar para el progreso tecnologíco en nuestro país.
            </p>
            <h2 className="font-bold  text-2xl md:text-3xl xl:text-4xl text-center md:text-left mb-4 text-primary-500">
              Misión
            </h2>
            <p className=" max-w-prose md:text-lg lg:text-xl text-center mx-auto md:text-left md:ml-0">
              Obtener la mayor cantidad de títulos, tanto nacionales como
              internacionales, en las distintas categorias en las que
              participamos y ser uno de los mayores representantes de robótica
              competitiva en México.
            </p>
          </section>
        </main>
      </section>
    </section>
  );
}

export default About;
