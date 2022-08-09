import React from "react";
import { character } from "../character";
import StatBox from "./StatBox";

const Abilities = () => {
  const [showModifiers, setShowModifiers] = React.useState(false);

  const stats = Object.entries(character.attributes).map(([key, value]) => ({
    stat: value,
    name: key,
  }));
  const modifiers = Object.entries(character.modifiers).map(([key, value]) => ({
    stat: value,
    name: key,
  }));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 12,
      }}
      onMouseEnter={() => setShowModifiers(true)}
      onMouseLeave={() => setShowModifiers(false)}
      onClick={() => setShowModifiers(!showModifiers)}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {(showModifiers ? modifiers : stats).map(({ stat, name }) => (
          <StatBox stat={stat} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Abilities;
