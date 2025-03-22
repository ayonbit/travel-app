"use client";

import { optionLocations, optionTypes } from "@/data/data";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Select from "@/ui/Select";
import Image from "next/image";

// Components
import Card from "@/components/best-hotels/Card";
//Image
import CatalogImage from "../../../public/assets/hr_1.jpg";
// Assets Import
// import image_1 from "../../../public/assets/hr_1.jpg";
// import image_2 from "../../../public/assets/hr_2.jpg";
// import image_3 from "../../../public/assets/hr_3.jpg";
// import image_4 from "../../../public/assets/hr_4.jpg";
// import image_5 from "../../../public/assets/hr_5.jpg";
// import image_6 from "../../../public/assets/hr_6.jpg";
// import image_7 from "../../../public/assets/hr_7.jpg";

const CatalogPage = () => {
  const data = [
    {
      name: "Arabian Paradise",
      image: "/assets/hr_1.jpg",
      price: 324.5,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE",
    },
    {
      name: "Palm Oasis Resort",
      image: "/assets/hr_2.jpg",
      price: 289.0,
      category: "Premium",
      reviews: 4.5,
      location: "Abu Dhabi, UAE",
    },
    {
      name: "Golden Sands Retreat",
      image: "/assets/hr_3.jpg",
      price: 310.2,
      category: "Luxury",
      reviews: 4.6,
      location: "Doha, Qatar",
    },
    {
      name: "Skyline Elegance",
      image: "/assets/hr_4.jpg",
      price: 450.0,
      category: "Ultra Luxury",
      reviews: 4.9,
      location: "Dubai, UAE",
    },
    {
      name: "Seaside Bliss Hotel",
      image: "/assets/hr_5.jpg",
      price: 270.3,
      category: "Coastal",
      reviews: 4.4,
      location: "Sharjah, UAE",
    },
    {
      name: "The Royal Palace",
      image: "/assets/hr_6.jpg",
      price: 599.99,
      category: "Luxury",
      reviews: 5.0,
      location: "Dubai, UAE",
    },
    {
      name: "Urban Skyline Tower",
      image: "/assets/hr_7.jpg",
      price: 390.75,
      category: "Modern",
      reviews: 4.8,
      location: "Riyadh, Saudi Arabia",
    },
    {
      name: "Urban Skyline Tower",
      image: "/assets/hr_7.jpg",
      price: 390.75,
      category: "Modern",
      reviews: 4.8,
      location: "Riyadh, Saudi Arabia",
    },
  ];
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={CatalogImage} // Ensure image is correctly referenced
          alt="Dubai"
          className="brightness-50 h-full w-full object-cover"
          fill
          priority // Fix LCP warning
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <h3 className="absolute text-4xl sm:text-6xl capitalize font-semibold flex items-center justify-center inset-0 text-white">
          Dubai
        </h3>
      </div>

      {/* Search Form */}
      <div className="relative z-20 -mt-12 flex flex-col items-center w-full">
        <form className="border w-full sm:w-2/3 h-auto sm:h-28 border-slate-500 px-4 py-6 sm:py-12 rounded-xl bg-blue-600 text-white flex flex-wrap gap-4 sm:flex-nowrap justify-between items-center">
          <div className="flex flex-col items-center gap-1 w-full sm:w-auto">
            <h3 className="text-[#efefef] font-semibold">City</h3>
            <Select
              data={optionLocations}
              className="w-full sm:w-auto p-2 rounded-xl outline-none capitalize text-blue-800"
            />
          </div>
          <div className="flex flex-col items-center gap-1 w-full sm:w-auto">
            <h3 className="text-[#efefef] font-semibold">Price</h3>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Input
                type="number"
                placeholder="Min. price"
                className="w-full sm:w-auto p-2 rounded-xl outline-none text-blue-800"
              />
              <Input
                type="number"
                placeholder="Max. price"
                className="w-full sm:w-auto p-2 rounded-xl outline-none text-blue-800"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 w-full sm:w-auto">
            <h3 className="text-[#efefef] font-semibold">Type of hotel</h3>
            <Select
              data={optionTypes}
              className="w-full sm:w-auto p-2 rounded-xl outline-none text-blue-800"
            />
          </div>
          <Button
            disabled={false}
            label="Search"
            className="w-full sm:w-auto mt-4 sm:mt-6 px-6 py-2 text-[20px] bg-white text-blue-600 rounded-xl transition-all hover:bg-[#efefef]"
          />
        </form>

        {/* Hotels Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 md:px-8 lg:px-12 py-8">
          {data.map((place, idx) => (
            <Card key={idx} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
