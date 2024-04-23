// import ZusTandTest from '@src/components/test/ZusTandTest.jsx';
import styles from './style.module.scss';
// import TanStackQueryTest from '@src/components/test/TanStackQueryTest.jsx';
// import ReactHookFormTest from '@src/components/test/ReactHookFormTest.jsx';
// import LanguageTest from '@src/components/test/LanguageTest';
import PaginationTest from '@src/components/test/PaginationTest';
import Meta from '@core/Meta';
import { useEffect, useState } from 'react';
const Home = () => {
  const [url, setUrl] = useState('');
  const [host, setHost] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
    setHost(window.location.host);
  }, []);

  const IMAGE_SIZE = { width: 48, height: 48 };
  return (
    <div>
      <Meta
        title={'home'}
        description={'home'}
        imageUrl={`${host}/favicon.png`}
        url={url}
        IMAGE_SIZE={IMAGE_SIZE}
      />
      <div className={styles.homeWrap}>
        {/* <ZusTandTest /> */}
        {/* <TanStackQueryTest /> */}
        {/* <ReactHookFormTest /> */}
        {/* <LanguageTest /> */}
        <PaginationTest />
      </div>
    </div>
  );
};

export default Home;
