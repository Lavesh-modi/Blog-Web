import React from "react";
import Image from "next/image";
function SplitScreen() {
  return (
    <div className="flex h-full">
      <div className="w-3/5 flex flex-col items-start justify-center p-16">
        <h1 className="text-7xl font-bold mb-6 leading-tight">
          Human stories & ideas
        </h1>
        <p className="text-2xl mb-10 text-gray-600">
          A place to read, write, and deepen your understanding
        </p>
        <button className="bg-black text-white py-3 px-6  text-lg rounded-2xl">
          Start reading
        </button>
      </div>
      <div className="w-2/5 relative">
        <Image
          src={"/img2.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Background image"
          className="rounded-l-lg"
        />
      </div>
    </div>
  );
}

export default SplitScreen;
