import React from "react";
import { character } from "../character";
import { Link } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage";
import { v4 as uuid } from "uuid";

const Cross = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      border: "1px solid #451209",
      borderRadius: "50%",
      height: "16px",
      width: "16px",
      textAlign: "center",
    }}
  >
    <span style={{ position: "relative", top: -0.48, right: -0.2 }}>✕</span>
  </div>
);

const Prepared = () => {
  const [prepared_spells, setPrepared_spells] = useLocalStorage(
    "prepared_spells",
    [
      ...character.character_class.prepared_lvl_1_spells,
      ...character.character_class.prepared_lvl_2_spells,
    ].map((spell) => ({
      ...character.character_class.spells_in_spellbook.find(
        ({ name }) => spell === name
      ),
      id: uuid(),
    }))
  );
  return (
    <div style={{ paddingLeft: 16 }}>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 2px",
        }}
      >
        <tbody>
          <tr>
            <td colSpan={2}>
              <div
                style={{
                  position: "relative",
                  marginBottom: "3px",
                  marginTop: "6px",
                  right: "12px",
                }}
              >
                <h2
                  style={{
                    color: "#210905",
                    fontSize: "15px",
                  }}
                >
                  Prepared level 1 spells
                </h2>
              </div>
            </td>
          </tr>
          {prepared_spells
            .filter(({ level }) => level === 1)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name, id }) => (
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
                <td>
                  <Link
                    to={`/spellbook/${encodeURIComponent(name)}`}
                    style={{
                      marginRight: 16,
                      color: "#451209",
                      textDecoration: "none",
                    }}
                  >
                    {name}
                  </Link>
                </td>
                <td>
                  <Cross
                    onClick={() =>
                      setPrepared_spells(
                        prepared_spells.filter((spell) => spell.id !== id)
                      )
                    }
                  />
                </td>
              </tr>
            ))}

          <tr>
            <td colSpan={2}>
              <div
                style={{
                  position: "relative",
                  marginBottom: "3px",
                  marginTop: "6px",
                  right: "12px",
                }}
              >
                <h2
                  style={{
                    color: "#210905",
                    fontSize: "15px",
                  }}
                >
                  Prepared level 2 spells
                </h2>
              </div>
            </td>
          </tr>
          {prepared_spells
            .filter(({ level }) => level === 2)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name, id }) => (
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
                <td>
                  <Link
                    to={`/spellbook/${encodeURIComponent(name)}`}
                    style={{
                      marginRight: 16,
                      color: "#451209",
                      textDecoration: "none",
                    }}
                  >
                    {name}
                  </Link>
                </td>
                <td>
                  <Cross
                    onClick={() =>
                      setPrepared_spells(
                        prepared_spells.filter((spell) => spell.id !== id)
                      )
                    }
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prepared;
