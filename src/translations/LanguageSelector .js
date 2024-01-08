import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const [t, i18n] = useTranslation();
  const handlChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button
        style={{ color: 'black' }}
        onClick={() => handlChangeLanguage('en')}
      >
        English
      </Button>
      <Button
        style={{ color: 'black' }}
        onClick={() => handlChangeLanguage('ur')}
      >
        اردو
      </Button>
    </div>
  );
};

export default LanguageSelector;
