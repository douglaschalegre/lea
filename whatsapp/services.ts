import { Client } from 'whatsapp-web.js';

export function sendMessage(client: Client, message: string, chatId: string) {
    chatId = chatId.replace('@c.us', '');
    chatId = `${chatId}@c.us`
    message = message || `Olá, eu sou um BOT`;
    client.sendMessage(chatId, message);
}

export async function getMessages(client: Client) {
    const chats = await client.getChats()
    const latestChats = chats.slice(0, 10);
    const chatsWithMessages = latestChats.map(async (chat) => {
        return await chat.fetchMessages({limit: 100})
    })
    return chatsWithMessages
}