import React from "react";

const features = [
  {
    number: "01",
    title: "Custom-built",
    description:
      "Made around your business and your goals, never a generic template.",
  },
  {
    number: "02",
    title: "Mobile-first",
    description:
      "Works smoothly on every screen, from phones to wide desktops.",
  },
  {
    number: "03",
    title: "Clean & modern",
    description:
      "Easy to use, easy to understand, and easy to trust.",
  },
  {
    number: "04",
    title: "Clear communication",
    description:
      "No confusion about the work, the timeline, or the process.",
  },
];

const skills = ["React", "TypeScript", "Tailwind CSS", "Node.js"];

const stats = [
  {
    value: "3+",
    label: "Years experience",
  },
  {
    value: "40+",
    label: "Projects done",
  },
  {
    value: "25+",
    label: "Happy clients",
  },
];

export default function AboutSectionNew() {
  return (
    <section className="w-full bg-bg-dark px-5 py-20 sm:px-8 lg:px-12 xl:px-16" id="About">
      
        <div className="grid items-start gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-28">

          {/*LEFT */}
          <div className="relative">
           
            <div className=" mb-12 flex items-center gap-2 text-2xl font-primary">
              <span className=" text-text-muted">
                What I bring
              </span>

              <span className=" font-semibold  text-primary-btn">
                to the table
              </span>
            </div>

            <div className="space-y-10 sm:space-y-12">
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  className={`
                    relative
                    ${index % 2 === 0 ? "lg:ml-0" : "lg:ml-20"}
                  `}
                >
                  {/* Number */}
                  <div
                    className="
                      absolute
                      -top-8
                      left-1
                      z-10
                      text-[48px]
                      font-medium
                      leading-none
                      tracking-[-0.05em]
                      text-text-main
                      font-primary
                    "
                  >
                    {feature.number}
                  </div>

                  {/* Card */}
                  <div
                    className="
                      relative
                      min-h-[150px]
                      rounded-[15px]
                      border
                      border-white/[0.08]
                      bg-bg-medium
                      px-8
                      py-10
                      shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary-btn/30
                    "
                  >
                    <div className="mx-auto max-w-[340px] text-center">
                      <h3 className="mb-3 text-2xl font-semibold text-text-main font-primary text-left">
                        {feature.title}
                      </h3>

                      <p className="text-sm leading-6 text-text-muted font-secondary text-left">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*RIGHT */}
          <div className="pt-2 lg:pt-24 my-auto">

          
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-primary-btn" />

              <span className="text-[13px] font-semibold uppercase tracking-[0.28em] text-primary-btn font-primary">
                About me
              </span>
            </div>

            {/* Main heading */}
            <h2 className=" text-5xl leading-[0.98] sm:text-[58px] lg:text-[62px] font-primary">
              <span className="block text-text-muted">
                The Person
              </span>

              <span className="block font-bold text-text-main">
                Behind the Work
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-[620px] text-[15px] leading-7 text-text-muted sm:text-[16px] font-secondary">
              I'm a frontend developer who builds modern websites for
              businesses. Sites that look professional, are easy to use,
              and help your customers understand what you offer.
            </p>

            {/* Skills */}
            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                  font-secondary
                    rounded-full
                    border
                    border-white/[0.10]
                    bg-bg-medium
                    px-4
                    py-2
                    text-[12px]
                    font-medium
                    text-text-muted
                  "
                >
                  {skill}
                  
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="my-9 h-px w-full bg-secondary-btn-text" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[32px] font-bold leading-none tracking-[-0.04em] text-text-main sm:text-[38px] font-primary">
                    {stat.value}
                  </div>

                  <div className="mt-3 text-[13px] leading-5 text-text-muted font-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

           
          

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a target="_blank"
                href="https://www.instagram.com/lohit_kcodes/"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-primary-btn
                  px-7
                  py-4
                  text-[14px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-primary-btn/90
                  hover:shadow-[0_10px_30px_rgba(255,105,0,0.2)]
                  font-secondary
                "
              >
                Let's work together
              </a>

              <a
                href="#Projects"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  font-secondary
                  px-7
                  py-4
                  text-[14px]
                  font-semibold
                  text-secondary-btn-text
                  transition-all
                  duration-300
                  bg-secondary-btn
                 
                "
              >
                View my work
              </a>
            </div>
          </div>
        </div>
     
    </section>
  );
}