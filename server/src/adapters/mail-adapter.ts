export interface SendMailData {
  subject: string,
  body: string,
}

export interface MailAdaptar{
  sendMail: (data: SendMailData) => Promise<void> ; 
}