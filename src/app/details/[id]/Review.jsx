import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
//image assets

import avatar from "../../../../public/assets/avatar_1.png";

const Review = () => {
  return (
    <div className="mt-8 md:mt-16 flex flex-col gap-6 md:gap-24 w-full md:w-1/2 lg:w-1/3">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-14 h-14">
          <Image
            className="w-full h-full object-cover rounded-full"
            src={avatar}
            alt="customerProfile"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[18px] md:text-[20px]">Ayon Bit</h3>
          <span className="text-slate-700 text-sm md:text-base">
            2 hours ago
          </span>
          <div className="mt-2 md:mt-4 text-slate-800 text-sm md:text-base">
            Best Hotel In Dubai!
          </div>
        </div>
        <span className="mt-2 md:mt-0 ml-auto flex items-center gap-2 text-sm md:text-base">
          5
          <AiFillStar size={20} color="rgb(59, 130, 246)" />
        </span>
      </div>
    </div>
  );
};

export default Review;
