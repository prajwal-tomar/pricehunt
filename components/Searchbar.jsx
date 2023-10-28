"use client";
import { scrapeTheProductLink } from "@/lib/actions";
import { useState } from "react";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let isLinkValid = (url) => {
    try {
      // this fails if the url is not valid.
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      if (hostname.includes("amazon.in") || hostname.includes("amazon.com")) {
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }

    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      // check if the link received is valid or not.
      isLinkValid = isLinkValid(searchPrompt);
      if (!isLinkValid) return alert("Please Enter a Valid Product Link.");
      const product = await scrapeTheProductLink(searchPrompt);
      console.log(product);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setSearchPrompt("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-5">
        <input
          type="text"
          value={searchPrompt}
          placeholder="Enter the link.."
          className="w-full border border-black/10 rounded-lg px-5 py-2"
          onChange={(e) => setSearchPrompt(e.target.value)}
        />
        <button
          type="submit"
          className={`px-5 py-3 bg-black text-white rounded-lg `}
          disabled={searchPrompt === ""}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
