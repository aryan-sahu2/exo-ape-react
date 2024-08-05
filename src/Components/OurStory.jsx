import React from "react";

function OurStory() {
  return (
    <div className="bg-black sm:h-fit sm:pt-[10vh] w-full relative">
      <div className=" absolute aspect-video w-[19rem] sm:w-[50rem] sm:right-[8vw] sm:top-[15%] right-0 top-5">
        <div className="bg-gradient-to-b bottom-0 from-transparent to-black w-full h-1/2  absolute"></div>
        <div className="bg-gradient-to-t top-0 h-1/2 from-transparent to-black w-full  absolute"></div>
        <div className="bg-gradient-to-r right-0 from-transparent to-black w-1/2 h-full  absolute"></div>
        <div className="bg-gradient-to-l left-0 from-transparent to-black w-1/2 h-full  absolute"></div>
        <video
          autoPlay
          loop
          muted
          className=" w-full h-full "
          src="https://cdn.pixabay.com/video/2022/09/23/132253-752803366_large.mp4"
        ></video>
      </div>
      <div className="max-w-screen-2xl sm:mx-auto mx-10 sm:px-5 relative text-white pb-10 border-b-zinc-200 border-b-[1px]">
        <div className="heading w-full  mt-10 py-10">
          <h1 className="text-6xl sm:text-[12rem] text-[#E0CCBB] font-normal sm:font-semibold leading-none">
            Our
          </h1>
          <h1 className="text-6xl sm:text-[12rem] text-[#E0CCBB] font-normal sm:font-semibold leading-none">
            Story
          </h1>
        </div>
        <div className="footer-text sm:text-3xl sm:w-1/2 font-[#e2d5c9] sm:mt-5">
          <p>
            The story behind Exo Ape is one of exploration, creativity and
            curiosity.
          </p>
        </div>
        <li className="list-disc sm:hidden">
          <a className="capitalize underline mt-7 inline-block " href="#">
            Our Story
          </a>
        </li>
      </div>
      <div className="max-w-screen-2xl mx-auto px-10 sm:flex sm:px-5 relative h-fit text-white pb-10 ">
        <div className="sm:w-[70%] w-full">
          <div className="flex">
            <div className="w-1/2 hidden sm:text-xl sm:flex flex-col gap-2 font-light text-zinc-100 mt-10">
              <h1>Willem II Singel 8</h1>
              <h1>6041 HS, Roermond</h1>
              <h1>The Netherlands</h1>
              <h1>hello@exoape.com</h1>
            </div>
            <div className="w-1/2 sm:text-xl  flex flex-col gap-3 font-light text-zinc-100 mt-10">
              <h1>Work</h1>
              <h1>Studio</h1>
              <h1>News</h1>
              <h1>Contact</h1>
            </div>
            <div className="w-1/2 sm:text-xl  flex flex-col gap-3 font-light text-zinc-100 mt-10">
              <h1>Behance</h1>
              <h1>Dribble</h1>
              <h1>Twitter</h1>
              <h1>Instagram</h1>
            </div>
          </div>
        </div>
        <div className="sm:w-[30%] sm:flex sm:justify-end sm:items-end hidden ">
          <a className="capitalize underline mt-7 sm:mr-10 sm:leading-5 sm:font-light sm:text-xl font-[#e2d5c9] inline-block " href="#">
            Our Story
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
