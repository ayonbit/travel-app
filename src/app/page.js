//Components
import BestHotels from "@/components/best-hotels/BestHotels";
import Hero from "@/components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";

//image import
import hotel_image from "../../public/assets/hr_10.jpg";
import sea from "../../public/assets/sea.jpg";

//Home Page
export default function Home() {
  return (
    <>
      <Hero
        image={sea}
        mainHeader="Are you ready for Adventure?"
        secondaryHeader="Browse through te popular locations."
      />
      <PopularLocations />
      <Hero
        image={hotel_image}
        mainHeader="Get the best offer for your hotel!"
        secondaryHeader="Pick your desired place"
      />
      <BestHotels />
    </>
  );
}
