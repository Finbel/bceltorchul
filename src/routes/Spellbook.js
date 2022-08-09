import React from "react";
import { character } from "../character";
import { Link } from "react-router-dom";

const Spellbook = () => {
  const cantrips = character.character_class.cantrips_known;
  const spells = character.character_class.spells_in_spellbook;
  const spell_levels = [1, 2];
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
                  Cantrips known
                </h2>
              </div>
            </td>
          </tr>
          {cantrips
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name }) => (
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
              </tr>
            ))}
          {spell_levels.map((level) => (
            <>
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
                      Level {level} spells
                    </h2>
                  </div>
                </td>
              </tr>
              {spells
                .filter((spell) => spell.level === level)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(({ name }) => (
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
                  </tr>
                ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spellbook;
