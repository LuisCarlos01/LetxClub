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
        <section className="py-16 bg-[#CFF350] dark:bg-letx-green-dark transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-letx-green-dark dark:text-letx-neon mb-4">
                Guias e Artigos
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Card 1 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20">
                <div className="bg-gradient-to-br from-letx-green-water to-letx-blue h-48 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-letx-green-dark dark:text-letx-neon px-3 py-1 rounded-full text-sm font-medium">
                      Iniciante
                    </span>
                  </div>
                  <svg className="w-20 h-20 text-letx-green-dark dark:text-letx-neon drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-letx-green-water ml-1">Básico</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-letx-green-water/70">• 5 min leitura</span>
                  </div>
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Primeiros Passos na Corrida
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4 line-clamp-3">
                    Guia completo para iniciantes: como começar a correr de forma segura e progressiva, com dicas de equipamentos e planejamento.
                  </p>
                  <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                    <span>Ler guia completo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Card 2 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20">
                <div className="bg-gradient-to-br from-letx-blue to-letx-green-water h-48 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-letx-green-dark dark:text-letx-neon px-3 py-1 rounded-full text-sm font-medium">
                      Intermediário
                    </span>
                  </div>
                  <svg className="w-20 h-20 text-letx-green-dark dark:text-letx-neon drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-letx-green-water ml-1">Intermediário</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-letx-green-water/70">• 8 min leitura</span>
                  </div>
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Técnica de Corrida
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4 line-clamp-3">
                    Melhore sua postura, passada e biomecânica para correr de forma mais eficiente e sem lesões. Aprenda sobre cadência ideal e pisada.
                  </p>
                  <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                    <span>Ler guia completo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Card 3 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20">
                <div className="bg-gradient-to-br from-letx-green-water via-letx-blue to-letx-green-water h-48 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-letx-green-dark dark:text-letx-neon px-3 py-1 rounded-full text-sm font-medium">
                      Avançado
                    </span>
                  </div>
                  <svg className="w-20 h-20 text-letx-green-dark dark:text-letx-neon drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-letx-green-water ml-1">Avançado</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-letx-green-water/70">• 12 min leitura</span>
                  </div>
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Nutrição e Hidratação
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4 line-clamp-3">
                    Estratégias alimentares e de hidratação para otimizar seu desempenho antes, durante e após a corrida. Inclui suplementação esportiva.
                  </p>
                  <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                    <span>Ler guia completo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Card 4 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20">
                <div className="bg-gradient-to-br from-letx-blue to-letx-green-dark h-48 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-letx-green-dark dark:text-letx-neon px-3 py-1 rounded-full text-sm font-medium">
                      Intermediário
                    </span>
                  </div>
                  <svg className="w-20 h-20 text-letx-green-dark dark:text-letx-neon drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-letx-green-water ml-1">Intermediário</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-letx-green-water/70">• 10 min leitura</span>
                  </div>
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Equipamentos Essenciais
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4 line-clamp-3">
                    Guia completo sobre tênis, roupas e acessórios para corrida. Aprenda a escolher o equipamento ideal para seu tipo de pisada.
                  </p>
                  <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                    <span>Ler guia completo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Card 5 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20">
                <div className="bg-gradient-to-br from-letx-green-dark to-letx-blue h-48 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-letx-green-dark dark:text-letx-neon px-3 py-1 rounded-full text-sm font-medium">
                      Avançado
                    </span>
                  </div>
                  <svg className="w-20 h-20 text-letx-green-dark dark:text-letx-neon drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-letx-green-water ml-1">Avançado</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-letx-green-water/70">• 15 min leitura</span>
                  </div>
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Psicologia da Corrida
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4 line-clamp-3">
                    Técnicas mentais para superar barreiras psicológicas, manter motivação e alcançar seus objetivos na corrida de longa distância.
                  </p>
                  <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                    <span>Ler guia completo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Card 6 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20">
                <div className="bg-gradient-to-br from-letx-green-water to-letx-green-dark h-48 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-letx-green-dark dark:text-letx-neon px-3 py-1 rounded-full text-sm font-medium">
                      Intermediário
                    </span>
                  </div>
                  <svg className="w-20 h-20 text-letx-green-dark dark:text-letx-neon drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-letx-green-water ml-1">Intermediário</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-letx-green-water/70">• 7 min leitura</span>
                  </div>
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Recuperação e Descanso
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4 line-clamp-3">
                    Importância do descanso, técnicas de recuperação ativa e como otimizar seu sono para melhor performance na corrida.
                  </p>
                  <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                    <span>Ler guia completo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Card 7 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20">
                <div className="bg-gradient-to-br from-letx-blue to-letx-green-water h-48 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-letx-green-dark dark:text-letx-neon px-3 py-1 rounded-full text-sm font-medium">
                      Avançado
                    </span>
                  </div>
                  <svg className="w-20 h-20 text-letx-green-dark dark:text-letx-neon drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-letx-green-water ml-1">Avançado</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-letx-green-water/70">• 18 min leitura</span>
                  </div>
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Preparação para Maratona
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4 line-clamp-3">
                    Plano completo de 16 semanas para preparação de maratona, incluindo treinos específicos, nutrição e estratégias de prova.
                  </p>
                  <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                    <span>Ler guia completo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>

              {/* Card 8 */}
              <article className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-letx-green-water/20">
                <div className="bg-gradient-to-br from-letx-green-dark to-letx-green-water h-48 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-letx-green-dark dark:text-letx-neon px-3 py-1 rounded-full text-sm font-medium">
                      Iniciante
                    </span>
                  </div>
                  <svg className="w-20 h-20 text-letx-green-dark dark:text-letx-neon drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 12v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-letx-green-water ml-1">Básico</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-letx-green-water/70">• 6 min leitura</span>
                  </div>
                  <h3 className="text-xl font-bold text-letx-green-dark dark:text-letx-neon mb-3">
                    Corrida no Calor e Frio
                  </h3>
                  <p className="text-gray-600 dark:text-letx-green-water mb-4 line-clamp-3">
                    Estratégias para correr em diferentes condições climáticas, equipamentos adequados e cuidados especiais para cada estação.
                  </p>
                  <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                    <span>Ler guia completo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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