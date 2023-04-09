import { Boards } from "./models/board";
import Helpers from "./utils";

const DataBoard: Boards[] = [
  {
    id: 1,
    title: "Todo",
    cards: [
      {
        id: Helpers.uuid(),
        name: "Task1",
        createdAt: "2023/04/9",
        description:
          "Drinking beer",
        tasks: [],
        progress: 30,
      },
      {
        id: Helpers.uuid(),
        name: "Task2",
        createdAt: "2023/04/9",
        description:
          "Write hello word",
        tasks: [],
        progress: 30,
      },
      {
        id: Helpers.uuid(),
        name: "Task3",
        createdAt: "2023/04/9",
        description:
          "Cooking food",
        tasks: [],
        progress: 30,
      },
    ],
  },
  {
    id: 2,
    title: "In progress",
    cards: [
      {
        id: Helpers.uuid(),
        name: "Task4",
        createdAt: "2023/04/9",
        description:
          "Cooking Meal",
        tasks: [],
        progress: 30,
      },
    ],
  },
  {
    id: 3,
    title: "Done",
    cards: [
      {
        id: Helpers.uuid(),
        name: "Task5",
        createdAt: "2023/04/9",
        description:
          "Drinking milk",
        tasks: [],
        progress: 30,
      },
    ],
  },
  {
    id: 4,
    title: "Archived",
    cards: [],
  },
];

export default DataBoard;
