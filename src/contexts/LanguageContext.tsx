'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Lang } from '@/lib/translations';

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.sq;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'sq',
  setLang: () => {},
  t: translations.sq,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('sq');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'sq' || saved === 'en') setLangState(saved);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem('lang', l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
