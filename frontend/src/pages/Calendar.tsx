import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventBadge from '../components/EventBadge';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaRunning, FaRulerHorizontal } from 'react-icons/fa';
import { eventsService } from '../services/eventsService';

interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  time?: string;
  city?: string;
  eventType?: string;
  distance?: string;
  featuredStandard?: boolean;
  featuredPremium?: boolean;
  featuredUltimate?: boolean;
}

const Calendar: FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDistance, setSelectedDistance] = useState('');
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const events = await eventsService.getEvents();
        // Convert AdminEvent to Event format
        const convertedEvents: Event[] = events.map(event => ({
          id: event.id,
          title: event.title,
          date: event.date,
          image: event.imageUrl || '/images/default-event.jpg',
          time: event.time,
          city: event.city,
          eventType: event.eventType,
          distance: event.distance,
          featuredStandard: event.featuredStandard,
          featuredPremium: event.featuredPremium,
          featuredUltimate: event.featuredUltimate,
        }));
        setAllEvents(convertedEvents);
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };

    loadEvents();
  }, []);

  // Mock events data as fallback
  const staticEvents: Event[] = [
    {
      id: 'static-1',
      title: 'CORRIDA KIDS TURMA DO DINOSSAURO',
      date: '18/09/2025',
      image: 'https://placehold.co/400x400/2434BA/CFF350?text=Corrida+Kids',
      featuredStandard: false,
      featuredPremium: false,
      featuredUltimate: false,
    },
    {
      id: 'static-2',
      title: 'I CORRIDA KIDS MINIMUNDO',
      date: '05/10/2025',
      image: 'https://placehold.co/400x400/2434BA/CFF350?text=Minimundo',
      featuredStandard: false,
      featuredPremium: false,
      featuredUltimate: false,
    },
    {
      id: 'static-3',
      title: 'CORRIDA',
      date: '05/10/2025',
      time: '20:00',
      image: 'https://placehold.co/400x400/2434BA/CFF350?text=Corrida',
      featuredStandard: false,
      featuredPremium: false,
      featuredUltimate: false,
    },
    {
      id: 'static-4',
      title: 'JANJAO',
      date: '17/07/2025',
      image: 'https://placehold.co/400x400/2434BA/CFF350?text=Janjao',
      featuredStandard: false,
      featuredPremium: false,
      featuredUltimate: false,
    },
  ];

  // Combine admin events with static events
  const allEventsCombined = [...allEvents, ...staticEvents];

  // Filter events based on search criteria
  const filteredEvents = allEventsCombined.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity =
      !selectedCity || event.city?.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesType =
      !selectedType || event.eventType === selectedType;
    const matchesDistance =
      !selectedDistance || event.distance === selectedDistance;

    return matchesSearch && matchesCity && matchesType && matchesDistance;
  });

  return (
    <div className="min-h-screen flex flex-col bg-letx-white dark:bg-letx-green-dark transition-colors duration-300">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Section with Search */}
        <section
          className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/calendar/calendario.png)',
            backgroundPosition: 'right center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-letx-neon drop-shadow-lg">
              {t('calendar.title', 'ENCONTRE SEU PRÓXIMO EVENTO')}
            </h1>
            <p className="text-xl mb-12 text-white text-center max-w-2xl drop-shadow-lg">
              {t('calendar.subtitle', 'Explore o Calendário Completo.')}
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-6xl bg-letx-blue-dark/95 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
              <div className="flex flex-col gap-6">
                {/* Search Input - Full width on top */}
                <div className="w-full relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10" />
                  <input
                    type="text"
                    placeholder={t('calendar.searchPlaceholder', 'Procurar corrida...')}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border-2 border-white/20 focus:outline-none focus:border-letx-neon transition-all duration-300 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filters Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* City Filter */}
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10" />
                    <input
                      type="text"
                      placeholder={t('calendar.cityPlaceholder', 'Digite a cidade...')}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border-2 border-white/20 focus:outline-none focus:border-letx-neon transition-all duration-300"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    />
                  </div>

                  {/* Event Type Filter */}
                  <div className="relative">
                    <FaRunning className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10" />
                    <select
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white border-2 border-white/20 focus:outline-none focus:border-letx-neon transition-all duration-300 appearance-none cursor-pointer"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option value="" className="bg-letx-blue-dark text-white">
                        {t('calendar.typePlaceholder', 'Selecione...')}
                      </option>
                      <option value="beach-tennis" className="bg-letx-blue-dark text-white">
                        Beach Tennis
                      </option>
                      <option value="caminhada" className="bg-letx-blue-dark text-white">
                        Caminhada
                      </option>
                      <option value="ciclismo" className="bg-letx-blue-dark text-white">
                        Ciclismo
                      </option>
                      <option value="corrida-rua" className="bg-letx-blue-dark text-white">
                        Corrida de Rua
                      </option>
                      <option value="kids" className="bg-letx-blue-dark text-white">
                        Kids
                      </option>
                      <option value="triathlon" className="bg-letx-blue-dark text-white">
                        Triathlon
                      </option>
                    </select>
                  </div>

                  {/* Distance Filter */}
                  <div className="relative">
                    <FaRulerHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10" />
                    <select
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white border-2 border-white/20 focus:outline-none focus:border-letx-neon transition-all duration-300 appearance-none cursor-pointer"
                      value={selectedDistance}
                      onChange={(e) => setSelectedDistance(e.target.value)}
                    >
                      <option value="" className="bg-letx-blue-dark text-white">
                        {t('calendar.distancePlaceholder', 'Selecione...')}
                      </option>
                      <option value="5k" className="bg-letx-blue-dark text-white">
                        5km
                      </option>
                      <option value="10k" className="bg-letx-blue-dark text-white">
                        10km
                      </option>
                      <option value="21k" className="bg-letx-blue-dark text-white">
                        21km
                      </option>
                      <option value="42k" className="bg-letx-blue-dark text-white">
                        42km
                      </option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-center">
                  <button
                    className="bg-letx-neon hover:bg-letx-neon/90 text-letx-blue-dark font-bold py-4 px-12 rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    onClick={() => {
                      // Button functionality can be added here if needed
                      console.log('Search clicked');
                    }}
                  >
                    {t('calendar.searchButton', 'PESQUISAR')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 flex-1">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-letx-green-dark dark:text-letx-neon">
              {t('calendar.bestEvents', 'MELHORES EVENTOS!')}
            </h2>

            {allEvents.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 py-12">
                {t('calendar.noEvents', 'Nenhum evento encontrado com os filtros selecionados.')}
              </div>
            )}
            {filteredEvents.map(event => (
              <div
                key={event.id}
                className="bg-letx-blue-dark rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="relative aspect-square">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <div className="flex items-center text-letx-neon gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{event.date}</span>
                        {event.time && <span className="ml-2">{event.time}</span>}
                      </div>
                      {event.city && (
                        <div className="flex items-center text-letx-green-water gap-2 mt-1">
                          <FaMapMarkerAlt className="w-3 h-3" />
                          <span className="text-sm">{event.city}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Badge de destaque no canto superior esquerdo */}
                  <div className="absolute top-3 left-3">
                    <EventBadge 
                      featuredStandard={event.featuredStandard}
                      featuredPremium={event.featuredPremium}
                      featuredUltimate={event.featuredUltimate}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;
