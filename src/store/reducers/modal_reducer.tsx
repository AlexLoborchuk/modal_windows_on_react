import { InferActionType } from "../store";

let initialValues = {
  modal1: false,
  modal2: false,
  modal3: false,
};
export type initialStateType = typeof initialValues;

type ActionType = InferActionType<typeof modal_window>;
export const ModalWindow = (
  state = initialValues,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "MODAL_WINDOW/OPEN_CLOSE_MODAL1":
      return { ...state, modal1: action.modal_state };
    case "MODAL_WINDOW/OPEN_CLOSE_MODAL2":
      return { ...state, modal2: action.modal_state2 };
    case "MODAL_WINDOW/OPEN_CLOSE_MODAL3":
      return { ...state, modal3: action.modal_state3 };
    default:
      return { ...state };
  }
};

export const modal_window = {
  OpenCloseModal1: (modal_state: boolean) =>
    ({
      type: "MODAL_WINDOW/OPEN_CLOSE_MODAL1",
      modal_state: modal_state,
    } as const),
  OpenCloseModal2: (modal_state2: boolean) =>
    ({
      type: "MODAL_WINDOW/OPEN_CLOSE_MODAL2",
      modal_state2: modal_state2,
    } as const),
  OpenCloseModal3: (modal_state3: boolean) =>
    ({
      type: "MODAL_WINDOW/OPEN_CLOSE_MODAL3",
      modal_state3: modal_state3,
    } as const),
};
