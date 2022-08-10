import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { skills } from "../data";

const Skill = () => {
  const { skill_name } = useParams();
  const skill = skills.find((skill) => skill.name === skill_name);
  return (
    <div style={{ paddingBottom: 12 }}>
      <ReactMarkdown>{skill.description}</ReactMarkdown>
    </div>
  );
};

export default Skill;
