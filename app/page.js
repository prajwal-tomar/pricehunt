import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Trending Section
        </h1>
        {["Apple iPhone, Samsung S23, Apple Watch"].map((product) => (
          <p>{product}</p>
        ))}
      </section>
    </div>
  );
};

export default Home;
