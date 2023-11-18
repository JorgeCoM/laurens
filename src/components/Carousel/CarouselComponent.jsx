import { useCalculateScreen } from "../../hooks";
import { CarouselItem } from "./CarouselItem";
import { CarouselItemTeam } from "./CarouselItemTeam";
export const CarouselComponent = ({ data, showTeam, title }) => {
  const { categoria } = useCalculateScreen();
  if (showTeam) {
    return (
      <>
        <h2 className="text-center text-5xl font-bold mt-2">{title}</h2>
        <swiper-container
          class={`${categoria <= 1 ? "" : "p-14"} w-full h-full`}
          space-between={`${categoria == 2 ? "25" :"100"}`}
          autoplay
          slides-per-view={categoria}
        >
          {data.map((element, index) => (
            <CarouselItemTeam key={index} item={element} />
          ))}
        </swiper-container>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-white text-center text-5xl font-bold my-10">
          {title}
        </h2>
        {false ? <swiper-container
          class="w-full h-full pb-28"
          space-between="30"
          autoplay
          slides-per-view={categoria}
        >
          {data.map((element, index) => (
            <CarouselItem key={index} item={element} />
          ))}
        </swiper-container> : <><h3 className="text-white text-center mb-10 text-lg">No hay nada para mostrar</h3></>}
      </>
    );
  }
};
