import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  gap: 4,
  alignItems: "center",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#45607c",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Modal open={open} onClose={() => handleClose()}>
        <Box sx={style}>
          <Box
            className="w-40 h-40 bg-primary text-white font-bold text-lg shadow-xl shadow-primary rounded-2xl flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/fooditems")}
          >
            Food Items
          </Box>
          <Box
            className="w-40 h-40 bg-primary text-white font-bold text-lg shadow-xl shadow-primary rounded-2xl flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/nonfooditems")}
          >
            Non-Food Items
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export { BasicModal };
