import Image from "next/image";
import React from "react";
import Searchbar from "./Searchbar";
import HowItWorks from "./HowItWorks";

const Hero = () => {
  return (
    <>
      <section className="min-h-[80vh] flex md:flex-row flex-col md:items-center md:mt-0 mt-16">
        <div className="md:w-1/2 flex flex-col space-y-5">
          <div className="flex items-center">
            <p className="font-semibold text-lg text-red-600">
              Kickstart Smart Buying Here:
            </p>
            <Image
              src={"/assets/icons/arrow-right.svg"}
              height={25}
              width={25}
            />
          </div>
          <h1 className="md:text-6xl text-5xl font-bold leading-tight">
            Unleash the Power of Savings at{" "}
            <span className="text-red-600"> PriceHunt</span>
          </h1>
          <p className="text-lg">
            Welcome to PriceHunt, your one-stop destination for finding the best
            deals on your favorite products. With PriceHunt, saving money is a
            breeze.
          </p>
          <Searchbar />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={"/assets/images/hero-1.svg"}
            alt="hero image"
            height={484}
            width={484}
          />
        </div>
      </section>
      <HowItWorks />
    </>
  );
};

export default Hero;
