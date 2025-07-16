import { FC, useState } from 'react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
  duration: string;
  category: string;
  views: string;
  description: string;
}

const YouTubeVideos: FC = () => {
  const videos: Video[] = [
    {
      id: '1',
      title: 'Como Começar a Correr: Guia Completo para Iniciantes',
      thumbnail: 'https://i.ytimg.com/vi/kVnyY17VS9Y/hqdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/kVnyY17VS9Y',
      duration: '12:30',
      category: 'Iniciantes',
      views: '2.1M',
      description: 'Guia completo para quem está começando a correr, com dicas essenciais de segurança e técnica.',
    },
    {
      id: '2',
      title: 'Técnica de Corrida: Como Melhorar sua Postura e Passada',
      thumbnail: 'https://i.ytimg.com/vi/zSIDRHUWlVo/hqdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/zSIDRHUWlVo',
      duration: '8:45',
      category: 'Técnica',
      views: '850K',
      description: 'Aprenda a técnica correta de corrida para melhorar performance e evitar lesões.',
    },
    {
      id: '3',
      title: 'Nutrição para Corredores: O que Comer Antes e Depois da Corrida',
      thumbnail: 'https://i.ytimg.com/vi/Phl82D57P58/hqdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/Phl82D57P58',
      duration: '15:20',
      category: 'Nutrição',
      views: '1.5M',
      description: 'Guia completo de nutrição esportiva para corredores, com dicas práticas de alimentação.',
    },
    {
      id: '4',
      title: 'Treino de Intervalos: Como Melhorar sua Velocidade na Corrida',
      thumbnail: 'https://i.ytimg.com/vi/LUAzBpVtbRY/hqdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/LUAzBpVtbRY',
      duration: '10:15',
      category: 'Treino',
      views: '723K',
      description: 'Método eficaz de treino intervalado para aumentar velocidade e resistência.',
    },
    {
      id: '5',
      title: 'Prevenção de Lesões: Aquecimento e Alongamento para Corredores',
      thumbnail: 'https://i.ytimg.com/vi/3RBZudUgmSs/hqdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/3RBZudUgmSs',
      duration: '14:30',
      category: 'Prevenção',
      views: '1.1M',
      description: 'Rotina completa de aquecimento e alongamento para prevenir lesões na corrida.',
    },
    {
      id: '6',
      title: 'Respiração na Corrida: Técnicas para Melhorar sua Performance',
      thumbnail: 'https://i.ytimg.com/vi/bBYOOCANdHQ/hqdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/bBYOOCANdHQ',
      duration: '7:45',
      category: 'Técnica',
      views: '945K',
      description: 'Técnicas de respiração para otimizar performance e resistência durante a corrida.',
    },
    {
      id: '7',
      title: 'Corrida Matinal: Benefícios e Dicas para Começar o Dia Correndo',
      thumbnail: 'https://i.ytimg.com/vi/Q6gZlq5FLEM/hqdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/Q6gZlq5FLEM',
      duration: '9:20',
      category: 'Motivação',
      views: '567K',
      description: 'Descubra os benefícios da corrida matinal e como criar uma rotina sustentável.',
    },
    {
      id: '8',
      title: 'Como Escolher o Tênis Ideal para Corrida de Rua',
      thumbnail: 'https://i.ytimg.com/vi/5fVnSCJFmRY/hqdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/5fVnSCJFmRY',
      duration: '11:10',
      category: 'Equipamentos',
      views: '1.3M',
      description: 'Guia completo para escolher o tênis de corrida ideal para seu tipo de pisada.',
    },
    {
      id: '9',
      title: 'Corrida de 5K: Plano de Treino Completo para Iniciantes',
      thumbnail: 'https://i.ytimg.com/vi/kHNiIRJiIFQ/hqdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/kHNiIRJiIFQ',
      duration: '16:40',
      category: 'Treino',
      views: '892K',
      description: 'Plano de treino estruturado para completar sua primeira corrida de 5K.',
    },
  ];

  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    'Todos',
    'Iniciantes',
    'Técnica',
    'Nutrição',
    'Treino',
    'Prevenção',
    'Motivação',
    'Equipamentos',
  ];

  const filteredVideos =
    activeFilter === 'Todos' ? videos : videos.filter(video => video.category === activeFilter);

  const handleVideoClick = (embedUrl: string) => {
    window.open(embedUrl.replace('/embed/', '/watch?v='), '_blank');
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredVideos.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setCurrentIndex(0);
  };

  // Função para gerar thumbnail fallback
  const generateFallbackThumbnail = (videoId: string) => {
    return `https://i.ytimg.com/vi/${videoId}/default.jpg`;
  };

  // Função para extrair ID do YouTube da URL
  const extractYouTubeId = (url: string): string => {
    const match = url.match(/(?:embed\/|watch\?v=)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  };

  return (
    <section 
      className="py-16 bg-[#CFF350] dark:bg-letx-green-dark transition-colors duration-300"
      aria-labelledby="videos-section-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="videos-section-title"
            className="text-3xl md:text-4xl font-bold text-letx-green-dark dark:text-letx-neon mb-4"
          >
            Vídeos sobre Corrida
          </h2>
          <p className="text-gray-600 dark:text-letx-green-water text-lg max-w-2xl mx-auto mb-8">
            Aprenda técnicas e dicas essenciais para melhorar sua performance na corrida de rua
          </p>

          {/* Filtros de Categoria */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            role="group"
            aria-label="Filtros de categoria de vídeos"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleFilterChange(category);
                  }
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-letx-blue focus:ring-offset-2 ${
                  activeFilter === category
                    ? 'bg-letx-blue text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-letx-blue-dark text-letx-green-dark dark:text-letx-neon border border-letx-green-water/30 hover:bg-letx-green-water/10 hover:scale-105'
                }`}
                aria-pressed={activeFilter === category}
                aria-label={`Filtrar vídeos por categoria: ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-letx-green-water">
            {filteredVideos.length} vídeo{filteredVideos.length !== 1 ? 's' : ''}
            {activeFilter !== 'Todos' ? ` na categoria "${activeFilter}"` : ''}
          </p>
        </div>

        {/* Carrossel de Vídeos */}
        <div className="relative">
          {/* Botões de Navegação */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-letx-blue focus:ring-offset-2 ${
                currentIndex === 0
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-letx-blue text-white hover:bg-letx-blue-dark shadow-lg hover:shadow-xl'
              }`}
              aria-label="Vídeo anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Indicadores de posição */}
            <div className="flex gap-2" role="tablist" aria-label="Navegação do carrossel">
              {Array.from({ length: Math.ceil(filteredVideos.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-letx-blue focus:ring-offset-1 ${
                    Math.floor(currentIndex / 3) === index
                      ? 'bg-letx-blue w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  role="tab"
                  aria-selected={Math.floor(currentIndex / 3) === index}
                  aria-label={`Ir para página ${index + 1} do carrossel`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= filteredVideos.length - 3}
              className={`p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-letx-blue focus:ring-offset-2 ${
                currentIndex >= filteredVideos.length - 3
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-letx-blue text-white hover:bg-letx-blue-dark shadow-lg hover:shadow-xl'
              }`}
              aria-label="Próximo vídeo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Container do Carrossel */}
          <div className="overflow-hidden" role="region" aria-live="polite">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / Math.min(3, filteredVideos.length))}%)`,
              }}
            >
              {filteredVideos.map((video) => {
                const videoId = extractYouTubeId(video.embedUrl);
                return (
                  <div 
                    key={video.id} 
                    className="min-w-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                    itemScope
                    itemType="https://schema.org/VideoObject"
                  >
                    <div
                      className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-letx-green-water/20 h-full"
                      onClick={() => handleVideoClick(video.embedUrl)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleVideoClick(video.embedUrl);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Assistir vídeo: ${video.title}`}
                    >
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={`Thumbnail do vídeo: ${video.title}`}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            // Tenta thumbnail alternativa
                            const fallbackUrl = generateFallbackThumbnail(videoId);
                            if (target.src !== fallbackUrl) {
                              target.src = fallbackUrl;
                            } else {
                              // Se ainda falhar, mostra placeholder
                              target.style.display = 'none';
                              const fallbackDiv = target.nextElementSibling as HTMLElement;
                              if (fallbackDiv) {
                                fallbackDiv.classList.remove('hidden');
                              }
                            }
                          }}
                          itemProp="thumbnailUrl"
                        />
                        
                        {/* Fallback placeholder */}
                        <div className="hidden bg-letx-green-water dark:bg-letx-blue h-48 flex items-center justify-center">
                          <div className="text-letx-green-dark dark:text-letx-neon">
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Overlay com Play Button */}
                        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white drop-shadow-2xl">
                            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Badge de Categoria */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-letx-blue/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                            {video.category}
                          </span>
                        </div>
                        
                        {/* Badge de Duração */}
                        <div className="absolute bottom-3 right-3">
                          <span className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-sm font-medium">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-letx-green-water mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm text-gray-500 dark:text-letx-green-water/70">
                            {video.views} visualizações
                          </span>
                        </div>
                        
                        <h3 
                          className="text-lg font-bold text-letx-green-dark dark:text-letx-neon mb-3 line-clamp-2"
                          itemProp="name"
                        >
                          {video.title}
                        </h3>
                        
                        <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                          <span>Assistir agora</span>
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Schema.org structured data */}
                      <meta itemProp="embedUrl" content={video.embedUrl} />
                      <meta itemProp="duration" content={video.duration} />
                      <meta itemProp="description" content={video.description} />
                      <meta itemProp="uploadDate" content="2024-01-01" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
