'use client'
import Carousel from "./components/Carousel";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <div  className="flex flex-col gap-5 h-screen ">
      <div
        className="flex-1 flex flex-col items-center justify-center bg-[#ff9a56] container mx-auto rounded-lg shadow-lg"
      >
        <Carousel />
        <Feed />
      </div>
    </div>
  );
}
