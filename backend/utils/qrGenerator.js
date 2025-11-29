// backend/utils/qrGenerator.js
import QRCode from 'qrcode';

export const generateQRCode = async (text) => {
  try {
    // Konversi string QR ke base64 image
    const qrImage = await QRCode.toDataURL(text, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      margin: 2,
      scale: 6
    });
    return qrImage;
  } catch (err) {
    console.error('❌ Gagal generate QR:', err.message);
    throw new Error('QR generation failed');
  }
};