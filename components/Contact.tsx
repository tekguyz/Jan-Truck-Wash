'use client';

import React, { useState } from 'react';
import { useTranslation } from '../lib/LanguageContext';
import FadeInUp from './ui/FadeInUp';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, CheckCircle2, Loader2, Check, Mail } from 'lucide-react';
import { BUSINESS } from '../lib/constants';

type FormData = {
  name: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type FormStatus = 'idle' | 'loading' | 'success';

export default function Contact() {
  const { t, locale } = useTranslation();
  const [formState, setFormState] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [wasSubmittedAttempted, setWasSubmittedAttempted] = useState(false);

  const servicesList = [
    { value: 'exterior', labelEn: 'Exterior Truck Washing', labelEs: 'Lavado Exterior de Camiones' },
    { value: 'fleet', labelEn: 'Fleet Washing', labelEs: 'Lavado de Flota' },
    { value: 'engine', labelEn: 'Engine Cleaning', labelEs: 'Limpieza de Motor' },
    { value: 'tire', labelEn: 'Tire Cleaning', labelEs: 'Limpieza de Llantas' },
    { value: 'interior', labelEn: 'Interior Detailing', labelEs: 'Detallado Interior' },
    { value: 'notsure', labelEn: 'Not sure / Need custom', labelEs: 'No estoy seguro / Personalizado' }
  ];

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) 
      return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  }

  function validateForm(data: FormData): FormErrors {
    const validationErrors: FormErrors = {};
    if (!data.name.trim()) {
      validationErrors.name = locale === 'en' ? 'Name is required' : 'El nombre es obligatorio';
    } else if (data.name.trim().length < 2) {
      validationErrors.name = locale === 'en' ? 'Name must be at least 2 characters' : 'El nombre debe tener al menos 2 caracteres';
    }

    if (!data.phone) {
      validationErrors.phone = locale === 'en' ? 'Phone number is required' : 'El número de teléfono es obligatorio';
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(data.phone)) {
      validationErrors.phone = locale === 'en' 
        ? 'Please enter a valid 10-digit phone number' 
        : 'Por favor ingresa un número de teléfono válido de 10 dígitos';
    }

    if (!data.service) {
      validationErrors.service = locale === 'en' ? 'Please select a service' : 'Por favor selecciona un servicio';
    }

    return validationErrors;
  }

  const handleFieldChange = (field: keyof FormData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    if (wasSubmittedAttempted) {
      const validationErrors = validateForm(newData);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWasSubmittedAttempted(true);
    
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorKey = Object.keys(validationErrors)[0] as keyof FormData;
      let elementId = '';
      if (firstErrorKey === 'name') elementId = 'contact-name';
      if (firstErrorKey === 'phone') elementId = 'contact-phone';
      if (firstErrorKey === 'service') elementId = 'contact-service';
      
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }

    setFormState('loading');

    // Optimistic UI Flow timing
    setTimeout(() => {
      setFormState('success');

      // 4000ms delay before resetting
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          phone: '',
          service: '',
          message: '',
        });
        setErrors({});
        setWasSubmittedAttempted(false);
        setFormState('idle');
      }, 4000);
    }, 800);
  };

  return (
    <section id="contact" className="bg-bg-deep py-16 md:py-24 px-6 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header following exact structure and spacing */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-glow">
            {locale === 'en' ? 'GET IN TOUCH' : 'CONTÁCTANOS'}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-chrome leading-tight mt-2">
            {locale === 'en' ? 'Ready to Keep Your Fleet Clean?' : '¿Listo para Mantener tu Flota Limpia?'}
          </h2>
        </div>

        {/* Form and Phone CTA block */}
        <div className="grid gap-10 md:grid-cols-2 lg:items-stretch max-w-5xl mx-auto">
          
          {/* LEFT — Quote Request Form Card (p-6 md:p-8) */}
          <div className="card-glow rounded-2xl p-6 md:p-8 shadow-md flex flex-col justify-between overflow-hidden relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {formState !== 'success' ? (
                <motion.form
                  key="contact-form-key"
                  initial={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  {/* Full Name */}
                  <div className="flex flex-col space-y-1.5 animate-none">
                    <label htmlFor="contact-name" className="font-sans text-xs font-bold uppercase tracking-wider text-text-muted cursor-pointer">
                      {locale === 'en' ? 'Full Name' : 'Nombre completo'} <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      disabled={formState === 'loading'}
                      value={formData.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      placeholder={locale === 'en' ? 'Your Name' : 'Su nombre'}
                      className={`w-full bg-bg-mid border text-white placeholder:text-text-subtle rounded-xl outline-none px-4 py-3 font-sans text-sm transition-all disabled:opacity-50 ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-border focus:border-brand-accent focus:ring-1 focus:ring-brand-accent'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 animate-none">{errors.name}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col space-y-1.5 animate-none">
                    <label htmlFor="contact-company" className="font-sans text-xs font-bold uppercase tracking-wider text-text-muted flex justify-between cursor-pointer">
                      <span>{locale === 'en' ? 'Company Name' : 'Nombre de empresa'}</span>
                      <span className="text-text-subtle font-normal normal-case">{locale === 'en' ? '(Optional)' : '(Opcional)'}</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      disabled={formState === 'loading'}
                      value={formData.company}
                      onChange={(e) => handleFieldChange('company', e.target.value)}
                      placeholder={locale === 'en' ? 'Your Fleet Business' : 'Su negocio de transporte'}
                      className="w-full bg-bg-mid border border-border text-white placeholder:text-text-subtle rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none px-4 py-3 font-sans text-sm transition-all disabled:opacity-50"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col space-y-1.5 animate-none">
                    <label htmlFor="contact-phone" className="font-sans text-xs font-bold uppercase tracking-wider text-text-muted cursor-pointer">
                      {locale === 'en' ? 'Phone Number' : 'Número de teléfono'} <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      inputMode="tel"
                      maxLength={14}
                      disabled={formState === 'loading'}
                      value={formData.phone}
                      onChange={(e) => {
                        const formatted = formatPhone(e.target.value);
                        handleFieldChange('phone', formatted);
                      }}
                      placeholder="(267) 555-0100"
                      className={`w-full bg-bg-mid border text-white placeholder:text-text-subtle rounded-xl outline-none px-4 py-3 font-sans text-sm transition-all disabled:opacity-50 ${
                        errors.phone 
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-border focus:border-brand-accent focus:ring-1 focus:ring-brand-accent'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1 animate-none">{errors.phone}</p>
                    )}
                  </div>

                  {/* Service Needed dropdown select */}
                  <div className="flex flex-col space-y-1.5 animate-none">
                    <label htmlFor="contact-service" className="font-sans text-xs font-bold uppercase tracking-wider text-text-muted cursor-pointer">
                      {locale === 'en' ? 'Service Needed' : 'Servicio necesario'} <span className="text-brand-accent">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="contact-service"
                        disabled={formState === 'loading'}
                        value={formData.service}
                        onChange={(e) => handleFieldChange('service', e.target.value)}
                        className={`w-full bg-bg-mid border text-white rounded-xl outline-none px-4 py-3 font-sans text-sm appearance-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all disabled:opacity-50 ${
                          errors.service 
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                            : 'border-border'
                        }`}
                      >
                        <option value="" className="bg-bg-mid text-white">{locale === 'en' ? 'Choose a service' : 'Elija un servicio'}</option>
                        {servicesList.map((service) => (
                          <option key={service.value} value={service.value} className="bg-bg-mid text-white">
                            {locale === 'en' ? service.labelEn : service.labelEs}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-subtle">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    {errors.service && (
                      <p className="text-red-400 text-xs mt-1 animate-none">{errors.service}</p>
                    )}
                  </div>

                  {/* Message container text area */}
                  <div className="flex flex-col space-y-1.5 animate-none">
                    <label htmlFor="contact-message" className="font-sans text-xs font-bold uppercase tracking-wider text-text-muted cursor-pointer">
                      {locale === 'en' ? 'Message' : 'Mensaje'}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      disabled={formState === 'loading'}
                      value={formData.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      placeholder={locale === 'en' 
                        ? "Tell us about your fleet — number of trucks, location, how often you need service."
                        : "Cuéntanos sobre tu flota — cantidad de camiones, ubicación, con qué frecuencia necesitas servicio."
                      }
                      className="w-full bg-bg-mid border border-border text-white placeholder:text-text-subtle rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none p-4 font-sans text-sm resize-none transition-all disabled:opacity-50"
                    />
                  </div>

                  {/* Full-width submit button with Tap effects */}
                  <motion.button
                    id="submit-contact-form"
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    disabled={formState === 'loading'}
                    className="w-full relative flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold py-3.5 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg shadow-black/80 hover:scale-105 transition-all cursor-pointer disabled:opacity-75 disabled:hover:scale-100"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>{locale === 'en' ? 'Sending Request...' : 'Enviando Solicitud...'}</span>
                      </>
                    ) : (
                      <span>{locale === 'en' ? 'Get a Free Quote' : 'Solicitar Cotización Gratis'}</span>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success-key"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-bg-card"
                >
                  <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/35">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="font-sans text-2xl font-extrabold text-white mb-3">
                    {locale === 'en' ? "Thanks! We'll reach out within 2 hours." : "¡Gracias! Te contactaremos en menos de 2 horas."}
                  </h3>
                  <p className="font-sans text-sm text-text-muted max-w-sm mb-6">
                    {locale === 'en' ? 'Need immediate schedule booking? Call us directly:' : '¿Necesita asistencia inmediata? Llámenos directamente al:'}
                  </p>
                  
                  <a
                    href={BUSINESS.phoneLink}
                    className="inline-flex items-center space-x-2 rounded-full bg-bg-mid hover:bg-bg-deep text-brand-glow font-bold px-6 py-3.5 border border-border transition-all transform hover:-translate-y-0.5"
                  >
                    <Phone className="h-4.5 w-4.5 fill-brand-glow text-brand-glow" />
                    <span>{BUSINESS.phone}</span>
                  </a>

                  <p className="font-sans text-[10px] text-text-subtle mt-8 tracking-widest uppercase">
                    {locale === 'en' ? 'Returning to form shortly' : 'Regresando al formulario'}...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT — Phone CTA Card */}
          <div className="card-glow text-white rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[500px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,127,255,0.15)_0%,transparent_70%)] z-0" aria-hidden="true" />
            
            <div className="relative z-10 text-center flex flex-col items-center">
              {/* Large phone icon centered at top */}
              <div className="h-16 w-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-brand-accent fill-brand-accent animate-none" />
              </div>

              {/* Tagline headers */}
              <h3 className="font-sans text-lg sm:text-xl font-bold text-text-muted tracking-wide">
                {locale === 'en' ? 'Prefer to Call or Text?' : '¿Prefieres Llamar o Escribir?'}
              </h3>
              
              <a 
                href={BUSINESS.phoneLink} 
                className="font-sans text-2xl sm:text-4xl font-black tracking-tight text-chrome hover:text-brand-accent transition-colors mt-3 select-all block cursor-pointer"
              >
                {BUSINESS.phone}
              </a>

              <p className="font-sans text-sm text-text-muted mt-2">
                {locale === 'en' ? 'Available 7 days a week. We respond fast.' : 'Disponibles 7 días a la semana. Respondemos rápido.'}
              </p>

              {/* Email callout as a secondary contact option below phone numbers */}
              <div className="mt-4 flex flex-col items-center">
                <span className="text-xs text-text-subtle font-medium block">
                  {locale === 'en' ? 'Or email us:' : 'O escríbenos a por correo:'}
                </span>
                <a
                  href={BUSINESS.emailLink}
                  className="inline-flex items-center space-x-1.5 text-brand-glow text-sm hover:text-white transition-colors font-semibold mt-1"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{BUSINESS.email}</span>
                </a>
              </div>

              {/* Large CTA phone link button */}
              <a
                href={BUSINESS.phoneLink}
                className="w-full max-w-sm mt-8 flex items-center justify-center space-x-2.5 rounded-full bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold py-4 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg shadow-black/80 hover:scale-105 transition-all"
              >
                <Phone className="h-5 w-5 fill-white" />
                <span>{locale === 'en' ? 'Call Now' : 'Llamar Ahora'}</span>
              </a>

              {/* Minimalist badges row bottom */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-10 pt-8 border-t border-white/5 w-full text-[11px] text-text-muted font-semibold tracking-wide uppercase select-none">
                <div className="flex items-center space-x-1.5 animate-none">
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center space-x-1.5 animate-none">
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  <span>Mobile Service</span>
                </div>
                <div className="flex items-center space-x-1.5 animate-none">
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
