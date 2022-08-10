import React from "react";
import { skills, abilities } from "../data";
import { character } from "../character";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div style={{ paddingLeft: 16 }}>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 2px",
        }}
      >
        <tbody>
          {abilities
            .filter((ability) => ability.ability !== "con")
            .map((ability) => (
              <>
                <tr>
                  <td colSpan={3}>
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
                        {ability.name}
                      </h2>
                    </div>
                  </td>
                </tr>

                {skills
                  .filter((skill) => skill.ability === ability.ability)
                  .sort((a, b) => {
                    const aIncluded = character.proficiencies.includes(a.name)
                      ? 1
                      : -1;
                    const bIncluded = character.proficiencies.includes(b.name)
                      ? 1
                      : -1;
                    return bIncluded - aIncluded;
                  })
                  .map(({ name, ability }) => (
                    <tr>
                      <td>
                        {character.proficiencies.includes(name) ? (
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#210905",
                              border: "1px solid #210905",
                              borderRadius: "100%",
                              marginRight: "8px",
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              border: "1px solid #210905",
                              borderRadius: "100%",
                              marginRight: "8px",
                            }}
                          />
                        )}
                      </td>
                      <td>
                        <Link
                          to={`/skill/${encodeURIComponent(name)}`}
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
                        {character.modifiers[ability] +
                          (character.proficiencies.includes(name)
                            ? character.proficiency_bonus
                            : 0)}
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

export default Skills;
