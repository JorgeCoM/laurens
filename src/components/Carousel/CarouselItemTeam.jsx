export const CarouselItemTeam = ({ item }) => {
  return (
    <swiper-slide>
      <div className="w-full flex justify-center items-center flex-col relative h-full">
        <div className="absolute w-[130px] h-[130px] object-cover top-16 md:top-8 lg:top-10 rounded-full mt-4 bg-black">
          <img
            className="w-full h-full border-4 border-secundary rounded-full"
            src={item?.img}
            alt={item.title}
          />
        </div>
        <div className="w-full h-[200px] p-4 rounded-xl bg-gray">
          <h2 className="font-bold mt-10 md:mt-12 text-xl">{item.title}</h2>
          <p className="italic">{item.position}</p>
          <div className="w-full mt-4 flex justify-around">
            {item?.socialLinks.map((e) => {
              return <a href={e.link}>{e.icon}</a>;
            })}
          </div>
        </div>
      </div>
    </swiper-slide>
  );
};
