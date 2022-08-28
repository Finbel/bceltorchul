import React from "react";
import { skills, abilities } from "../data";
import { character } from "../character";
import List from "../components/List/List";

const Skills = () => {
  const list = abilities
    .filter((ability) => ability.ability !== "con")
    .map((ability) => ({
      title: ability.name,
      items: skills
        .filter((skill) => skill.ability === ability.ability)
        .sort((a, b) => {
          const aIncluded = character.proficiencies.includes(a.name) ? 1 : -1;
          const bIncluded = character.proficiencies.includes(b.name) ? 1 : -1;
          return bIncluded - aIncluded;
        })
        .map(({ name, ability }) => ({
          prefix: character.proficiencies.includes(name) ? (
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
          ),
          text: name,
          href: `/skill/${encodeURIComponent(name)}`,
          sufix:
            character.modifiers[ability] +
            (character.proficiencies.includes(name)
              ? character.proficiency_bonus
              : 0),
        })),
    }));

  return (
    <div style={{ paddingLeft: 16 }}>
      <List list={list} />
    </div>
  );
};

export default Skills;
