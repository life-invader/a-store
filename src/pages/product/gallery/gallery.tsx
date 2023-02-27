import { useState } from 'react';
import Image from '../../../components/image/image';
import type { IGalleryProps } from './type';

import './style.css';

function Gallery({ images, title }: IGalleryProps) {
  const [currImg, setCurrImg] = useState(0);

  const imgChangeHandler = (id: number) => () => {
    setCurrImg(id);
  };

  return (
    <div className="gallery">
      <Image className="gallery__img" src={images[currImg]} alt={title} testId="main-image" />
      <ul className="gallery__thumbnail-list">
        {images.map((item, index) => (
          <li key={item} className="gallery__thumbnail-list-item" data-testid="gallery-thumbnail">
            <Image
              className="gallery__thumbnail"
              src={item}
              alt={title}
              onClick={imgChangeHandler(index)}
              testId="thumbnail-image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
