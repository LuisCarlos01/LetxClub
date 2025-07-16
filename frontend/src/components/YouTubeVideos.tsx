import { FC, useState } from 'react';

interface Video {
  id: string;
  title: string;
  videoId: string;
  duration: string;
  category: string;
  views: string;
  description: string;
  publishedAt: string;
}

const YouTubeVideos: FC = () => {
  const videos: Video[] = [
    {
      id: '1',
      title: 'Como Começar a Correr: Guia Completo para Iniciantes',
      videoId: 'kVnyY17VS9Y',
      duration: '12:30',
      category: 'Iniciantes',
      views: '2.1M',
      description: 'Aprenda os fundamentos básicos para começar a correr de forma segura e eficiente.',
      publishedAt: '2024-01-15',
    },
    {
      id: '2',
      title: 'Técnica de Corrida: Como Melhorar sua Postura e Passada',
      videoId: 'zSIDRHUWlVo',
      duration: '8:45',
      category: 'Técnica',
      views: '850K',
      description: 'Descubra as técnicas corretas de postura e passada para correr com mais eficiência.',
      publishedAt: '2024-01-20',
    },
    {
      id: '3',
      title: 'Nutrição para Corredores: O que Comer Antes e Depois da Corrida',
      videoId: 'Phl82D57P58',
      duration: '15:20',
      category: 'Nutrição',
      views: '1.5M',
      description: 'Guia completo sobre alimentação adequada para otimizar sua performance na corrida.',
      publishedAt: '2024-01-25',
    },
    {
      id: '4',
      title: 'Treino de Intervalos: Como Melhorar sua Velocidade na Corrida',
      videoId: 'LUAzBpVtbRY',
      duration: '10:15',
      category: 'Treino',
      views: '723K',
      description: 'Aprenda métodos de treino intervalado para aumentar sua velocidade e resistência.',
      publishedAt: '2024-02-01',
    },
    {
      id: '5',
      title: 'Prevenção de Lesões: Aquecimento e Alongamento para Corredores',
      videoId: '3RBZudUgmSs',
      duration: '14:30',
      category: 'Prevenção',
      views: '1.1M',
      description: 'Técnicas essenciais de aquecimento e alongamento para prevenir lesões na corrida.',
      publishedAt: '2024-02-05',
    },
    {
      id: '6',
      title: 'Respiração na Corrida: Técnicas para Melhorar sua Performance',
      videoId: 'bBYOOCANdHQ',
      duration: '7:45',
      category: 'Técnica',
      views: '945K',
      description: 'Domine as técnicas de respiração para correr com mais conforto e eficiência.',
      publishedAt: '2024-02-10',
    },
    {
      id: '7',
      title: 'Corrida Matinal: Benefícios e Dicas para Começar o Dia Correndo',
      videoId: 'Q6gZlq5FLEM',
      duration: '9:20',
      category: 'Motivação',
      views: '567K',
      description: 'Descubra os benefícios da corrida matinal e como incorporá-la na sua rotina.',
      publishedAt: '2024-02-15',
    },
    {
      id: '8',
      title: 'Como Escolher o Tênis Ideal para Corrida de Rua',
      videoId: '5fVnSCJFmRY',
      duration: '11:10',
      category: 'Equipamentos',
      views: '1.3M',
      description: 'Guia completo para escolher o tênis perfeito para seu tipo de pisada e corrida.',
      publishedAt: '2024-02-20',
    },
    {
      id: '9',
      title: 'Corrida de 5K: Plano de Treino Completo para Iniciantes',
      videoId: 'kHNiIRJiIFQ',
      duration: '16:40',
      category: 'Treino',
      views: '892K',
      description: 'Plano estruturado de treino para completar seus primeiros 5 quilômetros.',
      publishedAt: '2024-02-25',
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

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const handleKeyDown = (event: React.KeyboardEvent, videoId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleVideoClick(videoId);
    }
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

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getVideoIcon = (category: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'Iniciantes': (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3L4 14h6v7h6v-7h6L13 3z"/>
        </svg>
      ),
      'Técnica': (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
        </svg>
      ),
      'Nutrição': (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      'Treino': (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
        </svg>
      ),
      'Prevenção': (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      'Motivação': (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2L13.09,8.26L20,9L13.09,9.74L12,16L10.91,9.74L4,9L10.91,8.26L12,2Z"/>
        </svg>
      ),
      'Equipamentos': (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.5,3C19,3 21,5 21,7.5C21,10 19,12 16.5,12C14,12 12,10 12,7.5C12,5 14,3 16.5,3M10,17L16,11V15H22V19H16V23L10,17Z"/>
        </svg>
      ),
    };
    return iconMap[category] || iconMap['Técnica'];
  };

  return (
    <section className="py-16 bg-gradient-to-br from-letx-green-water/10 to-letx-blue/10 dark:from-letx-green-dark dark:to-letx-blue-dark/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section com SEO otimizado */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-letx-green-dark to-letx-blue bg-clip-text text-transparent dark:from-letx-neon dark:to-letx-green-water mb-4">
            Vídeos sobre Corrida
          </h2>
          <p className="text-gray-600 dark:text-letx-green-water text-lg max-w-2xl mx-auto mb-8">
            Aprenda técnicas e dicas essenciais para melhorar sua performance na corrida de rua
          </p>

          {/* Filtros de Categoria com acessibilidade */}
          <nav aria-label="Filtros de categoria de vídeos" className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  aria-pressed={activeFilter === category}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-letx-blue/50 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-letx-blue to-letx-green-water text-white shadow-lg scale-105 ring-2 ring-letx-blue/30'
                      : 'bg-white/80 dark:bg-letx-blue-dark/50 text-letx-green-dark dark:text-letx-neon border border-letx-green-water/30 hover:bg-letx-green-water/10 hover:border-letx-green-water/50 backdrop-blur-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>
        </header>

        {/* Contador de resultados */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-letx-green-water text-sm">
            {filteredVideos.length} vídeo{filteredVideos.length !== 1 ? 's' : ''} encontrado{filteredVideos.length !== 1 ? 's' : ''}
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
              aria-label="Vídeo anterior"
              className={`p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-letx-blue/50 ${
                currentIndex === 0
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-letx-blue to-letx-green-water text-white hover:shadow-lg hover:scale-110 transform'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicadores de posição */}
            <div className="flex gap-2" role="tablist" aria-label="Indicadores de posição do carrossel">
              {Array.from({ length: Math.ceil(filteredVideos.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  role="tab"
                  aria-selected={Math.floor(currentIndex / 3) === index}
                  aria-label={`Ir para página ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-letx-blue/50 ${
                    Math.floor(currentIndex / 3) === index
                      ? 'bg-gradient-to-r from-letx-blue to-letx-green-water w-8'
                      : 'bg-gray-300 dark:bg-gray-600 w-2 hover:bg-letx-blue/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= filteredVideos.length - 3}
              aria-label="Próximo vídeo"
              className={`p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-letx-blue/50 ${
                currentIndex >= filteredVideos.length - 3
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-letx-blue to-letx-green-water text-white hover:shadow-lg hover:scale-110 transform'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Container do Carrossel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / Math.min(3, filteredVideos.length))}%)`,
              }}
            >
              {filteredVideos.map((video, index) => (
                <article
                  key={video.id}
                  className="min-w-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                  itemScope
                  itemType="https://schema.org/VideoObject"
                >
                  <div
                    className="group bg-white/80 dark:bg-letx-blue-dark/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-letx-green-water/20 h-full transform hover:scale-105 hover:border-letx-green-water/40"
                    onClick={() => handleVideoClick(video.videoId)}
                    onKeyDown={(e) => handleKeyDown(e, video.videoId)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Assistir vídeo: ${video.title}`}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={getThumbnailUrl(video.videoId)}
                        alt={`Thumbnail do vídeo: ${video.title}`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        itemProp="thumbnailUrl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const fallback = target.nextElementSibling as HTMLElement;
                          target.style.display = 'none';
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      
                      {/* Fallback para thumbnail */}
                      <div 
                        className="hidden bg-gradient-to-br from-letx-green-water to-letx-blue h-48 items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <div className="text-white/80 text-center">
                          {getVideoIcon(video.category)}
                          <p className="mt-2 text-sm font-medium">{video.category}</p>
                        </div>
                      </div>

                      {/* Overlay com Play Button */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Badge de Categoria */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-letx-blue/90 to-letx-green-water/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
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
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm text-gray-500 dark:text-letx-green-water/70">
                            {video.views} visualizações
                          </span>
                        </div>
                        <time 
                          className="text-xs text-gray-400 dark:text-letx-green-water/50"
                          dateTime={video.publishedAt}
                          itemProp="uploadDate"
                        >
                          {new Date(video.publishedAt).toLocaleDateString('pt-BR')}
                        </time>
                      </div>

                      <h3 
                        className="text-lg font-bold text-letx-green-dark dark:text-letx-neon mb-2 line-clamp-2 group-hover:text-letx-blue dark:group-hover:text-letx-green-water transition-colors duration-300"
                        itemProp="name"
                      >
                        {video.title}
                      </h3>

                      <p 
                        className="text-sm text-gray-600 dark:text-letx-green-water/80 mb-4 line-clamp-2"
                        itemProp="description"
                      >
                        {video.description}
                      </p>

                      <button 
                        className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:text-letx-green-water dark:hover:text-letx-green-water font-medium transition-colors duration-300 group-hover:translate-x-1 transform"
                        aria-label={`Assistir vídeo: ${video.title}`}
                      >
                        <span>Assistir agora</span>
                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Dados estruturados para SEO */}
                  <meta itemProp="duration" content={video.duration} />
                  <meta itemProp="embedUrl" content={`https://www.youtube.com/embed/${video.videoId}`} />
                  <meta itemProp="contentUrl" content={`https://www.youtube.com/watch?v=${video.videoId}`} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
