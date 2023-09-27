import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState<string>("");
  const [projects, setProjects] = useState<string[]>([]);

  const handleClose = () => {
    setIsModalOpen((prev) => !prev);
    setProject("");
  };

  const handleSave = () => {
    setProjects((prev) => [...prev, project]);
    handleClose();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProject(event.target.value);
  };

  return (
    <>
      <Typography variant="h2" padding={2}>
        Выберите проект
      </Typography>

      <Divider />

      <List>
        {projects.map((it) => {
          return (
            <ListItem key={it}>
              <Link to={`/${it}`}>{it}</Link>
            </ListItem>
          );
        })}

        <ListItem>
          <Button variant="contained" onClick={handleClose} size="small">
            Добавить проект +
          </Button>
        </ListItem>
      </List>

      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={content}>
          <TextField value={project} onChange={handleChange} />

          <Box sx={buttons}>
            <Button variant="contained" color="error" onClick={handleClose}>
              Отмена
            </Button>

            <Button onClick={handleSave}>Сохранить</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const content = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const buttons = {
  display: "flex",
  gap: "16px",
  justifyContent: "end",
};
