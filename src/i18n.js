// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // 서버나 public 폴더에서 번역 파일 로드
  .use(LanguageDetector) // 사용자 언어 감지
  .use(initReactI18next) // react-i18next 초기화
  .init({
    fallbackLng: 'en', // 기본 언어 설정
    debug: true, // 개발 환경에서 디버그 정보 출력
    interpolation: {
      escapeValue: false, // React는 기본적으로 XSS를 방지함
    },
  });

export default i18n;
