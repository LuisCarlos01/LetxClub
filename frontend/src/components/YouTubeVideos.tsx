import { FC, useState, useRef } from 'react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
  duration: string;
  category: string;
  views: string;
}

const YouTubeVideos: FC = () => {
  const videos: Video[] = [
    {
      id: '1',
      title: 'Como Começar a Correr: Guia Completo para Iniciantes',
      thumbnail: 'https://img.youtube.com/vi/kVnyY17VS9Y/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/kVnyY17VS9Y',
      duration: '12:30',
      category: 'Iniciantes',
      views: '2.1M',
    },
    {
      id: '2',
      title: 'Técnica de Corrida: Como Melhorar sua Postura e Passada',
      thumbnail: 'https://img.youtube.com/vi/zSIDRHUWlVo/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/zSIDRHUWlVo',
      duration: '8:45',
      category: 'Técnica',
      views: '850K',
    },
    {
      id: '3',
      title: 'Nutrição para Corredores: O que Comer Antes e Depois da Corrida',
      thumbnail: 'https://img.youtube.com/vi/Phl82D57P58/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/Phl82D57P58',
      duration: '15:20',
      category: 'Nutrição',
      views: '1.5M',
    },
    {
      id: '4',
      title: 'Treino de Intervalos: Como Melhorar sua Velocidade na Corrida',
      thumbnail: 'https://img.youtube.com/vi/LUAzBpVtbRY/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/LUAzBpVtbRY',
      duration: '10:15',
      category: 'Treino',
      views: '723K',
    },
    {
      id: '5',
      title: 'Prevenção de Lesões: Aquecimento e Alongamento para Corredores',
      thumbnail: 'https://img.youtube.com/vi/3RBZudUgmSs/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/3RBZudUgmSs',
      duration: '14:30',
      category: 'Prevenção',
      views: '1.1M',
    },
    {
      id: '6',
      title: 'Respiração na Corrida: Técnicas para Melhorar sua Performance',
      thumbnail: 'https://img.youtube.com/vi/bBYOOCANdHQ/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/bBYOOCANdHQ',
      duration: '7:45',
      category: 'Técnica',
      views: '945K',
    },
    {
      id: '7',
      title: 'Corrida Matinal: Benefícios e Dicas para Começar o Dia Correndo',
      thumbnail: 'https://img.youtube.com/vi/Q6gZlq5FLEM/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/Q6gZlq5FLEM',
      duration: '9:20',
      category: 'Motivação',
      views: '567K',
    },
    {
      id: '8',
      title: 'Como Escolher o Tênis Ideal para Corrida de Rua',
      thumbnail: 'https://img.youtube.com/vi/5fVnSCJFmRY/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/5fVnSCJFmRY',
      duration: '11:10',
      category: 'Equipamentos',
      views: '1.3M',
    },
    {
      id: '9',
      title: 'Corrida de 5K: Plano de Treino Completo para Iniciantes',
      thumbnail: 'https://img.youtube.com/vi/kHNiIRJiIFQ/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/kHNiIRJiIFQ',
      duration: '16:40',
      category: 'Treino',
      views: '892K',
    },
  ];

  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 384; // w-96 = 384px
      const gap = 32; // gap-8 = 32px
      const scrollLeft = index * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setCurrentIndex(0);
  };

  return (
    <section className="py-16 bg-[#CFF350] dark:bg-letx-green-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-letx-green-dark dark:text-letx-neon mb-4">
            Vídeos sobre Corrida
          </h2>
          <p className="text-gray-600 dark:text-letx-green-water text-lg max-w-2xl mx-auto mb-8">
            Aprenda técnicas e dicas essenciais para melhorar sua performance na corrida de rua
          </p>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-letx-blue text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-letx-blue-dark text-letx-green-dark dark:text-letx-neon border border-letx-green-water/30 hover:bg-letx-green-water/10 hover:scale-105'
                }`}
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
              className={`p-3 rounded-full transition-all duration-300 ${
                currentIndex === 0
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-letx-blue text-white hover:bg-letx-blue-dark shadow-lg hover:shadow-xl'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Indicadores de posição */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(filteredVideos.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === index
                      ? 'bg-letx-blue w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= filteredVideos.length - 3}
              className={`p-3 rounded-full transition-all duration-300 ${
                currentIndex >= filteredVideos.length - 3
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-letx-blue text-white hover:bg-letx-blue-dark shadow-lg hover:shadow-xl'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / Math.min(3, filteredVideos.length))}%)`,
              }}
            >
              {filteredVideos.map(video => (
                <div key={video.id} className="min-w-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                  <div
                    className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-letx-green-water/20 h-full"
                    onClick={() => handleVideoClick(video.embedUrl)}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden bg-letx-green-water dark:bg-letx-blue h-48 flex items-center justify-center">
                        <div className="text-letx-green-dark dark:text-letx-neon">
                          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      {/* Overlay com Play Button */}
                      <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white drop-shadow-2xl">
                          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
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
                      <h3 className="text-lg font-bold text-letx-green-dark dark:text-letx-neon mb-3 line-clamp-2">
                        {video.title}
                      </h3>
                      <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                        <span>Assistir agora</span>
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
