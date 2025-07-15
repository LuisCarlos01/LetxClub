import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventBadge from '../components/EventBadge';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { eventsService, Event as AdminEvent } from '../services/eventsService';

interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  time?: string;
  city?: string;
  eventType?: string;
  featuredStandard?: boolean;
  featuredPremium?: boolean;
  featuredUltimate?: boolean;
}

const Calendar: FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [adminEvents, setAdminEvents] = useState<AdminEvent[]>([]);
  const [loading, setLoading] = useState(true);

  // Load events from admin service and subscribe to updates
  useEffect(() => {
    const loadAdminEvents = async () => {
      try {
        const events = await eventsService.getEvents();
        setAdminEvents(events);
      } catch (error) {
        console.error('Erro ao carregar eventos do admin:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAdminEvents();

    // Subscribe to events changes for real-time updates
    const unsubscribe = eventsService.subscribeToEvents(events => {
      setAdminEvents(events);
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
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

  // Convert admin events to display format
  const convertAdminEvent = (adminEvent: AdminEvent): Event => ({
    id: adminEvent.id,
    title: adminEvent.title,
    date: new Date(adminEvent.date).toLocaleDateString('pt-BR'),
    image:
      adminEvent.imageUrl ||
      `https://placehold.co/400x400/2434BA/CFF350?text=${encodeURIComponent(adminEvent.title)}`,
    time: adminEvent.time || undefined,
    city: adminEvent.city,
    eventType: adminEvent.eventType,
    featuredStandard: adminEvent.featuredStandard === true,
    featuredPremium: adminEvent.featuredPremium === true,
    featuredUltimate: adminEvent.featuredUltimate === true,
  });

  // Combine admin events with static events
  const allEvents = [...adminEvents.map(convertAdminEvent), ...staticEvents];

  // Filter events based on search criteria
  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity =
      !selectedCity || event.city?.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesType =
      !selectedType || event.eventType?.toLowerCase().includes(selectedType.toLowerCase());

    return matchesSearch && matchesCity && matchesType;
  });

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

      <main className="flex-1 flex flex-col">
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
                  <input
                    type="text"
                    placeholder={t('calendar.cityPlaceholder', 'Digite a cidade...')}
                    className="pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:border-letx-neon focus:ring-2 focus:ring-letx-neon/20 min-w-[150px]"
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                  />
                </div>

                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    className="pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:border-letx-neon focus:ring-2 focus:ring-letx-neon/20 min-w-[150px] appearance-none cursor-pointer"
                    value={selectedType}
                    onChange={e => setSelectedType(e.target.value)}
                  >
                    <option value="">{t('calendar.typePlaceholder', 'Tipo')}</option>
                    <option value="5k">5K</option>
                    <option value="10k">10K</option>
                    <option value="21k">21K</option>
                    <option value="42k">42K</option>
                    <option value="street">Street</option>
                    <option value="trail">Trail</option>
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
        <section className="py-12 flex-1">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-letx-green-dark dark:text-letx-neon">
              {t('calendar.bestEvents', 'MELHORES EVENTOS!')}
            </h2>

            {loading ? (
              <div className="text-center text-letx-green-dark dark:text-letx-neon">
                Carregando eventos...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            )}

            {!loading && filteredEvents.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 py-12">
                {t('calendar.noEvents', 'Nenhum evento encontrado com os filtros selecionados.')}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;
