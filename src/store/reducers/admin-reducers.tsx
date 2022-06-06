import { AdminDataType } from "../../types/types";
import { InferActionType } from "../store";

let initialState = {
  users: [] as AdminDataType[],
  // userId: null as null | string,
  // company: null as null | string,
  // name: null as null | string,
  // addinional: null as null | string,
  // street: null as null | string,
  // postal_code: null as null | string,
  // country: null as null | string,
  // iban: null as null | string,
  // bic: null as null | string,
  // bank_name: null as null | string,
  // fax: null as null | string,
  // email: null as null | string,
  // birthday: null as null | string,
  // homepage: null as null | string,
};

export type initialStateType = typeof initialState;

let initialValues = {
  users: [
    {
      userId: "d4056d0-610d-f3-1a2-4ba8d487e46b",
      company: "Company",
      name: "Alex",
      addinional: "Additional",
      street: "Street",
      postal_code: "Postal Code",
      country: "Country",
      iban: "IBAN",
      bic: "BIC",
      bank_name: "Bank name",
      fax: "Fax",
      email: "loborchukolexsandr@gmail.com",
      birthday: "Birthday",
      homepage: "homepage",
    },
    {
      userId: "d4056d0-610d-f3-1a2-4ba8d487e432b",
      company: "Company",
      name: "Name",
      addinional: "Additional",
      street: "Street",
      postal_code: "Postal Code",
      country: "Country",
      iban: "IBAN",
      bic: "BIC",
      bank_name: "Bank name",
      fax: "Fax",
      email: "E-mail",
      birthday: "Birthday",
      homepage: "homepage",
    },
  ],
} as initialStateType;

type ActionType = InferActionType<typeof admin_action>;

export const AdminReducer = (
  state = initialValues,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "ADMIN/DELETE_USER":
      return {
        ...state,
        users: state.users.filter(
          (user: AdminDataType) => user.userId !== action.userId
        ),
      };
    case "ADMIN/ADD_NEW_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    default:
      return { ...state };
  }
};

export const admin_action = {
  DeleteUser: (userId: null | string) =>
    ({
      type: "ADMIN/DELETE_USER",
      userId: userId,
    } as const),
  AddNewUser: (user: AdminDataType) =>
    ({
      type: "ADMIN/ADD_NEW_USER",
      user: user,
    } as const),
};
