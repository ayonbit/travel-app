import Card from "./Card";

const ReservationsPage = () => {
  const data = [
    {
      id: crypto.randomUUID(),
      listingId: 1,
      image: "/assets/hr_1.jpg",
      location: "Dubai,UAE",
      name: "Arabian Paradise",
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
      daysDifference: 5,
      pricePerNight: 500,
    },
    {
      id: crypto.randomUUID(),
      listingId: 2,
      image: "/assets/hr_2.jpg",
      location: "Abu Dhabi, UAE",
      name: "Palm Oasis Resort",
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
      daysDifference: 5,
      pricePerNight: 500,
    },
    {
      id: crypto.randomUUID(),
      listingId: 1,
      image: "/assets/hr_3.jpg",
      location: "Doha, Qatar",
      name: "Golden Sands Retreat",
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
      daysDifference: 5,
      pricePerNight: 500,
    },
    {
      id: crypto.randomUUID(),
      listingId: 1,
      image: "/assets/hr_4.jpg",
      location: "Dubai, UAE",
      name: "Skyline Elegance",
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
      daysDifference: 5,
      pricePerNight: 500,
    },
    {
      id: crypto.randomUUID(),
      listingId: 1,
      image: "/assets/hr_5.jpg",
      location: "Sharjah, UAE",
      name: "Seaside Bliss Hotel",
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
      daysDifference: 5,
      pricePerNight: 500,
    },
    {
      id: crypto.randomUUID(),
      listingId: 1,
      image: "/assets/hr_6.jpg",
      location: "Dubai, UAE",
      name: "The Royal Palace",
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
      daysDifference: 5,
      pricePerNight: 500,
    },
    {
      id: crypto.randomUUID(),
      listingId: 1,
      image: "/assets/hr_7.jpg",
      location: "Riyadh, Saudi Arabia",
      name: "Urban Skyline Tower",
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
      daysDifference: 5,
      pricePerNight: 500,
    },
  ];
  return (
    <div className="mt-24 px-4 sm:px-8 lg:px-16 min-h-screen w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
        {data?.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default ReservationsPage;
