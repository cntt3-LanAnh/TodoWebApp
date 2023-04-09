export interface Tasks {
  id: string;
  text: string;
  checked: boolean;
}

export interface Cards {
  id: string;
  name: string;
  createdAt: string;
  description: string;
  tasks: Tasks[];
  progress: number;
}

export interface Boards {
  id: number;
  title: string;
  cards: Cards[];
}
