const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 space-y-5 bg-slate-100 md:mt-0 mt-10">
      <h1 className="text-3xl font-bold text-center">
        Why Choose Price<span className="text-red-600">Hunt</span>?
      </h1>
      <div className="md:w-1/2 w-[80%]">
        <p className="text-sm text-center">
          At PriceHunt, we simplify your online shopping. Say goodbye to hopping
          between websites for deals. Find the best prices in one place, save
          money, and stay informed with email notifications. Shop smarter with
          PriceHunt.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 md:pt-10 pt-5">
        <div className="w-64 h-52 bg-white p-5 space-y-3 flex flex-col justify-center">
          <h1 className="font-bold text-xl text-primary-darkViolet">
            Save Time
          </h1>
          <p className="text-sm">
            No more hopping from site to site. Get all the information you need
            in one place.
          </p>
        </div>
        <div className="w-64 h-52 bg-white p-5 space-y-3 flex flex-col justify-center">
          <h1 className="font-bold text-xl text-primary-darkViolet">
            Save Money
          </h1>
          <p className="text-sm text-neutral-grayishViolet">
            Never pay more than you have to. Find the best deals instantly.
          </p>
        </div>
        <div className="w-64 h-52 bg-white p-5 space-y-3 flex flex-col justify-center">
          <h1 className="font-bold text-xl text-primary-darkViolet">
            Stay Informed
          </h1>
          <p className="text-sm text-neutral-grayishViolet">
            Click on the Track Product button and Receive email notifications
            when prices change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
