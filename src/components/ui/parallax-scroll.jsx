"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn.js";
import { Link } from "react-router-dom";

const ParallaxScroll = ({ images, className }) => {
  const { scrollYProgress } = useScroll(); // Use the page scroll

  // Translate values based on the page scroll
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-14 pt-14">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <Link to={el.link}>
                <img
                  src={el.src}
                  className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 transition-transform transform hover:scale-[1.02] hover:shadow-md duration-300 ease-in-out"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Link to={el.link}>
                <img
                  src={el.src}
                  className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 transition-transform transform hover:scale-[1.02] hover:shadow-md duration-300 ease-in-out"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Link to={el.link}>
                <img
                  src={el.src}
                  className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 transition-transform transform hover:scale-[1.02] hover:shadow-md duration-300 ease-in-out"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxScroll;
