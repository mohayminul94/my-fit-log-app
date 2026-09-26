import React from "react";
import Image from "next/image";
import workoutImage from "../../assets/banner.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#0b0c0f] px-4 py-5 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between overflow-hidden rounded-xl border border-[#292c32] bg-[#15171c] px-6 py-8 md:px-10 md:py-10 lg:px-9">
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-widest text-[#b8ff00]">
            Workout Library
          </p>

          <h1 className="max-w-130 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-[42px]">
          Train with intent Log
            <br />
          every set.
          </h1>

          <p className="mt-5 max-w-107.5 text-sm leading-5 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>

          <button
            type="button"
            className="mt-5 rounded-md bg-[#b8ff00] px-5 py-2.5 text-[10px] font-extrabold uppercase text-black transition duration-200 hover:bg-[#a7e900] hover:scale-105"
          >
            Browse Workouts
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden w-[38%] items-center justify-center md:flex">
          <Image
            src={workoutImage}
            alt="Workout machine"
            className="h-auto w-full max-w-65 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
