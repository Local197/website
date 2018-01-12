import cookie from 'react-cookie';

const initialState = getCookieLocale();

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
  const locale = cookie ? cookie.load('reactLocale') : 'en';
  if (locale === 'en' || locale === 'es') {
    return locale;
  }
  return 'en';
}
