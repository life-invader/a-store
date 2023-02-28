import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ShipmentOptions } from '../../../constants/common';

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const schema = yup
  .object()
  .shape({
    name: yup.string().trim().required('Обязательное поле'),
    email: yup.string().lowercase().trim().email('Невалидный email').required('Обязательное поле'),
    number: yup.string().required('Обязательное поле').matches(phoneRegex, 'Невалидный номер'),
    address: yup.string().trim(),
    shipment: yup.string().required(),
    policy: yup
      .boolean()
      .required()
      .oneOf([true], 'Вы должны быть согласны с условиями обработки личных данных'),
    payment: yup.string().required('Выберите способ оплаты'),
    comment: yup.string().trim(),
  })
  .required();

export const OrderInitValues = {
  defaultValues: {
    name: '',
    email: '',
    number: '',
    address: '',
    shipment: ShipmentOptions[0].value,
    policy: false,
    payment: '',
    comment: '',
  },
  resolver: yupResolver(schema),
};
