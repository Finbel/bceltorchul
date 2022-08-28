import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useLocalStorage from "../utils/useLocalStorage";

const Notes = () => {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [modalContent, setModalContent] = React.useState(null);

  return (
    <div style={{ paddingLeft: 16 }}>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 2px",
        }}
      >
        <tbody>
          {notes.map((note) => (
            <tr>
              <td>
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    backgroundColor: "#210905",
                    borderRadius: "100%",
                    marginRight: "8px",
                  }}
                />
              </td>
              <td>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{ fontSize: 20 }}
        onClick={() => setModalContent({ value: "" })}
      >
        Add note +
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
              height: 100,
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
            <>
              <textarea
                style={{
                  backgroundColor: "rgb(234, 225, 196)",
                  textAlign: "center",
                  fontFamily: "Tiro Gurmukhi",
                  width: "100%",
                  height: "120px",
                  border: "1px solid #451209",
                  borderRadius: "7px",
                  color: "#54302a",
                }}
                value={modalContent.value}
                onChange={(e) =>
                  setModalContent({ ...modalContent, value: e.target.value })
                }
              />
              <button
                onClick={() => {
                  if (notes.includes(modalContent.value)) {
                    setNotes([
                      ...notes.filter((note) => note !== modalContent.value),
                      modalContent.value,
                    ]);
                  } else {
                    setNotes([...notes, modalContent.value]);
                  }
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
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Notes;
