import { useState } from 'react';
import Image from '../../../components/image/image';
import type { IGalleryProps } from './type';

import styles from './style.module.css';

function Gallery({ images, title }: IGalleryProps) {
  const [currImg, setCurrImg] = useState(0);

  const imgChangeHandler = (id: number) => () => {
    setCurrImg(id);
  };

  return (
    <div>
      <Image className={styles.img} src={images[currImg]} alt={title} testId="main-image" />
      <ul className={styles.list}>
        {images.map((item, index) => (
          <li key={item} data-testid="gallery-thumbnail">
            <Image
              className={styles.thumbnail}
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
