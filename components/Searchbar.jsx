"use client";

const Searchbar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search clicked");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-5">
        <input
          type="text"
          placeholder="Enter the link.."
          className="w-full border border-black/10 rounded-lg px-5 py-2"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-black text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
