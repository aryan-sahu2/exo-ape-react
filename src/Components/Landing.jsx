import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";

function Landing() {
  return (
    <div className="relative w-full h-[150vh] sm:h-[230vh] ">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className=" h-full pt-14 text max-w-screen-2xl mx-auto px-5  sm:px-10 text-white">
          <div className="para mt-72 sm:mt-[36rem] sm:mb-10 ">
            {[
              "Global digital design studio partnering with",
              "with brands and businesses that create",
              "exceptional experiences where people",
              "live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p
                  className="text-md font-semibold sm:text-3xl overflow-hidden "
                  key={index}
                >
                  <motion.span
                    className="inline-block origin-left "
                    initial={{ rotate: 90, y: "100%" }}
                    animate={{ rotate: 0, y: 0 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.8,
                      delay: index * 0.2,
                    }}
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-5">
            {["Digital", "Design", "Experience"].map((item, index) => {
              return (
                <h1 key={index} className="text-6xl sm:text-[14vw] font-light tracking-tight sm:py-10 py-3 -mt-4 sm:-mt-20 overflow-hidden">
                  <motion.div
                    className="inline-block origin-left "
                    initial={{ rotate: 90, y: "100%" }}
                    animate={{ rotate: 0, y: 0 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1,
                      delay: index * 0.16,
                    }}
                  >
                    {item}
                  </motion.div>
                </h1>
              );
            })}
          </div>
          <div className="para2 sm:w-1/3 mt-10 sm:mt-20">
            <p className="sm:text-xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              href="#"
              className="sm:text-xl sm:border-b-[1px] border-b-[.3px] border-zinc-100 pb-1 mt-10 inline-block"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
