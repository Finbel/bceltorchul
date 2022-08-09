import React from "react";
import Startpage from "./Startpage";
import Spellbook from "./Spellbook";
import Spell from "./Spell";
import Skills from "./Skills";
import { character } from "../character";
import Combat from "./Combat";

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
];

export const sub_routes = [
  {
    path: "/spellbook/:spell_name",
    element: <Spell />,
  },
];

export default routes;
