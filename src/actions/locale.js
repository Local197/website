import { Cookies } from 'react-cookie';
import { Analytics } from 'aws-amplify';

const cookie = new Cookies();

export function toggleLocale(locale) {
    if (locale === 'en') {
      cookie.set('reactLocale', 'es');
      Analytics.record({
        name: 'change_locale',
        attributes: 'es'
      });
    } else {
      cookie.set('reactLocale', 'en');
      Analytics.record({
        name: 'change_locale',
        attributes: 'en'
      });
    }
    return ({
      type: 'LOCALE_CHANGE',
    });
  }
