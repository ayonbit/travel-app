// Assets Import
import image_1 from "../../../public/assets/hr_1.jpg";
import image_2 from "../../../public/assets/hr_2.jpg";
import image_3 from "../../../public/assets/hr_3.jpg";
import image_4 from "../../../public/assets/hr_4.jpg";
import image_5 from "../../../public/assets/hr_5.jpg";
import image_6 from "../../../public/assets/hr_6.jpg";
import image_7 from "../../../public/assets/hr_7.jpg";

// Components
import Card from "./Card";
const data = [
  {
    name: "Arabian Paradise",
    image: image_1,
    price: 324.5,
    category: "Luxury",
    reviews: 4.7,
    location: "Dubai, UAE",
  },
  {
    name: "Palm Oasis Resort",
    image: image_2,
    price: 289.0,
    category: "Premium",
    reviews: 4.5,
    location: "Abu Dhabi, UAE",
  },
  {
    name: "Golden Sands Retreat",
    image: image_3,
    price: 310.2,
    category: "Luxury",
    reviews: 4.6,
    location: "Doha, Qatar",
  },
  {
    name: "Skyline Elegance",
    image: image_4,
    price: 450.0,
    category: "Ultra Luxury",
    reviews: 4.9,
    location: "Dubai, UAE",
  },
  {
    name: "Seaside Bliss Hotel",
    image: image_5,
    price: 270.3,
    category: "Coastal",
    reviews: 4.4,
    location: "Sharjah, UAE",
  },
  {
    name: "The Royal Palace",
    image: image_6,
    price: 599.99,
    category: "Luxury",
    reviews: 5.0,
    location: "Dubai, UAE",
  },
  {
    name: "Urban Skyline Tower",
    image: image_7,
    price: 390.75,
    category: "Modern",
    reviews: 4.8,
    location: "Riyadh, Saudi Arabia",
  },
];
// Best Hotels Component
const BestHotels = () => {
  return (
    <div className="h-full w-full my-20 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start">
        <h5 className="text-lg sm:text-xl bg-blue-500 text-white rounded-full px-6 py-2 w-max">
          Explore Top
        </h5>
        <h2 className="text-3xl md:text-4xl text-slate-800 font-bold mt-6 mb-8">
          Best Hotels
        </h2>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {data.map((place, idx) => (
            <Card key={idx} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestHotels;
