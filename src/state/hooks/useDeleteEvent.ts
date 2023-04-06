import { IEvento } from "../../interfaces/IEvento";
import { useSetRecoilState } from "recoil";
import { listEventsState } from "../atom";

const useDeleteEvent = () => {
  const setListEvents = useSetRecoilState<IEvento[]>(listEventsState);

  return (event: IEvento) => {
    setListEvents((oldList) => [
      ...oldList.filter((item) => item.id !== event.id),
    ]);
  };
};

export default useDeleteEvent;
