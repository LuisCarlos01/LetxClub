import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTimes, FaImage, FaRunning, FaRulerHorizontal } from 'react-icons/fa';
import { Event } from '../services/eventsService';

interface EditEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (eventData: Partial<Event>) => void;
  event: Event | null;
}

const EditEventModal: React.FC<EditEventModalProps> = ({ isOpen, onClose, onSubmit, event }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    city: '',
    date: '',
    time: '',
    eventType: 'corrida-rua' as Event['eventType'],
    distance: undefined as Event['distance'],
    sponsored: false,
    image: null as File | null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Update form when event changes
  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title,
        description: event.description,
        city: event.city,
        date: event.date,
        time: event.time,
        eventType: event.eventType,
        distance: event.distance,
        sponsored: event.sponsored,
        image: null,
      });

      // Set current image as preview
      setImagePreview(event.imageUrl || null);
    }
  }, [event]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!event) return;

    // Process image if changed
    let imageUrl = event.imageUrl; // Keep current image by default
    if (formData.image instanceof File) {
      imageUrl = await new Promise<string>(resolve => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target?.result as string);
        reader.readAsDataURL(formData.image!);
      });
    }

    onSubmit({
      id: event.id,
      ...formData,
      imageUrl: imageUrl,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('admin.editEvent.title', 'Editar Corrida')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('admin.createEvent.titleField', 'Título')}
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder={t('admin.createEvent.titlePlaceholder', 'Nome da corrida')}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-letx-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('admin.createEvent.descriptionField', 'Descrição')}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder={t('admin.createEvent.descriptionPlaceholder', 'Descrição do evento')}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-letx-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('admin.createEvent.cityField', 'Cidade')}
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder={t('admin.createEvent.cityPlaceholder', 'Cidade onde será realizada')}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-letx-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('admin.createEvent.dateField', 'Data')}
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-letx-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('admin.createEvent.timeField', 'Horário')}
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-letx-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaRunning className="inline w-4 h-4 mr-1" />
              {t('admin.createEvent.eventTypeField', 'Modalidade')}
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-letx-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            >
              <option value="beach-tennis">Beach Tennis</option>
              <option value="caminhada">Caminhada</option>
              <option value="ciclismo">Ciclismo</option>
              <option value="corrida-rua">Corrida de Rua</option>
              <option value="kids">Kids</option>
              <option value="triathlon">Triathlon</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaRulerHorizontal className="inline w-4 h-4 mr-1" />
              {t('admin.createEvent.fields.distance', 'Distância')}
            </label>
            <select
              name="distance"
              value={formData.distance || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-letx-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Selecione a distância</option>
              <option value="5k">5km</option>
              <option value="10k">10km</option>
              <option value="21k">21km</option>
              <option value="42k">42km</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="sponsored"
              checked={formData.sponsored}
              onChange={handleChange}
              className="h-4 w-4 text-letx-blue focus:ring-letx-blue border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900 dark:text-white">
              {t('admin.createEvent.sponsoredField', 'Evento Patrocinado')}
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaImage className="inline w-4 h-4 mr-1" />
              {t('admin.createEvent.fields.image', 'Imagem do Evento')}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-letx-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
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

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              {t('admin.createEvent.cancelButton', 'Cancelar')}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-letx-blue text-white rounded-md hover:bg-letx-blue-dark transition-colors"
            >
              {t('admin.editEvent.updateButton', 'Atualizar Evento')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventModal;
