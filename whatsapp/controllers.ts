import { Request, Response } from 'express';
import { Client } from 'whatsapp-web.js';
import { sendMessage, getMessages } from './services'

export function sendText(client: Client, req: Request, res: Response) {
    console.log(req.body)
    const { message, number } = req.body
    sendMessage(client, message, number)
    res.status(201).send({ status: 'Enviado mensagem!' })
}

export async function getTexts(client: Client, req: Request, res: Response) {
    const msgs = await getMessages(client)
    res.status(200).send(msgs)
}