import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLocation, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Sidemenu from "../components/Sidemenu";
import routes from "../routes";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mainRoute = routes.find(
    (route) => route.path === location.pathname
  )?.name;
  const heading =
    mainRoute || decodeURIComponent(location.pathname.split("/")[2]);
  return (
    <header
      style={{
        backgroundColor: "#210905",
        position: "absolute",
        top: 0,
        left: 0,
        minWidth: "100vw",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {mainRoute ? (
        <MenuIcon
          onClick={() => setOpen(true)}
          sx={{
            color: "#F0EDD3",
            fontSize: "2em",
            marginLeft: "5px",
          }}
        />
      ) : (
        <ArrowBackIosIcon
          onClick={() => navigate(-1)}
          sx={{
            color: "#F0EDD3",
            fontSize: "1.4em",
            marginLeft: "15px",
          }}
        />
      )}
      <div style={{ textAlign: "right", marginRight: "9px" }}>
        <h2 style={{ letterSpacing: "0.5px", fontWeight: 500 }}>{heading}</h2>
      </div>
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <Sidemenu close={() => setOpen(false)} />
      </Drawer>
    </header>
  );
};

export default Header;
