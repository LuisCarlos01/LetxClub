import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: '/images/hero/corrida1.png',
    translationKey: 'slide1',
    position: 'object-[center_25%]',
    textPosition: 'justify-end pb-20',
  },
  {
    image: '/images/hero/corrida2.png',
    translationKey: 'slide2',
    position: 'object-[center_18%]',
    textPosition: 'justify-end pb-20',
  },
  {
    image: '/images/hero/corrida3.png',
    translationKey: 'slide3',
    position: 'object-[center_8%]',
    textPosition: 'justify-center',
  },
];

const HeroSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[60vh] bg-letx-blue-dark">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-letx-blue-dark/90">
              <img
                src={slide.image}
                alt={t(`hero.${slide.translationKey}.title`)}
                className={`w-full h-full object-cover ${slide.position}`}
                loading="lazy"
              />
            </div>
            <div
              className={`absolute inset-0 flex flex-col items-center ${slide.textPosition} text-center text-white p-4 z-10`}
            >
              <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-xl p-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)]">
                  {t(`hero.${slide.translationKey}.title`)}
                </h2>
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-letx-neon mb-4 drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)]">
                  {t(`hero.${slide.translationKey}.highlight`)}
                </p>
                <p className="text-lg md:text-xl mb-8 drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)]">
                  {t(`hero.${slide.translationKey}.description`)}
                </p>
                <Link
                  to="/calendario"
                  className="bg-letx-neon text-letx-green-dark dark:text-letx-blue-dark px-8 py-3 rounded-full font-bold text-lg hover:bg-letx-orange transition-colors duration-300 inline-block"
                >
                  {t('buttons.register')}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
