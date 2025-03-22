import Image from "next/image";
import Link from "next/link";

const Card = ({ place }) => {
  return (
    <Link
      href="/catalog"
      className="cursor-pointer flex flex-col max-w-xs md:max-w-sm rounded-xl shadow-md transition-all hover:shadow-lg"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full">
        <Image
          src={place.image}
          alt={`${place.city} Image`}
          fill
          className="object-cover rounded-tl-xl rounded-tr-xl"
        />
        <div className="absolute right-0 bottom-0 capitalize p-3 bg-blue-700 text-white rounded-tl-xl font-semibold">
          {place.city}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-center text-lg md:text-xl text-slate-800 font-semibold">
          {place.numOfPlaces} Places to stay
        </h2>
        <p className="text-center text-base text-slate-700">
          Discover the best hotel or apartment for your adventurous journey.
        </p>
      </div>
    </Link>
  );
};

export default Card;
