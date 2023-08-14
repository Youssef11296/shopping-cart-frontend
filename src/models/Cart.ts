export interface Cart {
  ownerId: string;
  name: string;
  totalCost: {
    value: number;
    currency: string;
  };
}
