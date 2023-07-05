import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <div
      className={`container p-4 mx-auto xl:px-0 sm:p-2 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;

