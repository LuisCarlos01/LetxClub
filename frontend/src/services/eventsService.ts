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
  imageUrl?: string; // URL da imagem (base64 ou URL externa)
  createdAt?: string;
  updatedAt?: string;
  // Campos de destaque para o sistema de pagamento
  featuredStandard?: boolean;
  featuredPremium?: boolean;
  featuredUltimate?: boolean;
  featuredPayment?: {
    tier: 'standard' | 'premium' | 'ultimate';
    price: number;
    paidAt: string;
  };
}

// Storage key for localStorage
const STORAGE_KEY = 'letxclub_events';

// Initialize events from localStorage or empty array
const loadEventsFromStorage = (): Event[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading events from localStorage:', error);
    return [];
  }
};

// Save events to localStorage
const saveEventsToStorage = (events: Event[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (error) {
    console.error('Error saving events to localStorage:', error);
  }
};

// Mock data for development with localStorage persistence
let mockEvents: Event[] = loadEventsFromStorage();

// Generate mock ID
const generateId = () => Math.random().toString(36).substr(2, 9);

// Event listeners for real-time updates
const eventListeners: ((events: Event[]) => void)[] = [];

// Subscribe to events changes
const subscribeToEvents = (callback: (events: Event[]) => void): (() => void) => {
  eventListeners.push(callback);

  // Return unsubscribe function
  return () => {
    const index = eventListeners.indexOf(callback);
    if (index > -1) {
      eventListeners.splice(index, 1);
    }
  };
};

// Notify all listeners about events changes
const notifyListeners = () => {
  eventListeners.forEach(callback => callback([...mockEvents]));
};

export const eventsService = {
  // Get all events
  async getEvents(): Promise<Event[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...mockEvents];
  },

  // Create new event
  async createEvent(eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<Event> {
    await new Promise(resolve => setTimeout(resolve, 300));

    const newEvent: Event = {
      ...eventData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mockEvents.push(newEvent);
    saveEventsToStorage(mockEvents);
    notifyListeners();

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
      updatedAt: new Date().toISOString(),
    };

    saveEventsToStorage(mockEvents);
    notifyListeners();

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
    saveEventsToStorage(mockEvents);
    notifyListeners();
  },

  // Get event by ID
  async getEventById(id: string): Promise<Event | null> {
    await new Promise(resolve => setTimeout(resolve, 200));

    return mockEvents.find(event => event.id === id) || null;
  },

  // Subscribe to events changes for real-time updates
  subscribeToEvents,

  // Clear all events (for testing purposes)
  async clearAllEvents(): Promise<void> {
    mockEvents = [];
    saveEventsToStorage(mockEvents);
    notifyListeners();
  },
};
