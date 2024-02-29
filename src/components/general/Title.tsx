import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h3 className=" font-bold text-lg">{children}</h3>;
};

export default Title;
