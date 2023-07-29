import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TasksWhereInput = {
  id?: StringFilter;
  user_id?: UserWhereUniqueInput;
};
