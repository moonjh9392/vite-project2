import React from 'react';
import { useTranslation } from 'react-i18next';
import '@src/i18n';

const LanguageTest = () => {
  const { t, i18n } = useTranslation();

  // 언어 전환 함수
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('de')}>Deutsch</button>
    </div>
  );
};

export default LanguageTest;
