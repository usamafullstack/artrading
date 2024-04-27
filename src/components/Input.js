import React from "react";
const Input = ({ value, className, setter, type, placeholder }) => {
  return (
    <div className="my-3">
      <input
        type={type}
        className={`h-10 w-10/12 bg-transparent text-white text-lg border-white border-x-[1px] border-y-[1px] px-4 my-2 ${className}`}
        id={value}
        placeholder={placeholder}
        value={value}
        onChange={setter}
      />
    </div>
  );
};

export { Input };
