export default function Footer() {
  return (
    <div className=" text-center text-white/60 text-xs md:text-sm container border-t border-txt_white_p/20 max-w-7xl mt-12 md:mt-16 lg:mt-20 pt-12 font-zen">
      <h5 className="  text-center py-1 ">Instituto Politécnico Nacional</h5>
      <h5 className="  text-center py-1 ">
        Escuela Superior de Ingeniería Mecánica y Eléctrica
      </h5>
      <h5 className="  text-center py-1 ">Unidad Azcapotzalco</h5>
      <div className="group mt-4">
        <h5 className="  text-center py-1 text-black group-hover:text-white">
          Pagina web hecha por SHMIN
        </h5>
        <h5 className="  text-center py-1 text-black group-hover:text-white">
          Contactactame:{" "}
          <a
            href="https://github.com/Purple-Code-sh"
            target="_blank"
            className="cursor-pointer group-hover:text-accent-500 hover:underline"
          >
            https://github.com/Purple-Code-sh
          </a>
        </h5>
      </div>
    </div>
  );
}
