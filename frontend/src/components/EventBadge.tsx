import { FC } from 'react';
import { FaStar, FaCrown, FaFire } from 'react-icons/fa';

interface EventBadgeProps {
  featuredStandard?: boolean;
  featuredPremium?: boolean;
  featuredUltimate?: boolean;
  className?: string;
}

const EventBadge: FC<EventBadgeProps> = ({
  featuredStandard,
  featuredPremium,
  featuredUltimate,
  className = '',
}) => {
  // Determinar o badge de maior prioridade
  const getBadgeType = () => {
    if (featuredUltimate) return 'ultimate';
    if (featuredPremium) return 'premium';
    if (featuredStandard) return 'standard';
    return null;
  };

  const badgeType = getBadgeType();

  if (!badgeType) return null;

  const getBadgeConfig = () => {
    switch (badgeType) {
      case 'ultimate':
        return {
          icon: FaFire,
          text: 'DESTAQUE ULTIMATE',
          bgColor: 'bg-gradient-to-r from-red-500 to-orange-500',
          textColor: 'text-white',
          iconColor: 'text-white',
          glow: 'shadow-lg shadow-red-500/50',
          animate: 'animate-pulse',
        };
      case 'premium':
        return {
          icon: FaCrown,
          text: 'DESTAQUE PREMIUM',
          bgColor: 'bg-gradient-to-r from-purple-500 to-indigo-500',
          textColor: 'text-white',
          iconColor: 'text-white',
          glow: 'shadow-lg shadow-purple-500/50',
          animate: '',
        };
      case 'standard':
        return {
          icon: FaStar,
          text: 'DESTAQUE',
          bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
          textColor: 'text-gray-900',
          iconColor: 'text-gray-900',
          glow: 'shadow-lg shadow-yellow-500/50',
          animate: '',
        };
      default:
        return null;
    }
  };

  const config = getBadgeConfig();
  if (!config) return null;

  const { icon: Icon, text, bgColor, textColor, iconColor, glow, animate } = config;

  return (
    <div
      className={`
        inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold
        ${bgColor} ${textColor} ${glow} ${animate} ${className}
      `}
    >
      <Icon className={`w-3 h-3 ${iconColor}`} />
      <span>{text}</span>
    </div>
  );
};

export default EventBadge; 