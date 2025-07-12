import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Card {
  key: string;
  link: string;
  type: 'shop' | 'tip';
}

const ShopAndTips: FC = () => {
  const { t } = useTranslation();

  const cards: Card[] = [
    {
      key: 'runningShoes',
      link: '/shop/running-shoes',
      type: 'shop',
    },
    {
      key: 'beginnersTips',
      link: '/tips/beginners-guide',
      type: 'tip',
    },
    {
      key: 'essentialAccessories',
      link: '/shop/accessories',
      type: 'shop',
    },
    {
      key: 'nutrition',
      link: '/tips/nutrition',
      type: 'tip',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-letx-green-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(card => (
            <div
              key={card.key}
              className="bg-letx-white dark:bg-letx-green-dark rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-letx-green-water dark:bg-letx-blue flex items-center justify-center">
                {/* Placeholder para ícone ou imagem */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-2">
                  {t(`shopAndTips.${card.key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-letx-green-water mb-4">
                  {t(`shopAndTips.${card.key}.description`)}
                </p>
                <a
                  href={card.link}
                  className="inline-block px-6 py-2 bg-letx-green-dark dark:bg-letx-blue text-white rounded-full hover:bg-letx-blue dark:hover:bg-letx-blue-dark transition-colors duration-300"
                >
                  {t(`shopAndTips.buttons.${card.type === 'shop' ? 'shop' : 'readMore'}`)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopAndTips;
