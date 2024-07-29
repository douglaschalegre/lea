import { Router, Request, Response} from 'express';
import { getMessages, sendMessage } from './services';
import { getSession } from './session'

const client = getSession('5582981214848')

export const router = Router();
router.post('/message', (req: Request, res: Response) => {
    const { message, number } = req.body
    sendMessage(client, message, number)
    res.status(201).send({ status: 'Enviado mensagem!' })
})
router.get('/messages', async (req: Request, res: Response) => {
    const msgs = await getMessages(client)
    res.status(200).send(msgs)
})

