// src/components/Flex.tsx
import React from "react";

interface FlexProps {
  children: React.ReactNode;
  direction?: "row" | "col";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  className?: string;
  gap?: number;
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction = "row",
  justify = "start",
  align = "stretch",
  className = "",
}) => {
  const baseClasses = `flex flex-${direction}`;
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };
  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  return (
    <div
      className={`${baseClasses} ${justifyClasses[justify]} ${alignClasses[align]} ${className} `}
    >
      {children}
    </div>
  );
};

export default Flex;
