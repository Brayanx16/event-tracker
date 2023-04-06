import { IEvento } from "../../interfaces/IEvento";
import { useSetRecoilState } from "recoil";
import { listEventsState } from "../atom";

const useUpdateEvent = () => {
  const setListEvents = useSetRecoilState<IEvento[]>(listEventsState);
  return (event: IEvento) => {
    return setListEvents((oldList) => {
      const index = oldList.findIndex((item) => item.id === event.id);
      return [...oldList.slice(0, index), event, ...oldList.slice(index + 1)];
    });
  };
};

export default useUpdateEvent;
