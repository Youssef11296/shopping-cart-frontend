export interface User {
  _id: string;
  username: string;
  email: string;
  contact: {
    phoneNumebr: string;
    whatsApp: string;
    telegram: string;
  };
  address:{
    location: string;
    country: string;
    city: string
  }
  token: string;
}
