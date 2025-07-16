import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import YouTubeVideos from '../components/YouTubeVideos';
import AceBanner from '../components/AceBanner';
import NewsletterCard from '../components/NewsletterCard';
import TipsCard from '../components/TipsCard';

interface TipData {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
  rating: number;
  readTime: string;
  gradientFrom: string;
  gradientTo: string;
  image?: string;
}

const Tips: FC = () => {
  const tipsData: TipData[] = [
    {
      id: '1',
      title: 'Guia Completo para Iniciantes',
      description:
        'Tudo o que você precisa saber para começar a correr de forma segura e eficiente. Desde a escolha do tênis até seu primeiro treino.',
      badge: 'Iniciante',
      icon: 'lightning',
      rating: 4,
      readTime: '10 min',
      gradientFrom: 'from-letx-green-water',
      gradientTo: 'to-letx-blue',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    },
    {
      id: '2',
      title: 'Equipamentos Essenciais',
      description:
        'Descubra quais equipamentos realmente fazem a diferença na sua corrida. Guia completo de acessórios, tênis e roupas.',
      badge: 'Equipamento',
      icon: 'shopping',
      rating: 4,
      readTime: '15 min',
      gradientFrom: 'from-letx-blue',
      gradientTo: 'to-letx-green-water',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=600&fit=crop',
    },
    {
      id: '3',
      title: 'Psicologia da Corrida',
      description:
        'Como manter a motivação, superar barreiras mentais e desenvolver a mentalidade de um corredor consistente.',
      badge: 'Psicologia',
      icon: 'lightbulb',
      rating: 4,
      readTime: '8 min',
      gradientFrom: 'from-letx-orange',
      gradientTo: 'to-letx-green-water',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop',
    },
    {
      id: '4',
      title: 'Recuperação e Descanso',
      description:
        'Estratégias eficazes para recuperação pós-treino, importância do sono e como evitar lesões por overtraining.',
      badge: 'Recuperação',
      icon: 'heart',
      rating: 4,
      readTime: '12 min',
      gradientFrom: 'from-letx-neon',
      gradientTo: 'to-letx-blue',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    },
    {
      id: '5',
      title: 'Treino para Maratona',
      description:
        'Plano completo de preparação para maratona, incluindo periodização, nutrição específica e estratégias de prova.',
      badge: 'Avançado',
      icon: 'chart',
      rating: 5,
      readTime: '20 min',
      gradientFrom: 'from-letx-green-dark',
      gradientTo: 'to-letx-blue',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
    },
    {
      id: '6',
      title: 'Corrida em Diferentes Climas',
      description:
        'Dicas essenciais para correr no calor, frio, chuva e altitude. Adaptações necessárias para cada condição climática.',
      badge: 'Clima',
      icon: 'cloud',
      rating: 4,
      readTime: '6 min',
      gradientFrom: 'from-letx-blue-dark',
      gradientTo: 'to-letx-neon',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    },
    {
      id: '7',
      title: 'Nutrição Esportiva',
      description:
        'Guia completo sobre alimentação para corredores: o que comer antes, durante e após os treinos e provas.',
      badge: 'Nutrição',
      icon: 'trash',
      rating: 4,
      readTime: '14 min',
      gradientFrom: 'from-letx-orange/80',
      gradientTo: 'to-letx-blue',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    },
    {
      id: '8',
      title: 'Técnica de Corrida',
      description:
        'Aprenda a técnica correta de corrida: postura, pisada, cadência e respiração para maior eficiência e menos lesões.',
      badge: 'Técnica',
      icon: 'clock',
      rating: 4,
      readTime: '18 min',
      gradientFrom: 'from-letx-green-water/80',
      gradientTo: 'to-letx-green-dark',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=800&h=600&fit=crop',
    },
  ];

  const handleCardClick = (id: string) => {
    // TODO: Implementar navegação para página de detalhes do tip
    console.log(`Clicou no tip ${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-letx-white dark:bg-letx-green-dark transition-colors duration-300">
      <Header />
      <main className="flex-1">
        {/* Hero Section para Dicas */}
        <section 
          className="relative bg-letx-green-water dark:bg-letx-blue py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/tips/pgdicas.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-letx-neon mb-6 drop-shadow-2xl">
                Dicas de Corrida
              </h1>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-xl">
                Descubra técnicas, estratégias e conhecimentos essenciais para melhorar sua
                performance e aproveitar ao máximo cada corrida
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
              {tipsData.map(tip => (
                <TipsCard
                  key={tip.id}
                  title={tip.title}
                  description={tip.description}
                  badge={tip.badge}
                  icon={tip.icon}
                  rating={tip.rating}
                  readTime={tip.readTime}
                  gradientFrom={tip.gradientFrom}
                  gradientTo={tip.gradientTo}
                  image={tip.image}
                  onClick={() => handleCardClick(tip.id)}
                />
              ))}
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
