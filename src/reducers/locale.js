import { Cookies } from 'react-cookie';

const initialState = getCookieLocale();
const cookie = new Cookies();

export function getLocale(state = initialState, action = {}) {
  switch (action.type) {
  case 'LOCALE_CHANGE': {
    return getCookieLocale();
  }
  default:
    return state;
  }
}

function getCookieLocale() {
  const locale = cookie ? cookie.get('reactLocale') : 'en';
  if (locale === 'en' || locale === 'es') {
    return locale;
  }
  return 'en';
}
