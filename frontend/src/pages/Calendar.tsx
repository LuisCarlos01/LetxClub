import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  time?: string;
}

const Calendar: FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock events data - This would typically come from an API
  const events: Event[] = [
    {
      id: '1',
      title: 'CORRIDA KIDS TURMA DO DINOSSAURO',
      date: '18/09/2025',
      // Temporarily using a placeholder image
      image: 'https://placehold.co/400x400/2434BA/CFF350?text=Corrida+Kids',
    },
    {
      id: '2',
      title: 'I CORRIDA KIDS MINIMUNDO',
      date: '05/10/2025',
      image: 'https://placehold.co/400x400/2434BA/CFF350?text=Minimundo',
    },
    {
      id: '3',
      title: 'CORRIDA',
      date: '05/10/2025',
      time: '20:00',
      image: 'https://placehold.co/400x400/2434BA/CFF350?text=Corrida',
    },
    {
      id: '4',
      title: 'JANJAO',
      date: '17/07/2025',
      image: 'https://placehold.co/400x400/2434BA/CFF350?text=Janjao',
    },
  ];

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-letx-white dark:bg-letx-green-dark transition-colors duration-300">
      <Header />

      {/* Hero Section with Search */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/calendar/calendario.png)',
          backgroundPosition: 'right center',
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-letx-neon">
            {t('calendar.title', 'ENCONTRE SEU PRÓXIMO EVENTO')}
          </h1>
          <p className="text-xl mb-8 text-white">
            {t('calendar.subtitle', 'Explore o Calendário Completo.')}
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-letx-blue-dark/90 p-4 rounded-2xl flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t('calendar.searchPlaceholder', 'Procurar corrida...')}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-letx-neon"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:w-auto w-full">
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select
                  className="pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-letx-neon min-w-[150px] appearance-none cursor-pointer"
                  value={selectedCity}
                  onChange={e => setSelectedCity(e.target.value)}
                >
                  <option value="">{t('calendar.cityPlaceholder', 'Cidade')}</option>
                  <option value="porto-alegre">Porto Alegre</option>
                  <option value="canoas">Canoas</option>
                  <option value="gramado">Gramado</option>
                </select>
              </div>

              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select
                  className="pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-letx-neon min-w-[150px] appearance-none cursor-pointer"
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                >
                  <option value="">{t('calendar.typePlaceholder', 'Tipo')}</option>
                  <option value="5k">5K</option>
                  <option value="10k">10K</option>
                  <option value="21k">21K</option>
                  <option value="42k">42K</option>
                </select>
              </div>

              <button
                className={`px-6 py-2 bg-letx-neon text-letx-blue-dark font-bold rounded-lg hover:bg-letx-green-water transition-all duration-300 flex items-center justify-center ${isLoading ? 'opacity-75 cursor-wait' : ''}`}
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-letx-blue-dark border-t-transparent rounded-full animate-spin mr-2" />
                ) : null}
                {t('calendar.searchButton', 'PESQUISAR')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-letx-green-dark dark:text-letx-neon">
            {t('calendar.bestEvents', 'MELHORES EVENTOS!')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map(event => (
              <div
                key={event.id}
                className="bg-letx-blue-dark rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="relative aspect-square">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <div className="flex items-center text-letx-neon gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{event.date}</span>
                        {event.time && <span className="ml-2">{event.time}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calendar;
