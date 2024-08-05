import { motion } from "framer-motion";
import React, { useState } from "react";
import { GiStarShuriken } from "react-icons/gi";

function Work() {
  const [workData, setWorkData] = useState([
    {
      heading: "Columbia Pictures",
      subheading: "Celebrating a Century of Cinema",
      imgSrc:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
      videoSrc:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
    },
    {
      heading: "Rino & Pelle",
      subheading: "Effortless chic lifestyle",
      imgSrc:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
      videoSrc:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
    },
    {
      heading: "Aebele Interiors",
      subheading: "Luxurious design experience",
      imgSrc:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
      videoSrc:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
    },
    {
      heading: "Pixelflakes",
      subheading: "Architectural marketing agency",
      imgSrc:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
      videoSrc:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
    },
  ]);

  return (
    <div className="w-full relative">
      <div className="work max-w-screen-2xl mx-auto px-5 py-20 sm:px-10">
        <div className="featured flex items-center gap-4">
          <GiStarShuriken />
          <h1 className="capitalize">Featured projects</h1>
        </div>
        <h1 className="text-6xl font-semibold my-5 sm:text-[13rem] overflow-hidden sm:leading-none sm:tracking-tighter sm:font-semibold">
          <motion.div className="inline-block origin-left"
            initial={{ y: "40%", opacity: 0, rotate: 90 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease:[0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{once:true}}
          >
            Work
          </motion.div>
        </h1>
        <p className="leading-2  font-semibold text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems mt-10 sm:flex sm:flex-wrap sm:gap-5 ">
          {workData.map((item, index) => {
            return (
              <div
                key={index}
                className={`elem relative ${
                  index == 0
                    ? "sm:w-[50%]"
                    : index == 1
                    ? "sm:w-[30%] sm:ml-[10%] sm:h-[40vh] sm:scale-75 sm:mt-[25%]"
                    : index == 2
                    ? "sm:scale-50 sm:w-[45%] sm:mt-[50vh] sm:-ml-[5vw]"
                    : index == 3
                    ? "sm:w-[54%] sm:mt-[25vh]"
                    : ""
                } w-full mt-10`}
              >
                <div className="video h-[104vw] sm:h-[50rem] relative overflow-hidden w-full ">
                  <motion.img initial={{opacity:1}} whileHover={{opacity:0}}
                  data-scroll 
                  data-scroll-speed="-.2"
                    className="w-full hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block h-full sm:h-[150%] object-cover"
                    src={item.imgSrc}
                    alt={item.heading}
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full block  sm:z-[1] scale-[1.3] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src={item.videoSrc}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3
                    className={`font-semibold ${
                      index == 1
                        ? "sm:scale-[1.4]  leading-9 sm:ml-[4vw]"
                        : index == 2
                        ? "sm:scale-[2]  leading-9 sm:ml-[11.5vw]"
                        : ""
                    }`}
                  >
                    {item.heading}
                  </h3>
                  <h3
                    className={`capitalize opacity-55 ${
                      index == 1
                        ? "sm:scale-[1.4] leading-9 sm:ml-[4vw]"
                        : index == 2
                        ? "sm:scale-[2] leading-10 sm:ml-[11.5vw]"
                        : ""
                    }`}
                  >
                    {item.subheading}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
