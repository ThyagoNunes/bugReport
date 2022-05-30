import { Router } from "express";
import { SubmitFeedbacksUseCase } from "./use-cases/submit-feedbacks-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

export const routes = Router();

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbacksUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
    );

  await submitFeedbackUseCase.execute({
    type, 
    comment, 
    screenshot
  })

  return response.status(201).send();
});
