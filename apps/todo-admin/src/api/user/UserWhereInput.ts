import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TasksWhereUniqueInput } from "../tasks/TasksWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  task?: TasksWhereUniqueInput;
  username?: StringFilter;
};
