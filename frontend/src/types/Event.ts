export interface Event {
  id: string;
  title: string;
  description: string;
  city: string;
  date: string;
  time: string;
  image: string;
  eventType: 'Street' | 'Trail' | 'Kids';
  sponsored: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEventRequest {
  title: string;
  description: string;
  city: string;
  date: string;
  time: string;
  image: File | null;
  eventType: 'Street' | 'Trail' | 'Kids';
}

export interface UpdateEventRequest extends Partial<CreateEventRequest> {
  id: string;
}
