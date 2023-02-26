export interface IFormValues {
  name: string;
  email: string;
  number: string;
  address: string;
  shipment: string;
  policy: boolean;
  payment: string;
}

export interface IOrderFormProps {
  onShipmentChange: (index: number) => void;
}