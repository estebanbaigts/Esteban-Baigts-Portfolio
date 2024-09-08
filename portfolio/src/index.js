import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import frTranslation from './locales/fr/translation.json';

i18n.init({
  resources: {
    fr: { translation: frTranslation },
  },
  lng: 'en', // Langue par défaut
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
