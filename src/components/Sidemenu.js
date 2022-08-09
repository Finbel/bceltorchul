import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuLink from "./MenuLink";
import routes from "../routes";

const Sidemenu = ({ close }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        minWidth: "300px",
        backgroundColor: "#210905",
        paddingTop: "42px",
      }}
    >
      <CloseIcon
        onClick={close}
        sx={{
          color: "#F0EDD3 !important",
          position: "absolute",
          fontSize: "2em",
          right: "5px",
          top: "5px",
        }}
      />
      {routes.map((route) => (
        <MenuLink to={route.path} close={close}>
          {route.name}
        </MenuLink>
      ))}
    </div>
  );
};

export default Sidemenu;
