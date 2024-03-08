import { UserType } from "./User";

export interface ErrorType {
  response: {
    data: {
      message: string;
    };
  };
}
export interface ResponseTypeAuth {
  data: UserType;
  message: string;
}
