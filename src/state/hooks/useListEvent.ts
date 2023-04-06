import { IEvento } from "../../interfaces/IEvento";
import { useRecoilValue } from "recoil";
import { listEventsState } from "../atom";

const useListEvent = () => {
  return useRecoilValue<IEvento[]>(listEventsState);
};

export default useListEvent;
