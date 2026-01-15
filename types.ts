export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum BotStatus {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  ERROR = 'ERROR'
}