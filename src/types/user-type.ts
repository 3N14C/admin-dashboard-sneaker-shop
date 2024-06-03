import { ChatType } from "./chat-type";
import { UserRole } from "./enums/user-role-enum";
import { MessageType } from "./message-type";
import { OrderType } from "./order-type";

export type UserType = {
  id: string;
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  secondaryName: string;
  phoneNumber: string
  createdAt: Date
  role: UserRole
  order: OrderType[]
  chat: ChatType[]
  message: MessageType[]
};
