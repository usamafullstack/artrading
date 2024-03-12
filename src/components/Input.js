import React from "react";
const Input = ({
  value,
  className,
  setter,
  type,
  placeholder,
  error,
  errorMessage,
}) => {
  return (
    <div className="my-3">
      <input
        type={type}
        className={`h-14 ${className}`}
        id={value}
        placeholder={placeholder}
        value={value}
        onChange={setter}
      />
      {error && (
        <span className="block ml-5 mt-1 text-sm text-red-600">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export { Input };
