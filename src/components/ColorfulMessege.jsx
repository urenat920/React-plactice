import React from "react";

export const ColorfulMessege = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    FontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
