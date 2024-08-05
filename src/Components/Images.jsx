import gsap, { ScrollTrigger } from "gsap/all";
import { Power4 } from "gsap/all";
import React, { useEffect, useRef } from "react";

function Images() {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 10%", //top of element to the topof the page
        end:"100% 40%",
        scrub: 1,
      },
    });
    tl
    .to(first.current,{
      x:"30%",
      ease:Power4
    },"a")
    .to(third.current,{
      x:"-30%",
      ease:Power4
    },"a")
    .to(second.current,{
      x:"-35%",
      y:"-10%",
      ease:Power4
    },"a")
    .to(fourth.current,{
      x:"35%",
      y:"10%",
      ease:Power4
    },"a")
  });

  return (
    <div
      ref={parent}
      className="w-full h-[70vh] sm:h-[180vh] sm:mb-[20vh] overflow-hidden bg-white flex justify-center items-center"
    >
      <div className="w-[40%] h-1/2  sm:h-[50%] sm:w-[22%]  relative">
        <div
          ref={first}
          className="w-20 h-[7rem] sm:h-[17rem] sm:w-[12rem] -right-1/3 top-6  absolute"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={second}
          className="absolute w-[8rem] sm:w-[28rem] aspect-video sm:-left-[80%] -left-1/2 top-1/3  "
        >
          <video
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            autoPlay
            loop
            muted
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={third}
          className="absolute w-[9rem] sm:w-[25rem] sm:-left-[80%] sm:-bottom-[10rem] aspect-video -left-[70%] bottom-6 "
        >
          <img
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={fourth}
          className="absolute w-[8.8rem] sm:w-[30rem] sm:-right-[100%] sm:-bottom-[48%] overflow-hidden aspect-[1/1] -right-[70%] -bottom-[35%] "
        >
          <video
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            autoPlay
            loop
            muted
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="object-cover w-full h-full"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
