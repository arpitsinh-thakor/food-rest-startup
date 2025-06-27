'use client'
import Feed from "./components/Feed";

export default function Home() {
  return (
    <div  className="flex flex-col gap-5 h-screen bg-amber-200  ">
      <Feed />
    </div>
  );
}
