const Select = ({ data, register, className }) => {
  const defaultClassName =
    "w-full sm:w-2/3 bg-white text-slate-600 rounded-md p-2 sm:p-3 text-sm sm:text-base outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500";

  return (
    <select className={className ? className : defaultClassName} {...register}>
      {data?.map((element) => (
        <option key={element.value} value={element.value}>
          {element.text ? element.text : element.city}
        </option>
      ))}
    </select>
  );
};

export default Select;
