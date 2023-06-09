import { useEffect, useMemo, useState } from 'react';
import { Select } from '../select/select';
import { useDispatch } from 'react-redux';
import { productsActions } from '../../../store/products-slice/products-slice';
import { transformOptions } from '../../../utils/transform-options';
import { formatDataToOptionShape } from './utils';
import type { ISelectOptions } from './type';
import type { IProduct } from '../../../types/types';

import styles from './style.module.css';

function ProductForm(product: IProduct) {
  const dispatch = useDispatch();

  const selectsData = useMemo(() => {
    return [product.colors, product.models, product.sizes, product.stickerNumbers].map((item) => {
      if (!item) {
        return undefined;
      }

      return formatDataToOptionShape(item);
    });
  }, [product.colors, product.models, product.sizes, product.stickerNumbers]);
  const [colors, models, sizes, stickerNumbers] = selectsData;

  const [productOptions, setProductOptions] = useState<ISelectOptions>({
    size: sizes && sizes[0],
    color: colors && colors[0],
    model: models && models[0],
    stickerNumber: stickerNumbers && stickerNumbers[0],
  });

  const paramsChangeHandler = (options: Partial<ISelectOptions>) => {
    setProductOptions({ ...productOptions, ...options });
  };

  const submitHandler = () => {
    const options = transformOptions(productOptions);
    dispatch(productsActions.loadItemToCart(options));
  };

  useEffect(() => {
    setProductOptions({
      size: sizes && sizes[0],
      color: colors && colors[0],
      model: models && models[0],
      stickerNumber: stickerNumbers && stickerNumbers[0],
    });
  }, [colors, models, sizes, stickerNumbers]);

  return (
    <form className={styles.form} data-testid="product-form">
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

      <button className={styles.button} type="button" onClick={submitHandler}>
        В корзину
      </button>
    </form>
  );
}

export default ProductForm;
