import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AceBanner: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-letx-orange py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">{t('aceBanner.title')}</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-letx-white mb-8">{t('aceBanner.description')}</p>
            <a
              href="https://ace-running.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-letx-neon text-letx-green-dark px-8 py-3 rounded-lg hover:bg-letx-green-water transition-colors duration-300 font-semibold"
            >
              {t('aceBanner.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AceBanner;
