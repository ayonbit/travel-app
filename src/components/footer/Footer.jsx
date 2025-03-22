// This Page will be build later
// This Page will be build later
// This Page will be build later

const Footer = () => {
  return (
    <footer className="border-t h-auto w-full mt-16 bg-gray-100 py-8">
      <div className="w-5/6 max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-12 sm:gap-8 justify-between">
        {/* About Section */}
        <div className="flex-1 flex flex-col gap-4 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            About the App
          </h2>
          <p className="max-w-md text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            velit fuga perspiciatis itaque iste, aliquid dignissimos voluptate
            modi, tempore assumenda adipisci dolor hic atque quod consequuntur
            cupiditate. Quasi, nobis veritatis!
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex-1 flex flex-col items-center gap-4 text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Contacts
          </h2>
          <span className="text-gray-700">Phone: +123 456 789</span>
          <a
            href="https://ayonbit.me"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Website: Ayon Bit
          </a>
          <a
            href="https://github.com/ayonbit"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub: Ayon Bit
          </a>
        </div>

        {/* Location Section */}
        <div className="flex-1 flex flex-col items-center sm:items-end gap-4 text-center sm:text-right">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Location
          </h2>
          <span className="text-gray-700">Continent: Asia</span>
          <span className="text-gray-700">Country: Bangladesh</span>
          <span className="text-gray-700">
            Current Location: Dhaka, Bangladesh
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
