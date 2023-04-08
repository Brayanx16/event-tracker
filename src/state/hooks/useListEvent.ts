import { IEvento } from "../../interfaces/IEvento";
import { useRecoilValue } from "recoil";
import { stateFilteredEvents } from "../selectors";

const useListEvent = () => {
  return useRecoilValue<IEvento[]>(stateFilteredEvents);
};

export default useListEvent;
