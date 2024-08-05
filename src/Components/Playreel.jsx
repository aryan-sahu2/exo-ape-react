import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { GiStarShuriken } from "react-icons/gi";

function Playreel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        scrub: 1,
        pin: true,
      },
    });
    tl
    .to(videodiv.current,{
      width: "105%",
      height: "105%",
      ease: Power4,
    },"a")
    .to(play.current,{
      x:"50%",
      scale:0.7,
      ease:Power4
    },"a")
    .to(reel.current,{
      x:"-50%",
      scale:0.7,
      ease:Power4
    },"a")
  });
    
  console.log(parent.current, parent);

  return (
    <div
      ref={parent}
      className="w-full relative bg-black h-screen overflow-hidden"
    >
      <div ref={videodiv} className="aspect-video sm:w-96 w-44 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video
          className="w-full h-full absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>
      <div className="overlay absolute w-full h-full py-20 text-white flex flex-col justify-between items-center">
        <div className="flex items-center justify-center text-white w-full gap-3">
          <GiStarShuriken className="text-white" />
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full justify-center flex items-center gap-52">
          <div ref={play} className="text-4xl sm:text-9xl font-light">Play</div>
          <div ref={reel} className="text-4xl sm:text-9xl font-light">Reel</div>
        </h1>
        <p className="text-center sm:text-base  px-10 text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default Playreel;
