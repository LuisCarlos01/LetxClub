import { FC } from 'react';

interface TipsCardProps {
  title: string;
  description: string;
  badge: string;
  icon: string;
  rating: number;
  readTime: string;
  gradientFrom: string;
  gradientTo: string;
  onClick?: () => void;
}

const TipsCard: FC<TipsCardProps> = ({
  title,
  description,
  badge,
  icon,
  rating,
  readTime,
  gradientFrom,
  gradientTo,
  onClick
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 mr-1 ${i <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      lightning: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      shopping: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      ),
      lightbulb: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
      heart: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      ),
      chart: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
      cloud: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      ),
      trash: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      ),
      clock: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    };

    return icons[iconName] || icons.lightning;
  };

  return (
    <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20">
      <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} h-48 flex items-center justify-center relative`}>
        <div className="absolute top-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-letx-green-dark dark:text-letx-neon px-3 py-1 rounded-full text-sm font-medium">
            {badge}
          </span>
        </div>
        <svg className="w-20 h-20 text-letx-green-dark dark:text-letx-neon drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {getIcon(icon)}
        </svg>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          {renderStars(rating)}
          <span className="text-sm text-gray-600 dark:text-letx-green-water ml-2">{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-letx-green-water mb-4 line-clamp-3">
          {description}
        </p>
        <button 
          onClick={onClick}
          className="w-full bg-letx-blue text-white py-3 rounded-lg hover:bg-letx-blue-dark transition-colors duration-300 font-semibold"
        >
          Ler mais
        </button>
      </div>
    </article>
  );
};

export default TipsCard; 