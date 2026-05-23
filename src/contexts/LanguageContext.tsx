'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
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
  const [lang, setLang] = useState<Lang>('sq');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
