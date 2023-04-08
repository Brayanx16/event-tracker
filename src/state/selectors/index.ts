import { selector } from "recoil";
import { eventFilter, listEventsState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export const stateFilteredEvents = selector({
  key: "stateFilteredEvents",
  get: ({ get }) => {
    const filter = get(eventFilter);
    const listEvents = get(listEventsState);
    const events = listEvents.filter((item) => {
      if (!filter.date) return true;
      const handleFilter =
        filter.date.toISOString().slice(0, 10) ===
        item.inicio.toISOString().slice(0, 10);

      return handleFilter;
    });

    return events;
  },
});

export const asyncEvents = selector({
  key: "asyncEvents",
  get: async () => {
    const res = await fetch("http://localhost:8080/events");
    const eventsJson: IEvento[] = await res.json();

    return eventsJson.map((item) => ({
      ...item,
      inicio: new Date(item.inicio),
      fim: new Date(item.fim),
    }));
  },
});
