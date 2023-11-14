export interface UserDto {
    _id: string;
    username: string;
}

export interface MessageDto {
    _id: string;
    author: UserDto;
    chatId: string;
    body: string;
    createdAt: string;
    updatedAt: string;
}

export interface ChatDto {
    _id: string;
    name: string;
    description?: string;
    participants: UserDto[];
    lastMessage: MessageDto;
}