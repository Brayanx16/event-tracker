import React from "react";
import style from "./Calendario.module.scss";
import ptBR from "./localizacao/ptBR.json";
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from "kalend";
import "kalend/dist/styles/index.css";
import useUpdateEvent from "../../state/hooks/useUpdateEvent";
import useListEvent from "../../state/hooks/useListEvent";

interface IKalendEvento {
  id?: number;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

const Calendario: React.FC = () => {
  const listEvents = useListEvent();
  const updateEvent = useUpdateEvent();

  const eventosKalend = new Map<string, IKalendEvento[]>();

  listEvents.forEach((event) => {
    const chave = event.inicio.toISOString().slice(0, 10);
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, []);
    }
    eventosKalend.get(chave)?.push({
      id: event.id,
      startAt: event.inicio.toISOString(),
      endAt: event.fim.toISOString(),
      summary: event.descricao,
      color: "blue",
    });
  });

  const onEventDragFinish: OnEventDragFinish = (
    KalendPrevEvent: CalendarEvent,
    KalendUpdatedEvent: CalendarEvent
  ) => {
    const event = listEvents.find(
      (item) => item.descricao === KalendUpdatedEvent.summary
    );
    if (event) {
      const eventUpdated = { ...event };

      eventUpdated.inicio = new Date(KalendUpdatedEvent.startAt);
      eventUpdated.fim = new Date(KalendUpdatedEvent.endAt);

      updateEvent(eventUpdated);
    }
  };

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"customLanguage"}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
};

export default Calendario;
