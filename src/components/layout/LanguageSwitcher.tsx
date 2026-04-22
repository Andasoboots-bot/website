'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Globe } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (newLocale: string) => {
    // @ts-ignore
    router.replace({ pathname, params }, { locale: newLocale });
    setIsOpen(false);
  };

  const otherLocale = routing.locales.find((l) => l !== locale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-black/5 rounded-full transition-colors text-sm font-medium uppercase tracking-wider"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5 text-[#1a1a1a]" />
        <span className="hidden sm:inline">{locale}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="absolute right-0 mt-2 w-32 bg-[#FDFBF7] border border-black/5 rounded-xl shadow-xl z-50 overflow-hidden"
            >
              <div className="p-1">
                {routing.locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => toggleLanguage(l)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      locale === l
                        ? 'bg-[#a41e21] text-white'
                        : 'text-[#1a1a1a] hover:bg-black/5'
                    }`}
                  >
                    {l === 'en' ? 'English' : 'Español'}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
