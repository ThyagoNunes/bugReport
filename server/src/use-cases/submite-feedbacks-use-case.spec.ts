/* 
describe = switch de testes. 
Criando uma categorização para vários testes de uma única funcionalidade 
*/

import { SubmitFeedbacksUseCase } from "./submit-feedbacks-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();



const submitFeedback = new SubmitFeedbacksUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)


describe('Submit feedback', () => { 
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment', 
      screenshot: 'data:image/png;base64,fudeoComKidBengalaVejaNoQueDeu',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();

  });

  it('Should not be able to submite feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment', 
      screenshot: 'data:image/png;base64,fudeoComKidBengalaVejaNoQueDeu',
    })).rejects.toThrow();
  });

  it('Should not be able to submite feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '', 
      screenshot: 'data:image/png;base64,fudeoComKidBengalaVejaNoQueDeu',
    })).rejects.toThrow();
  });


  it('Should not be able to submite feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'ta tudo bugado', 
      screenshot: 'fudeoComKidBengalaVejaNoQueDeu.jpeg',
    })).rejects.toThrow();
  });
});