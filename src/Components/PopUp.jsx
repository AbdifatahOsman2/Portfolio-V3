import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import resume from "../Assets/0001.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="pop-up">
      <Button color="inherit" onClick={handleClickOpen}>
        Resume
      </Button>
      <Dialog
      fullScreen
      id="Dialog"
        open={open}
        onClose={handleClose}
        aria-labelledby="resume"
      >
        <DialogActions>
          <Button style={{ color: "black" }} onClick={handleClose} autoFocus>
            <CloseIcon />
          </Button>
        </DialogActions>
            <img src={resume} id="resume-img" />
      </Dialog>
    </div>
  );
}
