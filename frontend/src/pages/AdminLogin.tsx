import { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { FaGoogle, FaLock } from 'react-icons/fa';

const AdminLogin: FC = () => {
  const { t } = useTranslation();
  const { login, isAuthenticated, isLoading } = useAuth();
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      // TODO: Implementar OAuth 2.0 com Google
      // Por enquanto, simular login bem-sucedido
      await login('mock_token_123');
    } catch (error) {
      console.error('Erro no login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-letx-neon via-[#CFF350] to-letx-blue dark:from-gray-900 dark:via-letx-blue-dark dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-letx-blue p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FaLock className="text-white text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t('admin.login.title', 'Área Administrativa')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {t('admin.login.subtitle', 'Acesse o painel de controle do LetxClub')}
            </p>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading || isLoading}
            className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl py-3 px-6 flex items-center justify-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-letx-blue"></div>
            ) : (
              <FaGoogle className="text-red-500 text-xl" />
            )}
            <span className="text-gray-900 dark:text-white font-medium">
              {loading 
                ? t('admin.login.loading', 'Autenticando...')
                : t('admin.login.googleButton', 'Entrar com Google')
              }
            </span>
          </button>

          {/* Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('admin.login.info', 'Apenas administradores autorizados podem acessar')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 