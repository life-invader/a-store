import { formatPrice } from "./format-price";
import { transformOptions } from "./transform-options";

describe('Тестирование утилитарных функций', () => {
  it('Тестирование функции форматирования цены formatPrice', () => {
    const price = 4999;
    const result = '4 999';

    expect(formatPrice(price).replace(/\s/, ' ')).toBe(result);
  });

  it('Тестирование функции transformOptions', () => {
    const initData = {
      size: { key: '0', content: 'xs' },
      color: { key: '1', content: 'white' },
      model: undefined,
      stickerNumber: undefined,
    };
    const result = {
      size: 'xs',
      color: 'white',
    };

    expect(transformOptions(initData)).toEqual(result);
  });
})