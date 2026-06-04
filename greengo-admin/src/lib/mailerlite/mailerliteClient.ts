import MailerLite from '@mailerlite/mailerlite-nodejs';

const apiKey = process.env.MAILERLITE_API_KEY || 'dummy_api_key';

export const mailerlite = new MailerLite({
  api_key: apiKey,
});
