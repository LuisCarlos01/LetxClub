import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  distance: string;
  imageUrl?: string; // Optional for now
}

const EventCard: FC<EventCardProps> = ({ title, date, location, distance, imageUrl }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-letx-green-dark rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      {/* Image container with placeholder fallback */}
      <div
        className={`h-48 bg-cover bg-center ${!imageUrl ? 'bg-letx-green-water dark:bg-letx-blue' : ''}`}
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
      >
        {!imageUrl && (
          <div className="h-full flex flex-col items-center justify-center text-letx-green-dark dark:text-letx-neon">
            <svg
              className="w-12 h-12 mb-2"
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
            <span className="text-sm font-medium">{t('eventCard.imageComingSoon')}</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-2">{title}</h3>
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-letx-green-water">
            <span className="font-semibold">{t('eventCard.date')}:</span>{' '}
            {new Date(date).toLocaleDateString()}
          </p>
          <p className="text-gray-600 dark:text-letx-green-water">
            <span className="font-semibold">{t('eventCard.location')}:</span> {location}
          </p>
          <p className="text-gray-600 dark:text-letx-green-water">
            <span className="font-semibold">{t('eventCard.distance')}:</span> {distance}
          </p>
        </div>
        <button className="mt-4 w-full bg-letx-blue text-white py-2 rounded-full hover:bg-letx-blue-dark transition-colors">
          {t('eventCard.register')}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
