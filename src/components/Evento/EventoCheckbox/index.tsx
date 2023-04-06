import React from "react";
import { IEvento } from "../../../interfaces/IEvento";
import useUpdateEvent from "../../../state/hooks/useUpdateEvent";

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const updateEvent = useUpdateEvent();
  const estilos = [
    "far",
    "fa-2x",
    evento.completo ? "fa-check-square" : "fa-square",
  ];

  const changeStatus = () => {
    const changeEvent = { ...evento };
    changeEvent.completo = !changeEvent.completo;

    updateEvent(changeEvent);
  };

  return <i className={estilos.join(" ")} onClick={changeStatus}></i>;
};

export default EventoCheckbox;
