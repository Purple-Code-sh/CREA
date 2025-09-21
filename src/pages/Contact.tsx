import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <section
        id="hero"
        className="bg-gradient-to-b  from-shAccent-600/20 via-shAccent-600/60 to-shAccent-600/20"
      >
        <section className="bg-gradient-to-l h-fit from-black/70 via-transparent to-black/70">
          <Navbar />
          <main className="container max-w-7xl pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-[80vh]">
            <h1 className="text-4xl font-medium  text-center font-zen text-white/90 my-10 md:my-12 xl:my-16">
              Club de Robótica ESIME Azcapotzalco
            </h1>

            <div className="flex gap-6  my-10 md:my-12 xl:my-16 items-baseline">
              <h2 className="text-2xl lg:text-3xl font-medium  text-center font-zen text-white/90">
                Instagram:
              </h2>
              <a
                href="https://www.instagram.com/crea_ipn?igsh=ZHAzcWx6eHVtNGpy"
                target="_blank"
                className="underline text-primary-500 hover:text-accent-500 h-fit text-xl lg:text-2xl"
              >
                @crea_ipn
              </a>
            </div>

            <div className="flex gap-6  my-10 md:my-12 xl:my-16 items-baseline">
              <h2 className="text-2xl lg:text-3xl font-medium  text-center font-zen text-white/90">
                Facebook:
              </h2>
              <a
                href="https://www.facebook.com/share/1ZoHePKoZX/"
                target="_blank"
                className="underline text-primary-500 hover:text-accent-500 h-fit text-xl lg:text-2xl"
              >
                CREA - Club de Robótica ESIME Azcapotzalco
              </a>
            </div>

            <div className="flex gap-6  my-10 md:my-12 xl:my-16 items-baseline">
              <h2 className="text-2xl lg:text-3xl font-medium  text-center font-zen text-white/90">
                Dirección:
              </h2>
              <a
                href="https://maps.app.goo.gl/tJhLfwzABTxjNLmU6"
                target="_blank"
                className="underline text-primary-500 hover:text-accent-500 h-fit text-lg lg:text-xl"
              >
                Av. de las Granjas 682, Santa Catarina, Azcapotzalco, 02550
                Ciudad de México, CDMX
              </a>
            </div>
          </main>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
