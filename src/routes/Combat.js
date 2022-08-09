import React from "react";
import StatBox from "../components/StatBox";
import { character } from "../character";
import useLocalStorage from "../utils/useLocalStorage";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

const Combat = () => {
  const [modalContent, setModalContent] = React.useState(null);
  const [currentDamage, setCurrentDamage] = useLocalStorage("currentDamage", 0);
  const [temporaryHP, setTemporaryHP] = useLocalStorage("temporaryHP", 0);

  const takeDamage = (damage) => {
    setCurrentDamage(Number(currentDamage) + Number(damage));
  };

  const heal = (heal) => {
    setCurrentDamage(Math.max(Number(currentDamage) - Number(heal), 0));
  };

  const gainTemporaryHitpoints = (hitpoints) => {
    setTemporaryHP(Number(temporaryHP) + Number(hitpoints));
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 8 }}>
        <StatBox stat={character.ac} name={"AC"} />
        <StatBox stat={character.initiative} name={"Initiative"} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginBottom: 12,
          marginTop: 4,
        }}
      >
        <button
          onClick={() => {
            setModalContent({
              text: "Take damage",
              action: takeDamage,
              value: 1,
            });
          }}
          style={{
            backgroundColor: "rgb(234, 225, 196)",
            border: "1px solid #451209",
            color: "#451209",
            borderRadius: 7,
          }}
        >
          Take damage
        </button>
        <button
          onClick={() => {
            setModalContent({
              text: "Heal damage",
              action: heal,
              value: 1,
            });
          }}
          style={{
            backgroundColor: "rgb(234, 225, 196)",
            border: "1px solid #451209",
            color: "#451209",
            borderRadius: 7,
          }}
        >
          Heal
        </button>
        <button
          onClick={() => {
            setModalContent({
              text: "Gain temporary hitpoints",
              action: gainTemporaryHitpoints,
              value: 1,
            });
          }}
          style={{
            backgroundColor: "rgb(234, 225, 196)",
            border: "1px solid #451209",
            color: "#451209",
            borderRadius: 7,
          }}
        >
          Gain temporary hp
        </button>
      </div>
      <div>Total hit points</div>
      <StatBox stat={character.character_class.hit_points} />
      <div>Current damage</div>
      <StatBox stat={currentDamage} />
      <div>Temporary hit points</div>
      <StatBox stat={temporaryHP} />
      <div>Current hit points</div>
      <StatBox
        stat={
          character.character_class.hit_points - currentDamage + temporaryHP
        }
      />
      {modalContent && (
        <Modal
          open={!!modalContent}
          onClose={() => setModalContent(null)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 130,
              height: 100,
              bgcolor: "background.paper",
              backgroundColor: "rgb(234, 225, 196)",
              borderRadius: "7px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            {modalContent.text}
            <input
              type="number"
              style={{
                backgroundColor: "rgb(234, 225, 196)",
                border: "none",
                textAlign: "center",
                fontFamily: "Tiro Gurmukhi",
                fontSize: "1.7em",
                width: "40px",
                borderBottom: "1px solid #451209",
                color: "#54302a",
              }}
              value={modalContent.value}
              onChange={(e) =>
                setModalContent({ ...modalContent, value: e.target.value })
              }
            />
            <button
              onClick={() => {
                modalContent.action(Number(modalContent.value));
              }}
              style={{
                backgroundColor: "rgb(234, 225, 196)",
                border: "1px solid #451209",
                color: "#451209",
                borderRadius: 7,
              }}
            >
              OK
            </button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Combat;
