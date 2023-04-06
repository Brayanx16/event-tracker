import { IEvento } from "../../interfaces/IEvento";
import { useSetRecoilState } from "recoil";
import { listEventsState } from "../atom";
import { getId } from "../../utils";

const useAddEvent = () => {
  const setListEvents = useSetRecoilState<IEvento[]>(listEventsState);
  const errorMsg =
    "Evento não podem ser cadastrados com data menor do que a atual.";

  return (event: IEvento) => {
    const today = new Date();
    if (event.inicio < today) {
      throw new Error(errorMsg);
    }
    event.id = getId();
    return setListEvents((oldList) => [...oldList, event]);
  };
};

export default useAddEvent;
