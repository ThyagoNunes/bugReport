import nodemailer from 'nodemailer'
import { MailAdaptar, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525, 
  auth: {
    user: "b2e049958c3258",
    pass: "4f9b1ab1193337",
  },
});

export class NodemailerMailAdapter implements MailAdaptar {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Thyago Nunes <devthyagonunes@gmail.com>",
      subject,
      html: body,
    });
  }
}
