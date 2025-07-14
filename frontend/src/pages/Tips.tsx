import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import YouTubeVideos from '../components/YouTubeVideos';
import AceBanner from '../components/AceBanner';
import NewsletterCard from '../components/NewsletterCard';

const Tips: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-letx-white dark:bg-letx-green-dark transition-colors duration-300">
      <Header />
      <main>
        {/* Hero Section para Dicas */}
        <section className="bg-letx-green-water dark:bg-letx-blue py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-letx-green-dark dark:text-letx-neon mb-6">
                Dicas de Corrida
              </h1>
              <p className="text-lg md:text-xl text-letx-green-dark dark:text-letx-green-water max-w-3xl mx-auto">
                Descubra técnicas, estratégias e conhecimentos essenciais para melhorar sua performance e aproveitar ao máximo cada corrida
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Dicas em Cards */}
        <section className="py-16 bg-white dark:bg-letx-green-dark transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-letx-green-dark dark:text-letx-neon mb-4">
                Guias e Artigos
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-letx-green-water dark:bg-letx-blue h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-letx-green-dark dark:text-letx-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Técnicas de Respiração
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4">
                    Aprenda a respirar corretamente durante a corrida para melhorar seu desempenho e resistência.
                  </p>
                  <button className="text-letx-blue dark:text-letx-neon hover:underline">
                    Ler mais →
                  </button>
                </div>
              </article>

              {/* Card 2 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-letx-green-water dark:bg-letx-blue h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-letx-green-dark dark:text-letx-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Planejamento de Treinos
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4">
                    Como estruturar seus treinos para alcançar seus objetivos na corrida de rua.
                  </p>
                  <button className="text-letx-blue dark:text-letx-neon hover:underline">
                    Ler mais →
                  </button>
                </div>
              </article>

              {/* Card 3 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-letx-green-water dark:bg-letx-blue h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-letx-green-dark dark:text-letx-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Nutrição para Corredores
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4">
                    Alimentação adequada antes, durante e após os treinos e competições.
                  </p>
                  <button className="text-letx-blue dark:text-letx-neon hover:underline">
                    Ler mais →
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Vídeos do YouTube */}
        <YouTubeVideos />

        {/* ACE Banner e Newsletter lado a lado */}
        <div className="bg-white dark:bg-letx-green-dark transition-colors duration-300">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <AceBanner />
            </div>
            <div className="flex-1">
              <NewsletterCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tips; 