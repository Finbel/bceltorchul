import React from "react";
import { character } from "../character";

const Equipment = () => {
  return (
    <div style={{ paddingLeft: 16 }}>
      <div>Gold: {character.starting_gold} gp</div>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 2px",
        }}
      >
        <tbody>
          {character.starting_equipment
            .sort((a, b) => a.localeCompare(b))
            .map((name) => (
              <tr>
                <td>
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      backgroundColor: "#210905",
                      borderRadius: "100%",
                      marginRight: "8px",
                    }}
                  />
                </td>
                <td>{name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Equipment;
