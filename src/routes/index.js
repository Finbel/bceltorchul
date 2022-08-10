import React from "react";
import { character } from "../character";
import Startpage from "./Startpage";
import Spellbook from "./Spellbook";
import Spell from "./Spell";
import Skills from "./Skills";
import Prepared from "./Prepared";
import Combat from "./Combat";
import Skill from "./Skill";

const routes = [
  {
    path: "/",
    element: <Startpage />,
    name: character.name,
  },
  {
    path: "/skills",
    element: <Skills />,
    name: "Skills",
  },
  {
    path: "/spellbook",
    element: <Spellbook />,
    name: "Spellbook",
  },
  {
    path: "/combat",
    element: <Combat />,
    name: "Combat",
  },
  {
    path: "/prepared",
    element: <Prepared />,
    name: "Prepared Spells",
  },
];

export const sub_routes = [
  {
    path: "/spellbook/:spell_name",
    element: <Spell />,
  },
  {
    path: "/skill/:skill_name",
    element: <Skill />,
  },
];

export default routes;
