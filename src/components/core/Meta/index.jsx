import { Helmet } from 'react-helmet-async';

const Meta = (props) => {
  const { title, description, imageUrl, url, IMAGE_SIZE } = { ...props };
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* 중복 콘텐츠로 인한 패널티를 방지 */}
      <link rel="canonical" href={url} />
      {/* og 태그*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      {/* <meta property="og:image:width" content={IMAGE_SIZE.width.toString()} />
      <meta property="og:image:height" content={IMAGE_SIZE.height.toString()} /> */}
    </Helmet>
  );
};

export default Meta;
