import es from "./es.json";
import en from "./en.json";

export type Translations = typeof es;

const translations: Record<string, Translations> = { es, en };

export function useTranslations(lang: string): Translations {
  return translations[lang] ?? translations.es;
}
