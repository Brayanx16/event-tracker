import style from "./ListaDeEventos.module.scss";
import Filtro from "../Filtro";
import Evento from "../Evento";
import React from "react";
import useListEvent from "../../state/hooks/useListEvent";

const ListaDeEventos: React.FC<{}> = () => {
  const listEvents = useListEvent();

  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {listEvents.map((event) => (
          <Evento evento={event} key={event.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
