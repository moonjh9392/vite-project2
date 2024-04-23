import Meta from '@core/Meta';
import { useEffect, useState } from 'react';
const Test = () => {
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
        title={'test'}
        description={'test'}
        imageUrl={`${host}/favicon.png`}
        url={url}
        IMAGE_SIZE={IMAGE_SIZE}
      />
      Test
    </div>
  );
};

export default Test;
