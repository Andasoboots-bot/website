import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/shop': {
      en: '/shop',
      es: '/tienda'
    },
    '/shop/[category]': {
      en: '/shop/[category]',
      es: '/tienda/[category]'
    },
    '/product/[slug]': {
      en: '/product/[slug]',
      es: '/producto/[slug]'
    },
    '/collections': {
      en: '/collections',
      es: '/colecciones'
    },
    '/about': {
      en: '/about',
      es: '/nosotros'
    },
    '/contact': {
      en: '/contact',
      es: '/contacto'
    },
    '/cart': {
      en: '/cart',
      es: '/carrito'
    },
    '/checkout': {
      en: '/checkout',
      es: '/pago'
    }
  }
});

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español'
};
