import { ServiceItems } from "./ServiceItems";

import { Accordion } from "@chakra-ui/react";

const dataService = [
  {
    title: "¿Qué ofrecemos?",
    content: "Nuestro servicios van desde paginas web a aplicaciones web.",
    state: false,
  },
  {
    title: "¿Cómo lo hacemos?",
    content: "Brindamos una experiencia personalizada de acuerdo a las necesidades de nuestros clientes.",
    state: false,
  },
  {
    title: "¿Cómo entregamos?",
    content: "Apartir de los requirimiento de extablecera una fecha limite y unas series de fecha de revisión periodicas.",
    state: false,
  },
  {
    title: "¿Hay rembolso?",
    content: "Claro, el cliente tiene un periodo de prueba de 30 a 90 dias dependiendo los tipo de requirimientos, podra ajustar los detalle una vez entregado.",
    state: false,
  },
];

export const ServiceComponent = () => {
  return (
    <div className="w-full px-[54px] md:px-[92px] lg:px-[262px] py-4 ">
      <div className="w-full flex flex-col h-full">
        <div className="w-full text-center my-20">
          <span className=" font-semibold text-secundary ">FAQ</span>
          <h2 className=" font-semibold text-6xl">Preguntas más frecuentes</h2>
        </div>
        <Accordion className="mb-20">
          {dataService.map((elements, index) => (
            <ServiceItems key={index} item={elements} />
          ))}
        </Accordion>
      </div>
    </div>
  );
};
