import Card from "./Card";

const PopularLocations = () => {
  const data = [
    { image: "/assets/delhi.jpg", city: "Delhi", numOfPlaces: 73 },
    { image: "/assets/berlin.jpg", city: "Berlin", numOfPlaces: 34 },
    { image: "/assets/paris.jpg", city: "Paris", numOfPlaces: 52 },
    { image: "/assets/dubai.jpg", city: "Dubai", numOfPlaces: 27 },
  ];

  return (
    <div className="w-full my-24">
      <div className="w-5/6 mx-auto flex flex-col">
        {/* Heading */}
        <h5 className="text-[18px] md:text-[20px] bg-blue-500 text-white rounded-full px-6 py-3 w-max">
          Explore Top
        </h5>
        <h2 className="text-3xl md:text-4xl text-slate-800 font-bold mt-6 mb-12">
          Popular Locations
        </h2>

        {/* Grid for Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {data.map((place, idx) => (
            <Card key={idx} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularLocations;
