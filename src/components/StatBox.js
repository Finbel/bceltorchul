import React from "react";

const StatBox = ({ stat, name, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "46px",
        height: name ? "72px" : "52px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "6px",
          border: "1px solid #70463e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Tiro Gurmukhi",
            fontSize: "1.5em",
            position: "relative",
            top: "2px",
          }}
        >
          {stat}
        </div>
      </div>
      {name && name?.length < 5 && (
        <div
          style={{
            position: "relative",
            width: "25px",
            marginLeft: "auto",
            marginRight: "auto",
            top: "-2px",
            height: "3px",
            backgroundColor: "#EAE1C4",
          }}
        />
      )}
      {name && (
        <div
          style={{
            fontFamily: "Tiro Gurmukhi",
            fontSize: "0.9em",
            color: "#54302a",
            position: "relative",
            width: "fit-content",
            top: name?.length < 5 ? "-12px" : 0,
          }}
        >
          {name}
        </div>
      )}
    </div>
  );
};

export default StatBox;
