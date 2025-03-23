import { forwardRef } from "react";

const Input = forwardRef(
  ({ type = "text", placeholder = "", className, id, step, ...rest }, ref) => {
    const defaultClassName =
      "w-full sm:w-2/3 bg-white text-slate-600 border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500 transition-all";

    return (
      <div>
        <input
          type={type}
          className={className || defaultClassName}
          placeholder={placeholder}
          step={step}
          id={id}
          ref={ref} // Attach the forwarded ref
          {...rest} // Spread other props
        />
      </div>
    );
  }
);

// ✅ Add a display name to avoid ESLint warning
Input.displayName = "Input";

export default Input;
