'use client'
import Carousel from "./components/Carousel";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <div  className="flex flex-col gap-5  ">
      <div
        className="flex flex-col items-center justify-center 
        bg-gradient-to-r from-[#ff9a56] to-[#ffb366] mx-auto"
      >
        <Carousel />
        <Feed />
      </div>
    </div>
  );
}
