import { InputJsonValue } from "../../types";
import { TasksWhereUniqueInput } from "../tasks/TasksWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  task?: TasksWhereUniqueInput | null;
  username?: string;
};
