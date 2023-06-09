export interface ICheckoutProps {
  onClose: () => void;
}

export interface IFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  deliveryType: string;
  policy: boolean;
  paymentType: string;
}
