import React from "react";

interface SeparatorProps {
  className?: string;
}

const Separator = ({ className }: SeparatorProps) => {
  return (
    <div className={`w-full h-[1px] bg-separator bg-opacity-50 ${className}`} />
  );
};

export default Separator;
