import { Cookies } from 'react-cookie';

const cookie = new Cookies();

export function toggleLocale(locale) {
    if (locale === 'en') {
      cookie.set('reactLocale', 'es');
    } else {
      cookie.set('reactLocale', 'en');
    }
    return ({
      type: 'LOCALE_CHANGE',
    });
  }
