import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import BoardSectionList from "../components/Kanban/BoardSectionList";

export const Dashboard = () => {
  const params = useParams();
  return (
    <div>
      <Typography variant="h2">{params.id}</Typography>

      <BoardSectionList />
    </div>
  );
};
