export const TestimonialComponent = () => {
  return (
    <section className="flex items-center justify-center w-full py-20">
      <div>
        <div className="container flex flex-col items-start mx-auto lg:items-center">
          <p
            className="relative flex text-secundary items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center"
          >
            ¿Aun tienes dudas sobre nosotros?
          </p>
          <h2 className="relative hidden md:flex text-white items-start justify-start w-full max-w-6xl text-5xl font-bold lg:justify-center">
            Mira que dicen algunos de nuestros clientes
            
          </h2>
          <div
            className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"
            data-primary="purple-600"
          ></div>

          <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
          <div className="flex px-4 bg-gray p-2 rounded-lg flex-col items-start justify-start w-full h-auto mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
              <div className="flex items-center md:m-2 justify-center">
                <div className="w-16 h-16 border-4 border-secundary mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/019/896/012/small_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-secundary">Virginia Raymer</h4>
                  <p className="text-gray-600">Ing. Redes</p>
                </div>
              </div>
              <blockquote className="mt-8 md:m-2 text-lg text-gray-500">
                Son un grupo muy eficiente, responsablemente en lo que hacen.
              </blockquote>
            </div>
            <div className="flex px-4 bg-gray p-2 rounded-lg flex-col items-start justify-start w-full h-auto mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
              <div className="flex items-center md:m-2 justify-center">
                <div className="w-16 h-16 mr-4 border-4 border-secundary overflow-hidden bg-gray-200 rounded-full">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/019/896/012/small_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-secundary">Jenni Marte</h4>
                  <p className="text-gray-600">Influencer</p>
                </div>
              </div>
              <blockquote className="mt-8 md:m-2 text-lg text-gray-500">
              Hice mi blog de cocina con ellos y fue muy eficiente y responsables con la entrega
              </blockquote>
            </div>
            <div className="flex px-4 bg-gray p-2 rounded-lg flex-col items-start justify-start w-full h-auto mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
              <div className="flex items-center md:m-2 justify-center">
                <div className="w-16 h-16 mr-4 border-4 border-secundary overflow-hidden bg-gray-200 rounded-full">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-secundary">Robert Diaz</h4>
                  <p className="text-gray-600">UX/UI</p>
                </div>
              </div>
              <blockquote className="mt-8 md:m-2 text-lg text-gray-500">
                Mi portafolio fue creado por ellos y me quede muy conplacido con el resultado
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
