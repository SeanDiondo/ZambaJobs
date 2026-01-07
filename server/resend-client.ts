import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  console.log('DEBUG: RESEND_API_KEY exists:', !!apiKey);
  console.log('DEBUG: RESEND_FROM_EMAIL exists:', !!fromEmail);
  console.log('DEBUG: API_KEY starts with re_?:', apiKey?.startsWith('re_'));
  console.log('DEBUG: FROM_EMAIL:', fromEmail);

  if (!apiKey || !fromEmail) {
    throw new Error('Resend not connected - missing API key or from email');
  }
  
  return {apiKey, fromEmail};
}

export async function getUncachableResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: credentials.fromEmail
  };
}
