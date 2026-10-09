import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Mousewheel } from "swiper/modules";

const projects = [
  {
    num: "01",
    img: "/projectImgs/stride.png",

    Name: "Stride — Sneaker Store",
    Description: "Explore sneakers by category, manage your cart, and track your order total with a shopping experience that remembers your selections.",
    github: "https://github.com/Lohitkumar2252/Stride-ecommerce.git",
    live: "https://stride-shoe-store.netlify.app/",
  },
  {
    num: "02",
    img: "/projectImgs/Admin Panel.png",
    Name: "SaaS Admin Dashboard",
    Description: "Monitor revenue and user activity, explore reports, filter customers by plan, and manage users through a clear admin interface.",
    github: "https://github.com/Lohitkumar2252/Dashboard-Project.git",
    live: "https://saas-admin-dashboard-project.netlify.app/",
  },
  {
    num: "03",
    img: "/projectImgs/panto.png",
    Name: "Panto — Furniture Storefront",
    Description: "Discover modern furniture through curated product collections, interior inspiration, customer reviews, and an elegant responsive shopping experience.",
    github: "https://github.com/Lohitkumar2252/Panto-Furniture-Landing-page.git",
    live: "https://panto-landing-page-project.netlify.app/",
  },
  {
    num: "04",
    img: "/projectImgs/dicegame.png",
    Name: "Dice Game",
    Description: "Pick a number, roll the dice, and test your luck. Match your guess to earn points, avoid penalties, and reset your score anytime.",
    github: "https://github.com/Lohitkumar2252/dice-game.git",
    live: "https://dicegameeq.netlify.app/",
  },
  {
    num: "05",
    img: "/projectImgs/digitalAgency.png",
    Name: "Digital Agency Website",
    Description: "Explore agency services, meet the team, discover featured projects, and navigate dedicated pages for company information and client enquiries.",
    github: "https://github.com/Lohitkumar2252/Project-2-.git",
    live: "https://project-2-basic-routing.netlify.app/",
  },
  {
    num: "06",
    img: "/projectImgs/wizard.png",
    Name: "Wizardz — Digital Marketing Agency",
    Description: "Showcase digital marketing services, highlight success stories, and guide potential clients toward booking a consultation through a clear, engaging agency website",
    github: "https://github.com/Lohitkumar2252/Wizardz-landing-page.git",
    live: "https://wizardz-landing-page.netlify.app/",
  },
  {
    num: "07",
    img: "/projectImgs/soundcore.png",
    Name: "SoundCore — Entertainment Website",
    Description: "Bring music, movies, and TV shows together in an immersive entertainment experience, with dedicated sections for exploring content and gift cards.",
    github: "https://github.com/Lohitkumar2252/sound-core-page.git",
    live: "https://soundcore-homepage.netlify.app/",
  },
  {
    num: "08",
    img: "/projectImgs/foodora.png",
    Name: "Foodora — landing Page",
    Description: "Discover delicious meals, explore food collections, and find special offers through a vibrant website designed to make browsing feel effortless",
    github: "https://github.com/Lohitkumar2252/Foodora-page.git",
    live: "https://foodora-restaurant-landingpage.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className=" p-10 flex flex-col items-center" id="Projects">
      <p className="text-xl text-primary-btn font-primary">Selected Work</p>
      <h3 className="text-5xl text-text-main font-bold text-center font-primary">
        Built from scratch. {" "}
        <span>
          <br />
         Made to work
        </span>
      </h3>
      <p className="w-[30%] mt-4 text-center text-text-muted font-secondary">
       A collection of websites built with clean design, smooth interactions, and a great experience on every screen.

      </p>

      <div className="projects_container text-text-main w-full  rounded-4xl mt-6 p-5">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"2 "}
        
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
            <SwiperSlide key={index} className="w-[400px]">
              <div className="project_card w-full h-full bg-bg-medium rounded-4xl flex flex-col justify-between">
                <div className="img h-[400px] p-4">
                  <img
                    src={project.img}
                    alt={project.Name}
                    className="w-full h-full object-cover rounded-4xl"
                  />
                </div>
                <div className="content p-5 flex flex-col">
                  <div className="num rounded-full bg-bg-light w-12 h-12 grid place-items-center">
                    {project.num}{" "}
                  </div>
                  <h4 className="text-3xl font-bold text-text-main mt-1 font-primary">
                    {project.Name}
                  </h4>
                  <p className="text-text-muted font-secondary">{project.Description}</p>
                  <div className="flex  gap-5 ml-auto mt-4">
                    <a href={project.github} className="text-secondary-btn-text bg-secondary-btn rounded-4xl font-bold px-10 p-2 flex items-center justify-center font-secondary" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                    <a href={project.live} className="text-white bg-primary-btn rounded-4xl font-bold px-10 p-2 flex items-center justify-center text-sm font-secondary" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
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
