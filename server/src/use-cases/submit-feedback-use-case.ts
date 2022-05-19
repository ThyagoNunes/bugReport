import { MailAdaptar } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string, 
  comment: string, 
  screenshot: string,
}

export class SubmitFeedbackUseCase {
  constructor (
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdaptar,
  ) {}

  async execute({type, comment, screenshot}: SubmitFeedbackUseCaseRequest) {

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback', 
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo de feedback ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`
      ].join('\n')
    })
  } 
}
