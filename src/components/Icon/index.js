import React from "react";
import { Icons } from "./resolver";

const Icon = ({
  raw,
  name,
  className,
  iconClassName,
  color,
  onClick,
  disabled,
  size,
  ...rest
}) => {
  const IconSVG = Icons[name];
  return (
    <IconSVG
      className={className}
      color={color}
      size={size}
    />
  );
};

export { Icon };
