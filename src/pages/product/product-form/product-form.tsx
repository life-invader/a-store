import { useState } from 'react';
import { prepareSelectData, transformOptions } from '../../../utils/utils';
import { Select } from '../select/select';
import type { IProductOptions } from './type';
import type { IProduct } from '../../../types/types';

import './style.css';

function ProductForm(product: IProduct) {
  const selectsData = [product.colors, product.models, product.sizes, product.stickerNumbers].map(
    (item) => prepareSelectData(item),
  );
  const [colors, models, sizes, stickerNumbers] = selectsData;

  const [productOptions, setProductOptions] = useState<IProductOptions>({
    size: sizes && sizes[0],
    color: colors && colors[0],
    model: models && models[0],
    stickerNumber: stickerNumbers && stickerNumbers[0],
  });

  const paramsChangeHandler = (options: Partial<IProductOptions>) => {
    setProductOptions({ ...productOptions, ...options });
  };

  const submitHandler = () => {
    const options = transformOptions(productOptions);
    console.log(`В корзину добавлен товар: ${product.title}`);
    console.log('Опции: ', options);
  };

  return (
    <form className="product-form" data-testid="product-form">
      {colors && (
        <Select
          options={colors}
          selected={productOptions.color}
          label="Цвет"
          name="color"
          onChange={paramsChangeHandler}
        />
      )}
      {sizes && (
        <Select
          options={sizes}
          selected={productOptions.size}
          label="Размер"
          name="size"
          onChange={paramsChangeHandler}
        />
      )}
      {models && (
        <Select
          options={models}
          selected={productOptions.model}
          label="Модель"
          name="model"
          onChange={paramsChangeHandler}
        />
      )}
      {stickerNumbers && (
        <Select
          options={stickerNumbers}
          selected={productOptions.stickerNumber}
          label="Номер стикера"
          name="stickerNumber"
          onChange={paramsChangeHandler}
        />
      )}

      <button className="product-form__submit" type="button" onClick={submitHandler}>
        В корзину
      </button>
    </form>
  );
}

export default ProductForm;
