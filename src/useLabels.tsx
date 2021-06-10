import { Languages, Locales } from "./Languages";
import en from './locales/en';
import pt from './locales/pt';

const useLabels = (language: Languages = 'EN'): Locales => {
  if (language === 'PT') {
    return pt;
  }

  return en;
}

export { useLabels };
