import NotifyData from "../../interface/notifyTypes";
import { genId, usedIds } from "../../utils/genId";

type NotifyActions =
  | { type: "ADD"; payload: NotifyData }
  | { type: "REMOVE"; payload: number }
  | { type: "CLEAR" }
  | { type: "REMOVE_EXPIRED" };

export function createInitialState(): NotifyData[] {
  usedIds.clear();
  return [];
}

export function notifyReducer(
  state: NotifyData[],
  action: NotifyActions
): NotifyData[] {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "REMOVE":
      usedIds.delete(action.payload);
      return state.filter((notify) => notify.id !== action.payload);

    case "CLEAR":
      usedIds.clear();
      return [];

    default:
      return state;
  }
}

export const notifyActions = {
  add: (data: NotifyData): NotifyActions => ({
    type: "ADD",
    payload: { ...data },
  }),

  remove: (id: number): NotifyActions => ({
    type: "REMOVE",
    payload: id,
  }),

  clear: (): NotifyActions => ({ type: "CLEAR" }),
};
