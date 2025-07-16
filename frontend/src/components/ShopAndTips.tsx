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
      image:
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Roupas',
      rating: 4,
      badge: 'Promoção',
    },
    {
      key: 'trainingTips',
      link: '/tips/training',
      type: 'tip',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Treino',
      rating: 5,
      badge: 'Essencial',
    },
    {
      key: 'supplements',
      link: '/shop/supplements',
      type: 'shop',
      image:
        'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Suplementos',
      rating: 4,
      badge: 'Recomendado',
    },
    {
      key: 'recoveryTips',
      link: '/tips/recovery',
      type: 'tip',
      image:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Recuperação',
      rating: 4,
      badge: 'Importante',
    },
  ];

  return (
    <section className="py-24 transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23CFF350&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-letx-blue-dark dark:text-white mb-8 drop-shadow-lg">
            <span className="bg-gradient-to-r from-letx-blue-dark via-letx-blue to-letx-green-dark bg-clip-text text-transparent dark:from-white dark:via-letx-neon dark:to-letx-green-water">
              {t('shopAndTips.title', 'Materias e Dicas')}
            </span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-letx-blue-dark/90 dark:text-white/95 text-xl md:text-2xl font-medium leading-relaxed drop-shadow-sm mb-6">
              {t(
                'shopAndTips.subtitle',
                'Descubra produtos essenciais para sua corrida e acesse dicas valiosas para melhorar sua performance'
              )}
            </p>
            
            {/* Premium divider */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-letx-blue/30 to-transparent flex-1"></div>
              <div className="w-3 h-3 bg-letx-neon rounded-full shadow-lg"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-letx-blue/30 to-transparent flex-1"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.key}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-letx-blue/20 via-letx-neon/20 to-letx-green-water/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/98 dark:bg-letx-blue-dark/98 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-[1.02] transition-all duration-700 border border-white/60 dark:border-letx-green-water/20 group-hover:border-letx-blue/40 dark:group-hover:border-letx-neon/40">
                
                {/* Image Container with Enhanced Overlay */}
                <div className="relative overflow-hidden">
                  <div
                    className={`h-56 bg-cover bg-center relative transition-transform duration-700 group-hover:scale-110 ${
                      !card.image 
                        ? 'bg-gradient-to-br from-letx-green-water/80 to-letx-blue/80 dark:from-letx-blue/80 dark:to-letx-green-water/80 flex items-center justify-center' 
                        : ''
                    }`}
                    style={
                      card.image
                        ? { backgroundImage: `url(${card.image})`, backgroundPosition: 'center 25%' }
                        : undefined
                    }
                  >
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {!card.image && (
                      <div className="text-white/90 drop-shadow-lg">
                        {card.type === 'shop' ? (
                          <svg
                            className="w-24 h-24 mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-24 h-24 mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        )}
                      </div>
                    )}

                    {/* Enhanced Badge */}
                    {card.badge && (
                      <div className="absolute top-5 left-5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-letx-blue to-letx-green-dark rounded-full blur opacity-50"></div>
                          <span className={`relative px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-xl shadow-xl border transition-all duration-300 ${
                            card.type === 'shop'
                              ? 'bg-letx-blue/95 text-white border-white/30 group-hover:bg-letx-blue group-hover:shadow-2xl'
                              : 'bg-letx-green-dark/95 text-letx-neon border-letx-neon/40 group-hover:bg-letx-green-dark group-hover:shadow-2xl'
                          }`}>
                            {card.badge}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Type indicator */}
                    <div className="absolute top-5 right-5">
                      <div className={`w-12 h-12 rounded-full backdrop-blur-xl shadow-lg flex items-center justify-center transition-all duration-300 ${
                        card.type === 'shop' 
                          ? 'bg-white/90 text-letx-blue group-hover:bg-white group-hover:scale-110' 
                          : 'bg-letx-neon/90 text-letx-green-dark group-hover:bg-letx-neon group-hover:scale-110'
                      }`}>
                        {card.type === 'shop' ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Card Content */}
                <div className="p-8">
                  {/* Category and Rating Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center bg-gray-50 dark:bg-letx-blue-dark/50 px-4 py-2 rounded-full">
                      <svg
                        className="w-4 h-4 text-letx-blue dark:text-letx-green-water mr-2"
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
                      <span className="text-sm font-semibold text-letx-blue dark:text-letx-green-water">
                        {card.category}
                      </span>
                    </div>

                    {/* Enhanced Rating */}
                    {card.rating && (
                      <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-3 py-2 rounded-full">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 transition-colors duration-200 ${
                              i < (card.rating || 0) 
                                ? 'text-amber-400' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-sm font-medium text-amber-600 dark:text-amber-400 ml-1">
                          {card.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Title */}
                  <h3 className="text-2xl font-bold text-letx-green-dark dark:text-white mb-4 leading-tight group-hover:text-letx-blue dark:group-hover:text-letx-neon transition-colors duration-300">
                    {t(`shopAndTips.${card.key}.title`)}
                  </h3>

                  {/* Enhanced Description */}
                  <p className="text-gray-600 dark:text-letx-green-water/90 mb-8 line-clamp-3 leading-relaxed text-base">
                    {t(`shopAndTips.${card.key}.description`)}
                  </p>

                  {/* Enhanced CTA Button */}
                  <a
                    href={card.link}
                    className="group/btn inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-letx-blue to-letx-blue-dark hover:from-letx-blue-dark hover:to-letx-blue text-white rounded-2xl transition-all duration-500 font-bold text-lg gap-3 shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden"
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    
                    <span className="relative z-10">
                      {t('shopAndTips.buttons.readMore', 'Ler mais')}
                    </span>
                    
                    <svg
                      className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-2 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
            </div>
          ))}
        </div>

        {/* Enhanced Footer CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/80 dark:bg-letx-blue-dark/80 backdrop-blur-xl px-8 py-4 rounded-full shadow-xl border border-white/50 dark:border-letx-green-water/20">
            <div className="w-3 h-3 bg-letx-neon rounded-full animate-pulse"></div>
            <p className="text-letx-blue-dark dark:text-letx-green-water font-medium">
              {t('shopAndTips.footer', 'Mais conteúdo chegando em breve!')}
            </p>
            <div className="w-3 h-3 bg-letx-blue rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopAndTips;
