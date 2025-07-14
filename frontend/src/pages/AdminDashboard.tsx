import { FC, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { FaPlus, FaCalendarAlt, FaUser, FaCrown, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const AdminDashboard: FC = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'events' | 'profile'>('events');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const mockEvents = [
    {
      id: '1',
      title: 'Corrida de São Paulo',
      city: 'São Paulo',
      date: '2024-01-15',
      eventType: 'Street',
      sponsored: true
    },
    {
      id: '2',
      title: 'Trail do Parque',
      city: 'Rio de Janeiro',
      date: '2024-01-20',
      eventType: 'Trail',
      sponsored: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {sidebarOpen ? <FaTimes /> : <FaBars />}
              </button>
              <h1 className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                {t('admin.dashboard.title', 'Painel Administrativo')}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <FaUser className="w-4 h-4" />
                <span className="text-sm">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
              >
                <FaSignOutAlt className="w-4 h-4" />
                <span className="text-sm">{t('admin.dashboard.logout', 'Sair')}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out lg:transition-none`}>
          <div className="p-6 pt-20 lg:pt-6">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('events')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'events'
                    ? 'bg-letx-blue text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <FaCalendarAlt className="w-5 h-5" />
                <span>{t('admin.dashboard.myEvents', 'Minhas Corridas')}</span>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-letx-blue text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <FaUser className="w-5 h-5" />
                <span>{t('admin.dashboard.profile', 'Perfil')}</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {activeTab === 'events' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('admin.dashboard.myEvents', 'Minhas Corridas')}
                </h2>
                <button className="bg-letx-blue hover:bg-letx-blue-dark text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <FaPlus className="w-4 h-4" />
                  <span>{t('admin.dashboard.newEvent', 'Nova Corrida')}</span>
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          {t('admin.dashboard.table.event', 'Evento')}
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          {t('admin.dashboard.table.city', 'Cidade')}
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          {t('admin.dashboard.table.date', 'Data')}
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          {t('admin.dashboard.table.status', 'Status')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {mockEvents.map((event) => (
                        <tr key={event.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {event.title}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {event.eventType}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {event.city}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {new Date(event.date).toLocaleDateString('pt-BR')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {event.sponsored ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                                <FaCrown className="w-3 h-3 mr-1" />
                                {t('admin.dashboard.sponsored', 'Patrocinado')}
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                {t('admin.dashboard.active', 'Ativo')}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('admin.dashboard.profile', 'Perfil')}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-letx-blue rounded-full flex items-center justify-center">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {user?.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('admin.dashboard.profileInfo', 'Informações do perfil serão expandidas em versões futuras.')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard; 