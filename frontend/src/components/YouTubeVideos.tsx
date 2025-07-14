import { FC } from 'react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
}

const YouTubeVideos: FC = () => {
  const videos: Video[] = [
    {
      id: '1',
      title: 'Como Começar a Correr: Guia Completo para Iniciantes',
      thumbnail: 'https://img.youtube.com/vi/kVnyY17VS9Y/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/kVnyY17VS9Y'
    },
    {
      id: '2', 
      title: 'Técnica de Corrida: Como Melhorar sua Postura e Passada',
      thumbnail: 'https://img.youtube.com/vi/zSIDRHUWlVo/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/zSIDRHUWlVo'
    },
    {
      id: '3',
      title: 'Nutrição para Corredores: O que Comer Antes e Depois da Corrida',
      thumbnail: 'https://img.youtube.com/vi/Phl82D57P58/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/Phl82D57P58'
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
              className="bg-letx-white dark:bg-letx-blue-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-letx-green-dark dark:text-letx-neon mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <button className="inline-flex items-center text-letx-blue dark:text-letx-neon hover:underline transition-colors">
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