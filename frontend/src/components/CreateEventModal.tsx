import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaTimes,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaImage,
  FaRunning,
  FaStar,
  FaCrown,
  FaFire,
  FaCreditCard,
  FaRulerHorizontal,
} from 'react-icons/fa';
import PaymentModal from './PaymentModal';

interface EventData {
  title: string;
  description: string;
  city: string;
  date: string;
  time: string;
  eventType: 'beach-tennis' | 'caminhada' | 'ciclismo' | 'corrida-rua' | 'kids' | 'triathlon';
  distance?: '5k' | '10k' | '21k' | '42k';
  image: File | null;
  featuredType: 'none' | 'standard' | 'premium' | 'ultimate';
  featuredPrice: number;
}

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (eventData: EventData) => void;
}

const CreateEventModal: FC<CreateEventModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    city: '',
    date: '',
    time: '',
    eventType: 'corrida-rua' as EventData['eventType'],
    distance: undefined as EventData['distance'],
    image: null as File | null,
    featuredType: 'none' as 'none' | 'standard' | 'premium' | 'ultimate',
    featuredPrice: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const featuredOptions = [
    { value: 'none', label: 'Sem Destaque', price: 0, icon: null, color: 'gray' },
    { value: 'standard', label: 'Destaque Padrão', price: 50, icon: FaStar, color: 'blue' },
    { value: 'premium', label: 'Destaque Premium', price: 100, icon: FaCrown, color: 'purple' },
    { value: 'ultimate', label: 'Destaque Ultimate', price: 200, icon: FaFire, color: 'orange' },
  ];

  const calculateFeaturedPrice = (type: string) => {
    const option = featuredOptions.find(opt => opt.value === type);
    return option ? option.price : 0;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = t('admin.createEvent.errors.titleRequired', 'Nome do evento é obrigatório');
    }
    if (!formData.description.trim()) {
      newErrors.description = t(
        'admin.createEvent.errors.descriptionRequired',
        'Descrição é obrigatória'
      );
    }
    if (!formData.city.trim()) {
      newErrors.city = t('admin.createEvent.errors.cityRequired', 'Cidade é obrigatória');
    }
    if (!formData.date) {
      newErrors.date = t('admin.createEvent.errors.dateRequired', 'Data é obrigatória');
    }
    if (!formData.time) {
      newErrors.time = t('admin.createEvent.errors.timeRequired', 'Horário é obrigatório');
    }
    if (!formData.image) {
      newErrors.image = t('admin.createEvent.errors.imageRequired', 'Imagem é obrigatória');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (formData.featuredType !== 'none' && formData.featuredPrice > 0) {
        setShowPaymentModal(true);
      } else {
        onSubmit(formData);
        handleClose();
      }
    }
  };

  const handlePaymentSuccess = () => {
    onSubmit(formData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      title: '',
      description: '',
      city: '',
      date: '',
      time: '',
      eventType: 'corrida-rua',
      distance: undefined,
      image: null,
      featuredType: 'none',
      featuredPrice: 0,
    });
    setErrors({});
    setImagePreview(null);
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = e => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFeaturedTypeChange = (type: string) => {
    const price = calculateFeaturedPrice(type);
    setFormData(prev => ({
      ...prev,
      featuredType: type as 'none' | 'standard' | 'premium' | 'ultimate',
      featuredPrice: price,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('admin.createEvent.title', 'Nova Corrida')}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Nome do Evento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('admin.createEvent.fields.title', 'Nome do Evento')} *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('admin.createEvent.placeholders.title', 'Digite o nome da corrida')}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('admin.createEvent.fields.description', 'Descrição')} *
            </label>
            <textarea
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('admin.createEvent.placeholders.description', 'Descreva o evento')}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Cidade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaMapMarkerAlt className="inline w-4 h-4 mr-1" />
              {t('admin.createEvent.fields.city', 'Cidade')} *
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('admin.createEvent.placeholders.city', 'Ex: São Paulo')}
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>

          {/* Data e Horário */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <FaCalendarAlt className="inline w-4 h-4 mr-1" />
                {t('admin.createEvent.fields.date', 'Data')} *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('admin.createEvent.fields.time', 'Horário')} *
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={e => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.time ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
            </div>
          </div>

          {/* Tipo de Evento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaRunning className="inline w-4 h-4 mr-1" />
              {t('admin.createEvent.fields.eventType', 'Modalidade')} *
            </label>
            <select
              value={formData.eventType}
              onChange={e => setFormData(prev => ({ ...prev, eventType: e.target.value as EventData['eventType'] }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="beach-tennis">Beach Tennis</option>
              <option value="caminhada">Caminhada</option>
              <option value="ciclismo">Ciclismo</option>
              <option value="corrida-rua">Corrida de Rua</option>
              <option value="kids">Kids</option>
              <option value="triathlon">Triathlon</option>
            </select>
          </div>

          {/* Distância */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaRulerHorizontal className="inline w-4 h-4 mr-1" />
              {t('admin.createEvent.fields.distance', 'Distância')}
            </label>
            <select
              value={formData.distance}
              onChange={e => setFormData(prev => ({ ...prev, distance: e.target.value as EventData['distance'] }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Selecione a distância</option>
              <option value="5k">5km</option>
              <option value="10k">10km</option>
              <option value="21k">21km</option>
              <option value="42k">42km</option>
            </select>
          </div>

          {/* Destaque Pago */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              <FaCrown className="inline w-4 h-4 mr-1" />
              {t('admin.createEvent.fields.featured', 'Destaque na Página Principal')}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredOptions.map(option => {
                const IconComponent = option.icon;
                return (
                  <div
                    key={option.value}
                    className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                      formData.featuredType === option.value
                        ? 'border-letx-blue bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    onClick={() => handleFeaturedTypeChange(option.value)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {IconComponent && (
                          <IconComponent className={`w-5 h-5 mr-2 text-${option.color}-500`} />
                        )}
                        <span className="font-medium text-gray-900 dark:text-white">
                          {option.label}
                        </span>
                      </div>
                      {option.price > 0 && (
                        <span className="text-lg font-bold text-letx-blue">R$ {option.price}</span>
                      )}
                    </div>
                    {option.value !== 'none' && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {option.value === 'standard' && 'Aparece na seção de eventos em destaque'}
                        {option.value === 'premium' &&
                          'Aparece no topo da página e na seção de eventos'}
                        {option.value === 'ultimate' &&
                          'Aparece em todas as seções com prioridade máxima'}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            {formData.featuredType !== 'none' && (
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                <div className="flex items-center">
                  <FaCreditCard className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-800 dark:text-yellow-200">
                    Total a pagar: R$ {formData.featuredPrice}
                  </span>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  O pagamento será processado após a criação do evento.
                </p>
              </div>
            )}
          </div>

          {/* Upload de Imagem */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaImage className="inline w-4 h-4 mr-1" />
              {t('admin.createEvent.fields.image', 'Imagem do Evento')} *
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-letx-blue focus:border-letx-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.image ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}

            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {t('admin.createEvent.buttons.cancel', 'Cancelar')}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-letx-blue hover:bg-letx-blue-dark text-white rounded-lg transition-colors"
            >
              {t('admin.createEvent.buttons.create', 'Criar Corrida')}
            </button>
          </div>
        </form>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={handlePaymentSuccess}
        eventTitle={formData.title}
        featuredType={featuredOptions.find(opt => opt.value === formData.featuredType)?.label || ''}
        price={formData.featuredPrice}
      />
    </div>
  );
};

export default CreateEventModal;
