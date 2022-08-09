import React from "react";
import { character } from "../character";
import Abilities from "../components/Abilities";

const Startpage = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ textAlign: "right" }}>
        <h1>
          Level {character.character_class.level} {character.race.name}{" "}
          {character.character_class.class}
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
          marginBottom: "16px",
        }}
      >
        <img
          width="250"
          src={require("./character_.png")}
          alt="character"
          style={{ borderRight: "1px solid #58180d", marginRight: "12px" }}
        />
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              right: "20px",
              width: "8px",
              height: "1px",
              backgroundColor: "#58180d",
            }}
          />
          <div>{character.height} feet</div>
          <div
            style={{
              position: "relative",
              right: "20px",
              width: "8px",
              height: "1px",
              backgroundColor: "#58180d",
            }}
          />
        </div>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td width="100">
                <span style={{ fontWeight: 800 }}>Name:</span>
              </td>
              <td>{character.name}</td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: 800 }}>Size:</span>
              </td>
              <td>{character.race.size}</td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: 800 }}>Speed:</span>
              </td>
              <td>{character.race.speed} feet</td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: 800 }}>Background:</span>
              </td>
              <td>{character.background.name}</td>
            </tr>

            <tr>
              <td style={{ verticalAlign: "baseline" }}>
                <span style={{ fontWeight: 800 }}>Languages:</span>
              </td>
              <td>{character.languages.join(", ")}</td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: 800 }}>Alignment:</span>
              </td>
              <td>{character.alignment}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Abilities />
    </div>
  );
};

export default Startpage;
