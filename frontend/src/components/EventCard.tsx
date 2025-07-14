import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  distance: string;
  imageUrl?: string;
}

const EventCard: FC<EventCardProps> = ({ title, date, location, distance, imageUrl }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-letx-green-dark rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-letx-neon">
      <div
        className={`h-48 bg-cover bg-center rounded-t-2xl relative ${
          !imageUrl ? 'bg-letx-green-water dark:bg-letx-blue' : ''
        }`}
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
      >
        {!imageUrl && (
          <div className="h-full flex flex-col items-center justify-center text-letx-green-dark dark:text-letx-neon">
            <svg
              className="w-12 h-12 mb-2 opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium opacity-80">{t('eventCard.imageComingSoon')}</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-letx-neon text-letx-green-dark dark:text-letx-blue-dark px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {distance}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-4 line-clamp-2">
          {title}
        </h3>
        <div className="space-y-3">
          <p className="text-gray-600 dark:text-letx-green-water flex items-center gap-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{new Date(date).toLocaleDateString()}</span>
          </p>
          <p className="text-gray-600 dark:text-letx-green-water flex items-center gap-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="line-clamp-1">{location}</span>
          </p>
        </div>
        <button className="mt-6 w-full bg-letx-blue text-white py-3 rounded-xl hover:bg-letx-blue-dark transition-colors duration-300 font-semibold flex items-center justify-center gap-2">
          <span>{t('eventCard.register')}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
