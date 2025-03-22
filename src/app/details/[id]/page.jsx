"use client";
import BookModal from "@/components/book-modal/BookModal";
import { format } from "currency-formatter";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaBed, FaWifi } from "react-icons/fa";
import { register } from "swiper/element/bundle";
import Review from "./Review";

//image assets
import hotel_image_1 from "../../../../public/assets/hr_1.jpg";
import hotel_image_2 from "../../../../public/assets/hr_2.jpg";

register();

const HotelDetailsPage = (ctx) => {
  const id = ctx.params.id;
  const [selectedStar, setSelectedStar] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const swiperElRef = useRef(null);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  return (
    <div
      className={`min-h-screen w-full mt-24 ${showModal && "overflow-hidden"}`}
    >
      {showModal && <BookModal handleHideModal={handleHideModal} />}
      <div className="h-full max-w-[90%] md:w-3/4 mx-auto">
        <div>
          <div className="w-full h-[450px] md:h-[750px] overflow-hidden mx-auto">
            <div className="w-full h-full">
              <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                navigation="true"
              >
                <swiper-slide>
                  <Image
                    src={hotel_image_1}
                    alt="hotel-image"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </swiper-slide>
                <swiper-slide>
                  <Image
                    src={hotel_image_2}
                    alt="hotel-image"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
          </div>

          <div className="mt-8 md:mt-12 px-6 flex flex-col md:flex-row items-start md:items-center justify-between">
            <h2 className="font-bold text-2xl md:text-4xl">Arabian Paradise</h2>

            <div className="mt-4 md:mt-0">
              <span className="p-2 px-4 text-lg md:text-[22px] rounded-full bg-blue-600 text-white flex items-center gap-2">
                <AiFillStar color="white" />
                <span className="text-white">4.7</span>
              </span>
            </div>
          </div>

          <div className="mt-8 md:mt-16 px-6 flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <span className="flex items-center gap-2">
              <CiLocationOn /> Dubai, UAE
            </span>
            <span className="flex items-center gap-2">
              {format(325.5, { locale: "en-us" })}/night
            </span>
            <span className="flex items-center gap-2">
              2 <FaBed />
            </span>
            <span className="flex items-center gap-2">
              Free <FaWifi />
            </span>
          </div>

          <div className="mt-8 md:mt-16 px-6 flex flex-col md:flex-row items-start md:items-end justify-between">
            <p className="text-lg md:text-xl max-w-xl text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              error, ipsam earum inventore illum veritatis nulla aperiam.
            </p>
            <button
              onClick={handleShowModal}
              className="mt-4 md:mt-0 cursor-pointer rounded-lg py-2 px-6 text-lg md:text-xl text-white bg-blue-500"
            >
              Book
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t-2 border-gray-200 px-6 mt-12 md:mt-16 mx-auto">
          <h1 className="mt-8 md:mt-16 text-2xl md:text-3xl font-bold">
            Reviews
          </h1>

          <div className="mt-4 md:mt-8 flex items-center gap-4 md:gap-6">
            {Array.from(Array(5).keys()).map((number, idx) => (
              <span
                key={idx}
                onClick={() => setSelectedStar(number + 1)}
                className={`${selectedStar === number + 1 ? "scale-125" : ""}
                                 cursor-pointer flex items-center gap-2 transition-all`}
              >
                {number + 1}
                <AiFillStar size={22} color="rgb(59, 130, 246)" />
              </span>
            ))}
          </div>

          <div className="mt-4 md:mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-28 border rounded-lg py-4 px-6 w-full md:w-max">
            <input
              className="outline-none w-full md:w-auto"
              type="text"
              placeholder="Leave your opinion..."
            />
            <button className="cursor-pointer rounded-lg py-2 px-6 text-lg md:text-xl text-white bg-blue-500">
              Post
            </button>
          </div>

          {/* Review section */}
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
