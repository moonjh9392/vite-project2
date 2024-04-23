import Pc from './Pc/index.jsx';
import Mobile from './Mobile/index.jsx';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AppLayout = (props) => {
  const { children } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const [layoutType, setLayoutType] = useState('pc');

  // url path가 /mo로 시작하는지 여부에 따라 mobile, pc 레이아웃 적용
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = userAgent.includes('Mobile'); // Agent에서 Mobile이 있는지 확인
    const inputString = location.pathname; // 접속한 path

    if (isMobile) {
      // 모바일 환경에서 /tire와 같이 PC 버전 페이지 진입시 기존 pathname 앞에 /mo 추가
      if (
        !window.location.pathname.includes('/mo') ||
        window.location.pathname === '/assets/file' // 회사소개서 페이지 예외처리
      ) {
        navigate(`/mo${window.location.pathname}`);
      }
    }

    const firstThreeCharacters = inputString.slice(0, 3);
    if (firstThreeCharacters === '/mo') {
      setLayoutType('mobile');
    }
  }, [location.pathname]);

  return (
    <>
      {layoutType === 'unset' ? (
        children
      ) : layoutType === 'pc' ? (
        <Pc>{children}</Pc>
      ) : layoutType === 'mobile' ? (
        <Mobile>{children}</Mobile>
      ) : (
        <></>
      )}
    </>
  );
};

export default AppLayout;
