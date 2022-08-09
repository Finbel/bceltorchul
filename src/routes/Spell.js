import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { character } from "../character";

const getComponentsString = (componentList) => {
  return componentList
    .map((component) => {
      if (component === "V") {
        return "Verbal";
      }
      if (component === "S") {
        return "Somatic";
      }
      if (component.startsWith("M")) {
        return `Material: ${component.substring(1)}`;
      }
      return "";
    })
    .join(", ");
};

const Spell = () => {
  const spells = [
    ...character.character_class.cantrips_known,
    ...character.character_class.spells_in_spellbook,
  ];
  const { spell_name } = useParams();
  const spell = spells.find((spell) => spell.name === spell_name);
  console.log(spell);
  return (
    <div style={{ paddingBottom: 12 }}>
      <div>
        <table>
          <tbody>
            <tr>
              <td width="100">
                <span style={{ fontWeight: 800 }}>Casting time:</span>
              </td>
              <td>{spell.casting_time}</td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: 800 }}>Range:</span>
              </td>
              <td>{spell.range} feet</td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "baseline" }}>
                <span style={{ fontWeight: 800 }}>Components:</span>
              </td>
              <td>{getComponentsString(spell.components)}</td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: 800 }}>Duration:</span>
              </td>
              <td>{spell.duration}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ReactMarkdown>{spell.description}</ReactMarkdown>
    </div>
  );
};

export default Spell;
