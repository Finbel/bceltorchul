import React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ close, to, children }) => {
  return (
    <div
      style={{
        padding: "5px 12px",
        margin: "2px 10px",
        borderBottom: "1px solid #c7a48f",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "#F0EDD3",
          fontFamily: "Tiro Gurmukhi",
          fontSize: "1.2em",
        }}
        to={to}
        onClick={close}
      >
        {children}
      </Link>
    </div>
  );
};

export default MenuLink;
