export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ChatbotResponse {
  answer: string;
}
