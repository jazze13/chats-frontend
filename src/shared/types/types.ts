export interface UserDto {
    username: string;
}

export interface MessageDto {
    authorId: string;

    chatId: string;

    body: string;
}

export interface ChatDto {
    name: string;

    description?: string;

    participants: UserDto[];

    lastMessage: MessageDto;
}
