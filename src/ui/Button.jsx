import { ClipLoader } from "react-spinners";

const Button = ({ disabled, label, className, onClick = () => {} }) => {
  const defaultClassName =
    "w-full sm:w-2/3 bg-blue-500 text-white px-4 py-2 rounded-xl disabled:bg-blue-700 text-center text-sm sm:text-base md:text-lg";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className ? className : defaultClassName}
    >
      {disabled ? <ClipLoader size={16} color="#fff" /> : label}
    </button>
  );
};

export default Button;
