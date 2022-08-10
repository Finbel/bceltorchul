import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { character } from "../character";
import useLocalStorage from "../utils/useLocalStorage";

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

  const spells = [
    ...character.character_class.cantrips_known,
    ...character.character_class.spells_in_spellbook,
  ];
  const { spell_name } = useParams();
  const spell = spells.find((spell) => spell.name === spell_name);
  const spellSlotsLeft =
    character.character_class.spell_slots[spell.level] -
    prepared_spells.filter(({ level }) => level === spell.level).length;
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
      {spell.level && (
        <div
          style={{
            marginTop: "22px",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            ...(spellSlotsLeft < 1 ? { color: "#8c6f53" } : {}),
          }}
          onClick={() =>
            spellSlotsLeft > 0 &&
            setPrepared_spells([
              ...prepared_spells,
              {
                ...spell,
                id: uuid(),
              },
            ])
          }
        >
          <span
            style={{
              fontSize: "48px",
              ...(spellSlotsLeft < 1 ? { color: "#8c6f53" } : {}),
            }}
          >
            ✍︎
          </span>
          Prepare Spell{" "}
          {`(${spellSlotsLeft} slot${spellSlotsLeft > 1 ? "s" : ""} left)`}
        </div>
      )}
    </div>
  );
};

export default Spell;
