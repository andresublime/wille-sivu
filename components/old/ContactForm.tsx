'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Etunimi on pakollinen';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Sukunimi on pakollinen';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Puhelinnumero on pakollinen';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Sähköposti on pakollinen';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Virheellinen sähköpostiosoite';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Viesti on pakollinen';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // TODO: Implement actual form submission to API endpoint
      // For now, just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitMessage('Kiitos viestistäsi! Otan sinuun yhteyttä pian.');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch {
      setSubmitMessage('Virhe viestin lähetyksessä. Yritä uudelleen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-[#3a3a3a]">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-white mb-8 md:mb-10">
          Ota yhteyttä
        </h2>

        <p className="text-white mb-10 md:mb-12 leading-relaxed text-xl max-w-2xl mx-auto">
          Jätä yhteystietosi ja sovitaan yhdessä aika vastaanotolle. Vastaan heti kun mahdollista, mutta viimeistään 2-3 arkipäivän kuluessa loma-aikojen ulkopuolella. Lähetä rohkeasti uusi yhteydenottopyyntö, mikäli et saa vastausta.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-white text-lg mb-2 md:mb-3 font-semibold text-left" style={{ fontFamily: 'var(--font-nunito)' }}>
                Etunimi <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                suppressHydrationWarning
                className={`w-full px-4 py-3 text-xl bg-white border ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#c4b5a0]`}
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-white text-lg mb-2 md:mb-3 font-semibold text-left" style={{ fontFamily: 'var(--font-nunito)' }}>
                Sukunimi <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                suppressHydrationWarning
                className={`w-full px-4 py-3 text-xl bg-white border ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#c4b5a0]`}
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-white text-lg mb-2 md:mb-3 font-semibold text-left" style={{ fontFamily: 'var(--font-nunito)' }}>
              Puhelinnumero <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              suppressHydrationWarning
              className={`w-full px-4 py-3 text-xl bg-white border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#c4b5a0]`}
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white text-lg mb-2 md:mb-3 font-semibold text-left" style={{ fontFamily: 'var(--font-nunito)' }}>
              Sähköpostiosoite <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              suppressHydrationWarning
              className={`w-full px-4 py-3 text-xl bg-white border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#c4b5a0]`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-white text-lg mb-2 md:mb-3 font-semibold text-left" style={{ fontFamily: 'var(--font-nunito)' }}>
              Viesti
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              suppressHydrationWarning
              className={`w-full px-4 py-3 text-xl bg-white border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#c4b5a0] resize-none`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#c4b5a0] hover:bg-[#b5a691] text-gray-800 px-8 py-3 text-base md:text-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {isSubmitting ? 'Lähetetään...' : 'Lähetä'}
            </button>
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div
              className={`p-8 ${
                submitMessage.includes('Virhe')
                  ? 'bg-red-100 text-red-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
