import { Resend } from 'resend';

const resend = new Resend('re_2bCPFu2Z_CP7yRmusFJ54Pu8vUrLJnX95');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'raffabmxporsiempre@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});