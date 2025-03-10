import { getRequestConfig } from 'next-intl/server';

export const SUPPORTED_LOCALES = ['en', 'ru'] as const;
export const LOCALE_PREFIX = 'always' as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  return {
    messages: (await import(`../../../public/messages/${locale}.json`)).default,
  };
});
