import { User } from "../user/User";

export type Tasks = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user_id?: User | null;
};
