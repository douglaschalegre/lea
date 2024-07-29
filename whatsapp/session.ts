import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { sendMessage } from './services'

interface Map {
    [key: string]: Client
}
export let sessions: Map = {}
export function session(number: string){
    sessions[number] = new Client({
        authStrategy: new LocalAuth(),
        restartOnAuthFail: true,
        puppeteer: {
            headless: true,
            args: []
        }
    });

    sessions[number].on('qr', qr => {
        qrcode.generate(qr, { small: true });
    });

    sessions[number].on('authenticated', () => {
        console.log('AUTHENTICATED');
    });

    sessions[number].on('ready', async () => {
        const version = await sessions[number].getWWebVersion();
        console.log(`WWeb v${version}`);
    });

    sessions[number].on('message', async (msg) => {
        try{
            if(msg.body.toLowerCase() == "oi douglas"){
                const chat = await msg.getChat()
                console.log()
                sendMessage(sessions[number], "Oi! Eu estou respondendo isso sem as mãos 😅", chat.id.user)
            }
        } catch {
            console.error("Something went wrong...")
        }
    });
    return sessions[number]
}

export function getSession(sessionName: string){
    let sess = sessions[sessionName]
    if(sess){
        return sess
    }
    return session(sessionName)
}