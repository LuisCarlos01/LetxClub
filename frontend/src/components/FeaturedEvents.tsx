import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import EventCard from './EventCard';
import { eventsService, Event as AdminEvent } from '../services/eventsService';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  distance: string;
  imageUrl?: string;
}

const FeaturedEvents: FC = () => {
  const { t } = useTranslation();
  const [adminEvents, setAdminEvents] = useState<AdminEvent[]>([]);
  const [loading, setLoading] = useState(true);

  // Load events from admin service and subscribe to updates
  useEffect(() => {
    const loadAdminEvents = async () => {
      try {
        const events = await eventsService.getEvents();
        setAdminEvents(events);
      } catch (error) {
        console.error('Erro ao carregar eventos do admin:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAdminEvents();

    // Subscribe to events changes for real-time updates
    const unsubscribe = eventsService.subscribeToEvents((events) => {
      setAdminEvents(events);
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Static events as fallback
  const staticEvents: Event[] = [
    {
      id: 'saopaulo',
      title: t('featuredEvents.events.saopaulo.title'),
      date: '2024-04-14',
      location: t('featuredEvents.events.saopaulo.location'),
      distance: t('featuredEvents.events.saopaulo.distance'),
    },
    {
      id: 'rio',
      title: t('featuredEvents.events.rio.title'),
      date: '2024-05-21',
      location: t('featuredEvents.events.rio.location'),
      distance: t('featuredEvents.events.rio.distance'),
    },
    {
      id: 'brasilia',
      title: t('featuredEvents.events.brasilia.title'),
      date: '2024-06-02',
      location: t('featuredEvents.events.brasilia.location'),
      distance: t('featuredEvents.events.brasilia.distance'),
    },
    {
      id: 'salvador',
      title: t('featuredEvents.events.salvador.title'),
      date: '2024-06-15',
      location: t('featuredEvents.events.salvador.location'),
      distance: t('featuredEvents.events.salvador.distance'),
    },
  ];

  // Convert admin events to display format
  const convertAdminEvent = (adminEvent: AdminEvent): Event => ({
    id: adminEvent.id,
    title: adminEvent.title,
    date: adminEvent.date,
    location: adminEvent.city,
    distance: adminEvent.eventType, // Using eventType as distance for now
    imageUrl: undefined // No image in admin events yet
  });

  // Combine admin events with static events
  const allEvents = [
    ...adminEvents.map(convertAdminEvent),
    ...staticEvents
  ];

  if (loading) {
    return (
      <section className="py-16 bg-letx-green-dark dark:bg-letx-blue-dark transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-letx-neon mb-12 text-center">
            {t('featuredEvents.title')}
          </h2>
          <div className="text-center text-letx-green-water">
            Carregando eventos...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-letx-green-dark dark:bg-letx-blue-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-letx-neon mb-12 text-center">
          {t('featuredEvents.title')}
        </h2>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="featured-events-swiper"
          >
            {allEvents.map(event => (
              <SwiperSlide key={event.id}>
                <EventCard {...event} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
