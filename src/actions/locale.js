import cookie from 'react-cookie';

export default {
  toggleLocale: () => {
    if (getCookieLocale() === 'en') {
      cookie.save('reactLocale', 'es');
    } else {
      cookie.save('reactLocale', 'en');
    }
    AppDispatcher.dispatch({
      actionType: 'LOCALE_CHANGE',
    });
  },
};

function getCookieLocale() {
  const locale = cookie ? cookie.load('reactLocale') : 'en';
  if (locale === 'en' || locale === 'es') {
    return locale;
  }
  return 'en';
}
