import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TasksCreateInput = {
  user_id?: UserWhereUniqueInput | null;
};
