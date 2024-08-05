import { motion } from "framer-motion";
import React from "react";
import { GiStarShuriken } from "react-icons/gi";

function Spread() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 ">
        <div className="flex items-center py-5 justify-center gap-3">
          <GiStarShuriken className="text-black" />
          <h1>In the media</h1>
        </div>
        <div className="text py-14 w-full text-center font-normal  ">
          {["Spread","the news"].map((item,index)=>{
            return <h1 key={index} className="capitalize text-6xl tracking-tighter sm:text-9xl overflow-hidden">
            <motion.span
              className="inline-block origin-left"
              initial={{rotate:90, y:"40%", opacity:0}}
              whileInView={{rotate:0, y:"0%", opacity:1}}
              viewport={{once:true}}
              transition={{
                ease:[0.22, 1, 0.36, 1],
                duration: 1,
                delay: index*0.2
                // delay: 0.3,
                // transitionProperty: ["rotate", "y", "opacity"]
              }}
            >
              {item}
            </motion.span>
          </h1>
          })}
          
          <p className="mt-8 text-base leading-2 mx-auto sm:w-1/3 w-[70%]">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            className="mt-5 border-b-[0.4px] font-semibold inline-block border-zinc-900 "
            href="#"
          >
            Browse all news
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spread;
