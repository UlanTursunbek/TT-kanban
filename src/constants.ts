import { Task } from "./types";

export const BOARD_SECTIONS = {
  backlog: "backlog",
  "in progress": "in progress",
  done: "done",
};

export const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Title 2",
    description: "Desc 2",
    status: "backlog",
  },
  {
    id: "2",
    title: "Title 3",
    description: "Desc 3",
    status: "backlog",
  },
  {
    id: "3",
    title: "Title 4",
    description: "Desc 4",
    status: "done",
  },
];
