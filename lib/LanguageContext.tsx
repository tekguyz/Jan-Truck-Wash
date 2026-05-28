'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

type Locale = 'en' | 'es';

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (keyPath: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem('jan_wash_locale') as Locale;
      if (savedLocale === 'en' || savedLocale === 'es') {
        setTimeout(() => setLocaleState(savedLocale), 0);
      } else {
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'es') {
          setTimeout(() => setLocaleState('es'), 0);
        }
      }
    } catch (e) {
      console.warn("Could not access localStorage or browser language", e);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('jan_wash_locale', newLocale);
    } catch (e) {
      console.warn("Could not save locale to localStorage", e);
    }
  };

  /**
   * Translates a dot-notation keypath (e.g. 'hero.eyebrow')
   */
  const t = (keyPath: string): any => {
    const keys = keyPath.split('.');
    let current: any = translations[locale];

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        console.warn(`Translation path "${keyPath}" not found for locale "${locale}"`);
        return keyPath; // fallback is the path itself
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
