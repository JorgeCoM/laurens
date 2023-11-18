import {
  FooterComponent,
  HeroComponent,
  NavBarComponent,
  ServiceComponent,
  SocialMediaComponent,
  StatsComponent,
  TestimonialComponent,
} from "../components";
import { CarouselComponent } from "../components/Carousel/CarouselComponent";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const data = [
  {
    img: "./project.jpg",
    title: "proyecto 1",
    content: "lorem",
  },
  {
    title: "proyecto 2",
    content: "lorem",
  },
  {
    title: "proyecto 3",
    content: "lorem",
  },
  {
    title: "proyecto 4",
    content: "lorem",
  },
  {
    title: "proyecto 5",
    content: "lorem",
  },
  {
    title: "proyecto 6",
    content: "lorem",
  },
];

const personal = [
  {
    title: "Christofel Laurencio",
    position: "CEO",
    img: "",
    socialLinks: [
      {
        icon: (
          <FaFacebookF
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "#",
      },
      {
        icon: (
          <FaInstagram
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "#",
      },
      {
        icon: (
          <FaLinkedinIn
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "#",
      },
      {
        icon: (
          <FaGithub
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "#",
      },
    ],
  },
  {
    title: "Vanessa",
    position: "CTO",
    img: "",
    socialLinks: [
      {
        icon: (
          <FaFacebookF
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "#",
      },
      {
        icon: (
          <FaInstagram
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "#",
      },
      {
        icon: (
          <FaLinkedinIn
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "#",
      },
      {
        icon: (
          <FaGithub
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "#",
      },
    ],
  },
  {
    title: "Jorge L.",
    position: "Ing. Developer",
    img: "./f1.jpg",
    socialLinks: [
      {
        icon: (
          <FaFacebookF
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "https://www.facebook.com/itzkingjorge.muniscoca",
      },
      {
        icon: (
          <FaInstagram
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "https://www.instagram.com/king_jorge_2303/",
      },
      {
        icon: (
          <FaLinkedinIn
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "https://www.linkedin.com/in/jorge-coca-a93374209/",
      },
      {
        icon: (
          <FaGithub
            className="text-secundary cursor-pointer hover:text-tersary duration-300"
            size={30}
          />
        ),
        link: "#",
      },
    ],
  },
];

let url = "./webdevelopment-bg.webp";

export const DefaultLayout = () => {
  return (
    <div className="w-full relative overflow-x-hidden flex flex-col">
      <div className="flex flex-col">
        <div className="w-full">
          <NavBarComponent />
        </div>
        <div
          className="w-full object-cover h-[620px] flex"
          style={{ backgroundImage: `url(${url})` }}
        >
          <SocialMediaComponent />
          <div className="text-white mx-14 md:ml-0 lg:ml-0 mb-20 mt-20 w-full">
            <HeroComponent />
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <StatsComponent />
      </div>
      <div className="w-full px-14 bg-black">
        <CarouselComponent showTeam={false} data={data} title={"Proyectos"} />
      </div>
      <div className="w-full h-[550px] px-14 bg-red-300">
        <CarouselComponent showTeam={true} data={personal} title={"Equipo"} />
      </div>
      <div className="w-full px-[56px] bg-black">
        <TestimonialComponent />
      </div>
      <ServiceComponent />
      <div className="w-full bg-yellow-300">
        <FooterComponent />
      </div>
    </div>
  );
};
