import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import EventCard from './EventCard';
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

  const events: Event[] = [
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
            {events.map(event => (
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
