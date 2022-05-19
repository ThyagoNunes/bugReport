export interface FeedbacksCreateDate {
  type: string, 
  comment: string, 
  screenshot: string,
}


export interface FeedbacksRepository {
  create: (data: FeedbacksCreateDate) => Promise<void>;
}