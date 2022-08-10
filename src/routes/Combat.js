import React from "react";
import StatBox from "../components/StatBox";
import { character } from "../character";
import { v4 as uuid } from "uuid";
import useLocalStorage from "../utils/useLocalStorage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Modal,
} from "@mui/material";
import { Box } from "@mui/system";
import ReactMarkdown from "react-markdown";

const Combat = () => {
  const [modalContent, setModalContent] = React.useState(null);
  const [currentDamage, setCurrentDamage] = useLocalStorage("currentDamage", 0);
  const [temporaryHP, setTemporaryHP] = useLocalStorage("temporaryHP", 0);
  const [history, setHistory] = useLocalStorage("combatHistory", []);

  const takeDamage = (damage) => {
    setCurrentDamage(Number(currentDamage) + Number(damage));
    setHistory([
      { text: `You took ${damage} damage.`, id: uuid() },
      ...history,
    ]);
  };

  const heal = (heal) => {
    setCurrentDamage(Math.max(Number(currentDamage) - Number(heal), 0));
    setHistory([
      { text: `You were healed ${heal} hp.`, id: uuid() },
      ...history,
    ]);
  };

  const changeTemporaryHitpoints = (hitpoints) => {
    setTemporaryHP(Number(hitpoints));
    setHistory([
      {
        text: `Your temporary hitpoints were changed to ${hitpoints}.`,
        id: uuid(),
      },
      ...history,
    ]);
  };

  return (
    <div style={{ padding: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StatBox stat={character.ac} name={"AC"} />
        <StatBox stat={character.initiative} name={"Initiative"} />
      </div>
      <div style={{ marginTop: 8, marginBottom: 26 }}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: "24px" }}>Hit Points</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <StatBox stat={character.character_class.hit_points} name="Total" />
            <div
              style={{
                fontSize: 32,
                position: "relative",
                top: -8,
              }}
            >
              +
            </div>
            <StatBox
              stat={temporaryHP}
              name="Temporary"
              onClick={() => {
                setModalContent({
                  text: "Change temporary hit points",
                  action: changeTemporaryHitpoints,
                  value: temporaryHP,
                });
              }}
            />
            <div
              style={{
                fontSize: 32,
                position: "relative",
                top: -8,
              }}
            >
              -
            </div>
            <StatBox
              stat={currentDamage}
              name="Damage"
              onClick={() => {
                setModalContent({
                  text: "Take damage",
                  action: takeDamage,
                  value: 1,
                });
              }}
            />
            <div
              style={{
                fontSize: 32,
                position: "relative",
                top: -8,
              }}
            >
              =
            </div>
            <StatBox
              name="Current"
              stat={
                character.character_class.hit_points -
                currentDamage +
                temporaryHP
              }
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 12,
            marginTop: 4,
          }}
        >
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
                text: "History",
                action: null,
                value: null,
              });
            }}
            style={{
              backgroundColor: "rgb(234, 225, 196)",
              border: "1px solid #451209",
              color: "#451209",
              borderRadius: 7,
            }}
          >
            View history
          </button>
        </div>
      </div>
      <div style={{ fontSize: "24px" }}>Combat spells</div>
      <div
        style={{
          marginLeft: "-18.72px",
          marginRight: "-18.72px",
        }}
      >
        {character.combat_options.map((option) => (
          <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                paddingLeft: "18.72px",
              }}
            >
              {option.name}
            </AccordionSummary>
            <AccordionDetails sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <ReactMarkdown>{option.combat_text}</ReactMarkdown>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
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
              width: 250,
              height: modalContent.text !== "History" ? 100 : 250,
              bgcolor: "background.paper",
              textAlign: "center",
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
            <div style={{ fontSize: "1.2em" }}>{modalContent.text}</div>
            {modalContent.text !== "History" ? (
              <>
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
                    setModalContent(null);
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
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 10,
                    width: "100%",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    textAlign: "left",
                    height: 200,
                    maxHeight: 200,
                    overflow: "scroll",
                    borderBottom: "1px solid #451209",
                  }}
                >
                  {history.map((item, index) => (
                    <div style={{ fontSize: "0.95em" }} key={item.id}>
                      {item.text}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setHistory([]);
                  }}
                  style={{
                    backgroundColor: "rgb(234, 225, 196)",
                    border: "1px solid #451209",
                    color: "#451209",
                    borderRadius: 7,
                  }}
                >
                  Clear history
                </button>
              </>
            )}
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Combat;
