import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listEventsState = atom<IEvento[]>({
  key: "listEventsState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2023-04-04T09:00"),
      fim: new Date("2023-04-04T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2023-04-05T09:00"),
      fim: new Date("2023-04-05T11:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});
