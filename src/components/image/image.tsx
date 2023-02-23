import { useEffect, useState } from 'react';
import type { IImageProps } from './type';
const fallbackImg = '/alfa-logo.png';

function Image({ src: urlImage, alt, onClick, className, testId }: IImageProps) {
  const [src, setSrc] = useState(urlImage);

  const errorHandler = () => {
    setSrc(fallbackImg);
  };

  useEffect(() => {
    setSrc(urlImage);
  }, [urlImage]);

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onClick={onClick}
      onError={errorHandler}
      data-testid={testId}
    />
  );
}

export default Image;
