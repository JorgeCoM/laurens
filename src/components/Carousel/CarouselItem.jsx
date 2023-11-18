export const CarouselItem = ({ item }) => {
  return (
    <>
      <swiper-slide>
        <div className="w-full cursor-pointer h-full bg-primary text-white">
          <div className="bg-gray w-full h-[200px] relative">
            {/* <img className="w-full h-full" src={"./project1.jpg"} alt="" /> */}
          </div>
          <div className="w-full h-full p-4">
            <h2 className="font-bold mb-2">{item?.title}</h2>
            <p>
              {item?.content}
            </p>
          </div>
        </div>
      </swiper-slide>
    </>
  );
};
