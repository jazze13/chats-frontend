export interface UserDto {
    id: string;
    username: string;
}

export interface MessageDto {
    id: string;
    author: UserDto;
    chatId: string;
    body: string;
    createdAt: string;
    updatedAt: string;
}

export interface ChatDto {
    id: string;
    name: string;
    description?: string;
    participants: UserDto[];
    lastMessage: MessageDto;
}