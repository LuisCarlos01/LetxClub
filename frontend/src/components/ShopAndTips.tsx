import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Card {
  key: string;
  link: string;
  type: 'shop' | 'tip';
  image?: string;
  category?: string;
  rating?: number;
  badge?: string;
}

const ShopAndTips: FC = () => {
  const { t } = useTranslation();

  const cards: Card[] = [
    {
      key: 'runningShoes',
      link: '/shop/running-shoes',
      type: 'shop',
      image: '/images/shop/tenis.png',
      category: 'Calçados',
      rating: 5,
      badge: 'Bestseller',
    },
    {
      key: 'beginnersTips',
      link: '/tips/beginners-guide',
      type: 'tip',
      image: '/images/tips/dicas.png',
      category: 'Iniciante',
      rating: 4,
      badge: 'Grátis',
    },
    {
      key: 'essentialAccessories',
      link: '/shop/accessories',
      type: 'shop',
      image: '/images/shop/acessorios.png',
      category: 'Acessórios',
      rating: 4,
      badge: 'Novidade',
    },
    {
      key: 'nutrition',
      link: '/tips/nutrition',
      type: 'tip',
      image: '/images/tips/nutriçao.png',
      category: 'Nutrição',
      rating: 5,
      badge: 'Popular',
    },
    {
      key: 'sportswear',
      link: '/shop/clothing',
      type: 'shop',
      image: '/images/shop/roupas.png',
      category: 'Roupas',
      rating: 4,
      badge: 'Promoção',
    },
    {
      key: 'trainingTips',
      link: '/tips/training',
      type: 'tip',
      image: '/images/tips/treinos.png',
      category: 'Treino',
      rating: 5,
      badge: 'Essencial',
    },
    {
      key: 'supplements',
      link: '/shop/supplements',
      type: 'shop',
      image: '/images/shop/suplementos.png',
      category: 'Suplementos',
      rating: 4,
      badge: 'Recomendado',
    },
    {
      key: 'recoveryTips',
      link: '/tips/recovery',
      type: 'tip',
      image: '/images/tips/recuperacao.png',
      category: 'Recuperação',
      rating: 4,
      badge: 'Importante',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-letx-green-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-letx-green-dark dark:text-letx-neon mb-4">
            {t('shopAndTips.title', 'Loja e Dicas')}
          </h2>
          <p className="text-gray-600 dark:text-letx-green-water text-lg max-w-2xl mx-auto">
            {t(
              'shopAndTips.subtitle',
              'Descubra produtos essenciais para sua corrida e acesse dicas valiosas para melhorar sua performance'
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cards.map(card => (
            <div
              key={card.key}
              className="bg-letx-white dark:bg-letx-green-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20 group"
            >
              <div className="relative">
                <div
                  className={`h-48 bg-cover bg-center relative ${!card.image ? 'bg-gradient-to-br from-letx-green-water to-letx-blue dark:from-letx-blue dark:to-letx-green-water flex items-center justify-center' : ''}`}
                  style={
                    card.image
                      ? { backgroundImage: `url(${card.image})`, backgroundPosition: 'center 25%' }
                      : undefined
                  }
                >
                  {!card.image && (
                    <div className="text-letx-green-dark dark:text-letx-neon opacity-80">
                      {card.type === 'shop' ? (
                        <svg
                          className="w-16 h-16 mb-2 drop-shadow-lg"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-16 h-16 mb-2 drop-shadow-lg"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      )}
                    </div>
                  )}

                  {/* Badge de categoria */}
                  {card.badge && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                          card.type === 'shop'
                            ? 'bg-letx-blue/90 text-white'
                            : 'bg-letx-green-dark/90 text-letx-neon'
                        }`}
                      >
                        {card.badge}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                {/* Informações do card */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-letx-green-water mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-letx-green-water/70">
                      {card.category}
                    </span>
                  </div>

                  {/* Rating com estrelas */}
                  {card.rating && (
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < (card.rating || 0) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-4">
                  {t(`shopAndTips.${card.key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-letx-green-water mb-6 line-clamp-2">
                  {t(`shopAndTips.${card.key}.description`)}
                </p>
                <a
                  href={card.link}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-letx-blue text-white rounded-xl hover:bg-letx-blue-dark transition-all duration-300 font-semibold gap-2 group-hover:scale-105"
                >
                  <span>{t('shopAndTips.buttons.readMore', 'Ler mais')}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
