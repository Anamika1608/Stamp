"use client";
import ParallaxScroll from "../ui/parallax-scroll";

const ParallaxScrollSecondDemo = () => {
  return (
    
  <div className="bg-[#F9F1EC]">
    <div className="text-center text-3xl pt-5   font-medium">Click on any stamp to view the 3d model</div>
    <ParallaxScroll images={images} className='pb-44'/>
  </div>
);
}
 
const images = [
  { src: '/t5.jpg', link: '/bharat-1' },
  { src: '/bird.jpg', link: '/temple-3' },
  { src: '/heritage.jpg', link: '/odisha-1' },
  { src: '/o-4.jpg', link: '/olympics-4' },
  { src: '/heritage_2.jpg', link: '/odisha-2' },
  { src: '/ganesha.jpg', link: '/temple-2' },
  { src: '/bandha.jpg', link: '/odisha-5' },
  { src: '/o-2.jpg', link: '/olympics-2' },
  { src: '/dhanu.jpg', link: '/odisha-4' },
  { src: '/taj.jpg', link: '/taj_mahal' },
  { src: '/o-3.jpg', link: '/olympics-3' },
  { src: '/boat.jpg', link: '/temple-1' },
  { src: '/heritage_3.jpg', link: '/odisha-3' },
  { src: '/rajya.jpg', link: '/bharat-3' },
  { src: '/temple.jpg', link: '/temple-5' },
  { src: '/janambhumi.jpg', link: '/temple-4' },
  { src: '/o-4.jpg', link: '/olympics-4' },
  { src: '/hanuman.jpg', link: '/temple-6' },
  { src: '/sasti.jpg', link: '/odisha-6' },
  { src: '/o-1.jpg', link: '/olympics-1' },
];

export default ParallaxScrollSecondDemo