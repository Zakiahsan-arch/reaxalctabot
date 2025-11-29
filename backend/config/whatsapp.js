// backend/config/whatsapp.js
import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

let waClient;

export const setupWhatsAppClient = () => {
  waClient = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
  });

  waClient.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('Scan QR untuk login WhatsApp');
  });

  waClient.on('ready', () => {
    console.log('Bot WA siap digunakan!');
  });

  waClient.on('message', async msg => {
    if (msg.body === '!ping') {
      msg.reply('pong!');
    }
  });

  waClient.initialize();
};

export const getWhatsAppClient = () => waClient;