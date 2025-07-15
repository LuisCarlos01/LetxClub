import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaTimes,
  FaCreditCard,
  FaLock,
  FaCheckCircle,
  FaSpinner,
} from 'react-icons/fa';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  eventTitle: string;
  featuredType: string;
  price: number;
}

const PaymentModal: FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  eventTitle,
  featuredType,
  price,
}) => {
  const { t } = useTranslation();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simular processamento de pagamento
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Aguardar 2 segundos e fechar o modal
      setTimeout(() => {
        onSuccess();
        onClose();
        setIsSuccess(false);
        setPaymentData({
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          cardName: '',
        });
      }, 2000);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            <FaCreditCard className="inline w-5 h-5 mr-2" />
            {t('payment.title', 'Pagamento do Destaque')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t('payment.success', 'Pagamento Realizado!')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('payment.successMessage', 'Seu evento será destacado em breve.')}
              </p>
            </div>
          ) : (
            <>
              {/* Resumo do Pedido */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t('payment.orderSummary', 'Resumo do Pedido')}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('payment.event', 'Evento')}:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {eventTitle}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('payment.featured', 'Destaque')}:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {featuredType}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 dark:border-gray-600 pt-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {t('payment.total', 'Total')}:
                    </span>
                    <span className="font-bold text-letx-blue">
                      R$ {price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Formulário de Pagamento */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('payment.cardNumber', 'Número do Cartão')}
                  </label>
                  <input
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={e => setPaymentData(prev => ({ ...prev, cardNumber: e.target.value }))}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('payment.expiryDate', 'Validade')}
                    </label>
                    <input
                      type="text"
                      value={paymentData.expiryDate}
                      onChange={e => setPaymentData(prev => ({ ...prev, expiryDate: e.target.value }))}
                      placeholder="MM/AA"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('payment.cvv', 'CVV')}
                    </label>
                    <input
                      type="text"
                      value={paymentData.cvv}
                      onChange={e => setPaymentData(prev => ({ ...prev, cvv: e.target.value }))}
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('payment.cardName', 'Nome no Cartão')}
                  </label>
                  <input
                    type="text"
                    value={paymentData.cardName}
                    onChange={e => setPaymentData(prev => ({ ...prev, cardName: e.target.value }))}
                    placeholder="João Silva"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <FaLock className="w-4 h-4 mr-2" />
                  {t('payment.secure', 'Transação segura e criptografada')}
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-letx-blue hover:bg-letx-blue-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isProcessing ? (
                    <>
                      <FaSpinner className="animate-spin w-5 h-5 mr-2" />
                      {t('payment.processing', 'Processando...')}
                    </>
                  ) : (
                    <>
                      <FaCreditCard className="w-5 h-5 mr-2" />
                      {t('payment.payNow', 'Pagar Agora')} - R$ {price}
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal; 