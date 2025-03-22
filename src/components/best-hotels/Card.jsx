import { format } from "currency-formatter";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const Card = ({ place }) => {
  return (
    <Link
      href="/details/1"
      className="min-h-[500px] max-w-sm w-full flex flex-col rounded-xl cursor-pointer transition-all shadow-md hover:shadow-lg"
    >
      {/* Image Section */}
      <div className="relative h-2/3 w-full">
        <Image
          src={place.image}
          fill
          className="rounded-t-xl object-cover"
          alt={place.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute right-0 bottom-0 p-3 bg-blue-700 text-white rounded-tl-xl text-sm font-semibold">
          {place.location}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col gap-4 p-4">
        {/* Title & Rating */}
        <div className="mt-2 flex justify-between items-center">
          <h2 className="text-left text-xl md:text-2xl text-slate-800 font-semibold">
            {place.name}
          </h2>
          <span className="p-2 rounded-full bg-blue-600 text-white flex items-center gap-1 text-sm">
            <AiFillStar />
            {place.reviews}
          </span>
        </div>

        {/* Price & Button */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-slate-600 text-lg">
            {format(place.price, { locale: "en-US" })}{" "}
            <span className="ml-1">per night</span>
          </span>
          <button className="cursor-pointer py-2 px-5 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all">
            Book
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
