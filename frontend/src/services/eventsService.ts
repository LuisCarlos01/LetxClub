// Event interface following admin.md specification
export interface Event {
  id: string;
  title: string;
  description: string;
  city: string;
  date: string;
  time: string;
  eventType: string;
  sponsored: boolean;
  createdBy: string;
  createdAt?: string;
  updatedAt?: string;
}

// Mock data for development
let mockEvents: Event[] = [];

// Generate mock ID
const generateId = () => Math.random().toString(36).substr(2, 9);

export const eventsService = {
  // Get all events
  async getEvents(): Promise<Event[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockEvents;
  },

  // Create new event
  async createEvent(eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<Event> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const newEvent: Event = {
      ...eventData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    mockEvents.push(newEvent);
    return newEvent;
  },

  // Update event
  async updateEvent(id: string, eventData: Partial<Event>): Promise<Event> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = mockEvents.findIndex(event => event.id === id);
    if (index === -1) {
      throw new Error('Event not found');
    }
    
    mockEvents[index] = {
      ...mockEvents[index],
      ...eventData,
      updatedAt: new Date().toISOString()
    };
    
    return mockEvents[index];
  },

  // Delete event
  async deleteEvent(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = mockEvents.findIndex(event => event.id === id);
    if (index === -1) {
      throw new Error('Event not found');
    }
    
    mockEvents.splice(index, 1);
  },

  // Get event by ID
  async getEventById(id: string): Promise<Event | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    return mockEvents.find(event => event.id === id) || null;
  }
}; 