/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from 'crypto-js';

export const encryptData = (secret: string, value: any) => {
  const data = CryptoJS.AES.encrypt(JSON.stringify(value), secret).toString();

  return data;
};

export const decryptData = <T>(secret: string, value: any) => {
  if (value === undefined) return;
  if (value === null) return null;
  if (typeof value !== 'string') return;
  const bytes = CryptoJS.AES.decrypt(value, secret);
  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return data as T;
};
