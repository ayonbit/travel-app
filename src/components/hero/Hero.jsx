import Image from "next/image";

const Hero = ({ image, mainHeader, secondaryHeader }) => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] lg:h-screen">
      <Image
        src={image}
        alt="hero_image"
        className="brightness-50 h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 lg:gap-8 px-4">
        <h2 className="text-white text-2xl sm:text-4xl lg:text-6xl font-bold max-w-3xl">
          {mainHeader}
        </h2>
        <h5 className="text-white text-lg sm:text-2xl lg:text-4xl font-semibold max-w-2xl">
          {secondaryHeader}
        </h5>
      </div>
    </div>
  );
};

export default Hero;
