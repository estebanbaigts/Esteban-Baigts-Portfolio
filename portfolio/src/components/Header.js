import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';

const Header = ({ toggleTheme, theme }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Button onClick={() => alert(t('Work'))} theme={theme}>
          {t('Work')}
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button onClick={toggleTheme} theme={theme}>
          {document.body.classList.contains('bg-black') ? t('Light') : t('Dark')}
        </Button>
        <Button onClick={changeLanguage} theme={theme}>
          {i18n.language === 'en' ? 'FR' : 'EN'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
