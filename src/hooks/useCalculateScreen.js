import { useState, useEffect } from "react";

export const useCalculateScreen = () => {
  const [categoria, setCategoria] = useState(1); // Valor predeterminado para móvil

  useEffect(() => {
    const calcularCategoria = () => {
      const anchoPantalla = window.innerWidth;

      if (anchoPantalla >= 1024) {
        setCategoria(3); // PC
      } else if (anchoPantalla >= 768) {
        setCategoria(2); // Tablet
      } else {
        setCategoria(1); // Móvil
      }
    };

    calcularCategoria(); // Calcular la categoría inicial

    window.addEventListener("resize", calcularCategoria); // Actualizar en cambio de tamaño de ventana

    return () => {
      // Limpiar el evento del oyente cuando el componente se desmonte
      window.removeEventListener("resize", calcularCategoria);
    };
  }, []);

  return {
    categoria
  }
};
