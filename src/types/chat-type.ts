import { MessageType } from "./message-type"
import { UserType } from "./user-type"

export type ChatType = {
    id: string

    user: UserType[]
    message: MessageType[]
}