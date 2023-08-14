export interface Item {
  cartId: string;
  name: string;
  cost: string;
  quantity: {
    value: number;
    measureUnit: string;
  };
}
