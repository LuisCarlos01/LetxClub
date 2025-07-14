import { FC } from 'react';

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
      views: '2.1M'
    },
    {
      id: '2', 
      title: 'Técnica de Corrida: Como Melhorar sua Postura e Passada',
      thumbnail: 'https://img.youtube.com/vi/zSIDRHUWlVo/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/zSIDRHUWlVo',
      duration: '8:45',
      category: 'Técnica',
      views: '850K'
    },
    {
      id: '3',
      title: 'Nutrição para Corredores: O que Comer Antes e Depois da Corrida',
      thumbnail: 'https://img.youtube.com/vi/Phl82D57P58/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/Phl82D57P58',
      duration: '15:20',
      category: 'Nutrição',
      views: '1.5M'
    }
  ];

  const handleVideoClick = (embedUrl: string) => {
    window.open(embedUrl.replace('/embed/', '/watch?v='), '_blank');
  };

  return (
    <section className="py-16 bg-[#CFF350] dark:bg-letx-green-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-letx-green-dark dark:text-letx-neon mb-4">
            Vídeos sobre Corrida
          </h2>
          <p className="text-gray-600 dark:text-letx-green-water text-lg max-w-2xl mx-auto">
            Aprenda técnicas e dicas essenciais para melhorar sua performance na corrida de rua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(video => (
            <div
              key={video.id}
              className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-letx-green-water/20"
              onClick={() => handleVideoClick(video.embedUrl)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    // Fallback se a thumbnail não carregar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden bg-letx-green-water dark:bg-letx-blue h-48 flex items-center justify-center">
                  <div className="text-letx-green-dark dark:text-letx-neon">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Overlay com Play Button */}
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white drop-shadow-2xl">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
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
                  <svg className="w-4 h-4 text-gray-500 dark:text-letx-green-water mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-letx-green-water/70">{video.views} visualizações</span>
                </div>
                <h3 className="text-lg font-bold text-letx-green-dark dark:text-letx-neon mb-3 line-clamp-2">
                  {video.title}
                </h3>
                <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline font-medium transition-colors">
                  <span>Assistir agora</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos; 