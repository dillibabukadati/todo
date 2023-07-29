import { JsonValue } from "type-fest";
import { Tasks } from "../tasks/Tasks";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  task?: Tasks | null;
  updatedAt: Date;
  username: string;
};
