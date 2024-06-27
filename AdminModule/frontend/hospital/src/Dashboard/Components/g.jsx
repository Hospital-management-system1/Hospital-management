import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Room() {
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUpdateOpen = (room) => {
    setUpdateRoomId(room.room_id);
    setUpdateRoomName(room.room_name);
    setUpdateOpen(true);
  };
  const handleUpdateClose = () => setUpdateOpen(false);
  const [data, setData] = useState([]);
  
  const [room_id, setRoomId] = useState("");
  const [room_name, setRoomName] = useState("");

  const [updateRoomId, setUpdateRoomId] = useState("");
  const [updateRoomName, setUpdateRoomName] = useState("");

  function updateRoom(room_id) {
    const data = { room_name: updateRoomName };
    fetch(`http://localhost:5999/updateRoom/${room_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        getData();
        handleUpdateClose();
      })
      .catch((error) => {
        console.error("Error Editing data", error);
      });
  }

  function getData() {
    fetch("http://localhost:5999/getRoom").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  useEffect(() => {
    getData();
  }, []);

  function saveRoom() {
    let data = { room_id, room_name };
    fetch("http://localhost:5999/addRoom", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        setRoomId("");
        setRoomName("");
        getData();
      })
      .catch((error) => {
        console.error("Error in adding room", error);
      });
  }

  function savNclose() {
    saveRoom();
    handleClose();
  }

  return (
    <TableContainer component={Paper}>
      <div>
        <Button sx={{ margin: "10px", borderRadius: '10px', backgroundColor: '#f2f2f2', color: 'black' }} onClick={handleOpen}>
          Add Room
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Typography sx={{ fontSize: "20px", fontWeight: "20px" }}>
                Create New Room
              </Typography>
              <Grid item>
                <TextField
                  style={{ width: "100%" }}
                  label="Room Id"
                  variant="outlined"
                  type="text"
                  value={room_id}
                  onChange={(e) => setRoomId(e.target.value)}
                  name="room_id"
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ width: "100%" }}
                  type="text"
                  value={room_name}
                  onChange={(e) => setRoomName(e.target.value)}
                  name="room_name"
                  label="Room Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Button
                  type="button"
                  onClick={savNclose}
                  variant="contained"
                  color="success"
                  sx={{ width: "100%", padding: "10px" }}
                >
                  DONE
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>

        <Modal
          open={updateOpen}
          onClose={handleUpdateClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Typography sx={{ fontSize: "20px", fontWeight: "20px" }}>
                Update Room
              </Typography>
              <Grid item>
                <TextField
                  style={{ width: "100%" }}
                  label="Room Name"
                  variant="outlined"
                  type="text"
                  value={updateRoomName}
                  onChange={(e) => setUpdateRoomName(e.target.value)}
                  name="room_name"
                />
              </Grid>
              <Grid item>
                <Button
                  type="button"
                  onClick={() => updateRoom(updateRoomId)}
                  variant="contained"
                  color="success"
                  sx={{ width: "100%", padding: "10px" }}
                >
                  UPDATE
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>

      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Room Id</StyledTableCell>
            <StyledTableCell>Room Name</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((room) => (
            <StyledTableRow key={room.room_id}>
              <StyledTableCell>{room.room_id}</StyledTableCell>
              <StyledTableCell>{room.room_name}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  sx={{ margin: "10px", borderRadius: '10px', backgroundColor: '#f2f2f2', color: 'black' }}
                  onClick={() => handleUpdateOpen(room)}
                >
                  Update
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
