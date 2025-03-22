const Input = ({
  type = "text",
  placeholder = "",
  register,
  className,
  id,
  step,
}) => {
  const defaultClassName =
    "w-full sm:w-2/3 bg-white text-slate-600 border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500 transition-all";

  return (
    <div>
      <input
        type={type}
        className={className ? className : defaultClassName}
        placeholder={placeholder}
        step={step}
        id={id}
        {...register}
      />
    </div>
  );
};

export default Input;
