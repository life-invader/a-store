export interface IFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  deliveryType: string;
  policy: boolean;
  paymentType: string;
}

export interface IOrderFormProps {
  onShipmentChange: (index: number) => void;
  onClose: () => void;
}