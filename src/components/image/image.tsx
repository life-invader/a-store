import { useEffect, useState } from 'react';
const fallbackImg = '/alfa-logo.png';

interface IImageProps {
  src: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
  testId?: string;
}

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
      onClick={onClick || undefined}
      onError={errorHandler}
      data-testid={testId}
    />
  );
}

export default Image;
