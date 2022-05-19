import { prisma } from "../../prisma";
import { FeedbacksCreateDate, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({type, comment, screenshot}: FeedbacksCreateDate) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  }
} 