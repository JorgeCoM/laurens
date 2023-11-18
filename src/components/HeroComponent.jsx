export const HeroComponent = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-3xl text-center mb-8 text-secundary">
        Laurens Tech
      </h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg md:w-[500px]">
          Somos una empresa con más de 10 años de experiencia en el desarrollo
          de soluciones web y móviles. Contamos con un equipo de profesionales
          calificados que pueden ayudarlo con todos sus proyectos.
        </p>
        <div className="mt-5">
          <a
            className="border-2 cursor-pointer hover:border-tersary duration-300 border-secundary px-10 py-2"
            href="/contacto"
          >
            ver mas
          </a>
        </div>
      </div>
    </div>
  );
};
