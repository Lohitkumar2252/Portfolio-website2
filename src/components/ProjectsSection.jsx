import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Mousewheel } from "swiper/modules";

const projects = [
  {
    num: "01",
    img: "/projectImg.png",

    Name: "Stride",
    Description: "e commerce platform for buying and selling products online.",
    github: "",
    live: "",
  },
  {
    num: "02",
    img: "/projectImg.png",
    Name: "Stride",
    Description: "e commerce platform for buying and selling products online.",
    github: "",
    live: "",
  },
  {
    num: "03",
    img: "/projectImg.png",
    Name: "Stride",
    Description: "e commerce platform for buying and selling products online.",
    github: "",
    live: "",
  },
  {
    num: "04",
    img: "/projectImg.png",
    Name: "Stride",
    Description: "e commerce platform for buying and selling products online.",
    github: "",
    live: "",
  },
  {
    num: "05",
    img: "/projectImg.png",
    Name: "Stride",
    Description: "e commerce platform for buying and selling products online.",
    github: "",
    live: "",
  },
  {
    num: "06",
    img: "/projectImg.png",
    Name: "Stride",
    Description: "e commerce platform for buying and selling products online.",
    github: "",
    live: "",
  },
];

const ProjectsSection = () => {
  return (
    <section className=" p-10 flex flex-col items-center">
      <p className="text-xl text-primary-btn">Selected Work</p>
      <h3 className="text-5xl text-text-main font-bold text-center">
        Built from scratch.{" "}
        <span>
          <br />
          Designed to be experienced.
        </span>
      </h3>
      <p className="w-[30%] mt-4 text-center text-text-muted">
        A collection of frontend projects where I experiment with modern
        interfaces, interactions, animations, and responsive experiences.
      </p>

      <div className="projects_container text-text-main w-full  rounded-4xl mt-6 p-5">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"2 "}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 100,
            depth: 50,
            modifier: 1,
            scale: 0.8,
            slideShadows: false,
          }}
          mousewheel={{
            enable: true,
            
          }}
          modules={[EffectCoverflow, Mousewheel]}
          className="mySwiper w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-[400px] h-[400px]">
              <div className="project_card w-full h-full bg-bg-medium rounded-4xl flex flex-col justify-between">
                <div className="img p-4">
                  <img
                    src={project.img}
                    alt={project.Name}
                    className="w-full h-60 object-cover rounded-4xl"
                  />
                </div>
                <div className="content p-5 flex flex-col">
                  <div className="num rounded-full bg-bg-light w-12 h-12 grid place-items-center">
                    {project.num}{" "}
                  </div>
                  <h4 className="text-3xl font-bold text-text-main mt-1">
                    {project.Name}
                  </h4>
                  <p className="text-text-muted">{project.Description}</p>
                  <div className="flex  gap-5 ml-auto mt-4">
                    <button className="text-secondary-btn-text bg-secondary-btn rounded-4xl font-bold px-10 p-2 flex items-center justify-center">
                      Github
                    </button>
                    <button className="text-white bg-primary-btn rounded-4xl font-bold px-10 p-2 flex items-center justify-center text-sm">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
