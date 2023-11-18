import { NavBarComponent } from "../components";

export const ComingSoon = () => {
  return (
    <>
      <NavBarComponent />
      <div className="w-full relative lg:pt-24 pt-24 flex">
        <div className="lg:w-full w-full h-full flex">
          <div className="h-full w-full flex flex-col justify-center items-start sm:items-center lg:items-start max-w-2xl mx-auto lg:mx-0 px-8 sm:pl-24 pr-10 space-y-8">
            <div className="relative overflow-hidden z-20 inline-block rounded-full py-1.5 px-1 font-medium text-xs leading-6 bg-gray-100">
              <span className="text-gray-600">Muy pronto disponible</span>
              <a
                href={"/"}
                className="font-semibold bg-secundary text-white h-full py-0.5 px-3 rounded-full translate-x-2 inline-block"
              >
                <span className="absolute inset-0" aria-hidden="true"></span>Volver atras
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <h1 className="relative z-20 w-full text-left sm:text-center lg:text-left">
              <span className="block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Proximamente</span>
                <span className="block relative">
                  <span className="text-tersary">Nueva</span>
                  <span className="relative text-gray-900 inline-block">
                    <span className="relative z-30">Funcion</span>
                    <svg
                      className="w-full absolute bottom-0 translate-y-2 h-auto stroke-current text-primary"
                      viewBox="0 0 194 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6c39.898-3.018 133.755-7.244 190 0"
                        stroke-width="4"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                </span>
              </span>
            </h1>
            <p className="text-base relative z-20 text-gray-500 sm:text-xl lg:text-lg xl:text-xl text-left sm:text-center lg:text-left">
              Estamos trabajando en una emocionante nueva función que pronto
              estará disponible. Esta característica mejorará tu experiencia y
              te permitirá hacer más con nuestro sitio web.
            </p>
            <div className="z-20 relative sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left w-full">
              <form
                className="mt-2 sm:flex"
                method="post"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="space-y-2 w-full">
                  <div className="relative group w-full">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full border border-gray-200 rounded-md shadow-sm transition ease-out duration-500 focus:border-indigo-500 focus:ring focus:ring-indigo-600 focus:ring-opacity-20 border-gray-300 h-11 pl-4"
                      placeholder="Digite su correo"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded bg-secundary hover:bg-secundary px-4 font-medium text-sm py-1 text-white sm:ml-3 sm:mt-0 mt-3 sm:w-auto w-full flex justify-center items-center flex-shrink-0 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Notificarme
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                <a href="" className=" font-bold text-secundary">Registrate</a> Para poder ser notificado de cualquier avance 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
