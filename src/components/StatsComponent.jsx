import { Button } from "@chakra-ui/react";

import { GoProject, GoPeople, GoProjectTemplate } from "react-icons/go";

export const StatsComponent = () => {
  return (
    <div className="w-full text-black h-full py-10 bg-white">
      <div className="w-full h-full flex lg:ml-0 md:ml-0 sm:flex-col">
        <div className="flex justify-between h-full flex-col items-center">
          <div className="w-full mb-10 text-center">
            <h2 className="md:text-6xl text-5xl mr-4 font-bold">
              Nuestro logros hasta el momento
            </h2>
            {/* <p className="text-[16px] my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, veritatis cum vero rerum impedit.</p>
            <Button className="bg-secundary text-white hover:bg-tersary -z-0 duration-700 p-1 w-full">Ver mas</Button> */}
          </div>
          <div className="grid text-white sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            <div className="col-span-1 flex py-10 px-20 lg:px-16 md:px-14 flex-col items-center justify-center bg-secundary">
              <GoProject className="text-5xl"/>
              <p className="font-bold mb-2 text-3xl">0</p>
              <p className="font-bold text-sm">Proyectos completos</p>
            </div>
            <div className="col-span-1 flex py-10 px-20 flex-col items-center justify-center bg-secundary">
            <GoPeople className="text-5xl"/>
              <p className="font-bold mb-2 text-3xl">5</p>
              <p className="font-bold text-sm">Clientes</p>
            </div>
            <div className="col-span-1 flex py-10 px-20 flex-col items-center justify-center bg-secundary">
            <GoProjectTemplate className="text-5xl"/>
              <p className="font-bold mb-2 text-3xl">3</p>
              <p className="font-bold text-sm">Proyecto En curso</p>
            </div>
            <div className="col-span-1 flex py-10 px-20 flex-col items-center justify-center bg-secundary">
            <GoPeople className="text-5xl"/>
              <p className="font-bold mb-2 text-3xl">3</p>
              <p className="font-bold text-sm">Usuarios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
