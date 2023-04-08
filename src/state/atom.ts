import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IEventFilter } from "../interfaces/IEventFilter";
import { asyncEvents } from "./selectors";

export const listEventsState = atom<IEvento[]>({
  key: "listEventsState",
  default: asyncEvents,
});

export const eventFilter = atom<IEventFilter>({
  key: "eventFilter",
  default: {},
});
