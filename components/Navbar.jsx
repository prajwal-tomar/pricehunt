import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4">
      <h1 className="text-3xl font-bold">
        Price<span className="text-red-600">Hunt</span>{" "}
      </h1>
      <div className="flex space-x-3">
        <Image
          src={"/assets/icons/search.svg"}
          alt="search icon"
          height={30}
          width={30}
        />
        <Image
          src={"/assets/icons/black-heart.svg"}
          alt="heart icon"
          height={30}
          width={30}
        />
        <Image
          src={"/assets/icons/user.svg"}
          alt="user icon"
          height={30}
          width={30}
        />
      </div>
    </div>
  );
};

export default Navbar;
