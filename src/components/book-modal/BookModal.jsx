"use client";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { format } from "currency-formatter";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const BookModal = ({ handleHideModal }) => {
  const [dateRange, setDateRange] = useState([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 1)), // Ensure 1 day is counted
  ]);

  const selectionRange = {
    startDate: dateRange[0],
    endDate: dateRange[1],
    key: "selection",
  };

  const calcDaysDiff = () => {
    const startDate = dateRange[0];
    const endDate = dateRange[1];

    if (startDate && endDate) {
      return (
        Math.ceil(
          (new Date(endDate).getTime() - new Date(startDate).getTime()) /
            (1000 * 60 * 60 * 24)
        ) + 1 // Fix: Ensure last day is counted
      );
    }
    return 1;
  };

  return (
    <div className="fixed z-30 backdrop-blur top-0 left-0 min-h-full w-full flex items-center justify-center p-4">
      <div className="bg-slate-100 w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg p-4 sm:p-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-300 pb-3">
          <h3 className="font-semibold text-lg sm:text-xl">Book your hotel</h3>
          <AiOutlineClose
            size={22}
            className="cursor-pointer hover:text-red-500 transition"
            onClick={handleHideModal}
          />
        </div>

        {/* Hotel Info */}
        <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between">
          <h2 className="font-semibold text-base sm:text-lg">
            Arabian Paradise
          </h2>
          <span className="text-slate-800 text-base sm:text-lg">
            {format(325.5, { locale: "en-US" })}
          </span>
        </div>

        {/* Date Picker */}
        <form className="flex flex-col gap-3">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={({ selection }) => {
              setDateRange([selection.startDate, selection.endDate]);
            }}
          />
        </form>

        {/* Price Calculation */}
        <div className="mt-3 border-t border-slate-300 pt-3 flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-slate-700 flex items-center gap-2 text-base sm:text-lg">
            <span>{format(300, { locale: "en-US" })}</span>
            <span>X</span>
            <span>{calcDaysDiff()}</span>
          </div>
          <div className="text-slate-700 mt-2 sm:mt-0 text-base sm:text-lg">
            Total Price: {format(300 * calcDaysDiff(), { locale: "en-US" })}
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full flex items-center mt-4">
          <button className="w-full sm:w-3/4 mx-auto cursor-pointer rounded-lg py-2 px-5 text-base sm:text-lg text-white bg-blue-500 transition hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
