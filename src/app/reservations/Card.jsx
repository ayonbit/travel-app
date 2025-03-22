import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const Card = ({ hotel }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white p-4">
      <Link href={`/details/${hotel.listingId}`} className="w-full">
        <Image
          src={hotel.image}
          className="rounded-xl shadow-md object-cover w-full h-52"
          width={300}
          height={200}
          alt="Hotel image"
        />
      </Link>
      <div className="p-4 flex flex-col gap-3">
        <span className="text-lg font-semibold">{hotel.location}</span>
        <span className="text-gray-600">{hotel.name}</span>
        <div className="text-sm text-gray-500 flex items-center">
          <span>{format(hotel.startDate, "MMM do yyyy")}</span>
          <span className="px-2">-</span>
          <span>{format(hotel.endDate, "MMM do yyyy")}</span>
        </div>
        <div className="font-medium">
          Total price:{" "}
          <span className="text-blue-600">
            ${hotel.daysDifference * hotel.pricePerNight}
          </span>
        </div>
        <button className="w-full py-2 bg-red-500 text-white rounded-lg transition-all hover:bg-red-400">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Card;
