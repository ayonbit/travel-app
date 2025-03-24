import { format } from "date-fns";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const Review = ({ review }) => {
  return (
    <div className="w-full flex flex-wrap sm:flex-nowrap gap-4 p-4 border border-gray-300 rounded-lg shadow-md">
      {/* User Avatar */}
      <div className="w-12 h-12 sm:w-14 sm:h-14">
        <Image
          height="56"
          width="56"
          className="w-full h-full object-cover rounded-full"
          src={"/assets/avatar_1.png"}
          alt="review person"
        />
      </div>

      {/* Review Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-lg sm:text-xl truncate">
          {review.username || "Anonymous Review"}
        </h3>
        <span className="text-sm text-gray-600 block">
          {format(new Date(review.createdAt), "MMM do yyyy")}
        </span>
        <p className="mt-2 text-gray-800 text-sm sm:text-base break-words">
          {review.text}
        </p>
      </div>

      {/* Star Rating */}
      <span className="flex items-center gap-1 text-sm sm:text-base text-gray-700">
        {review.stars}
        <AiFillStar size={20} color="rgb(59, 130, 246)" />
      </span>
    </div>
  );
};

export default Review;
