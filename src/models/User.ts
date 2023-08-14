export interface User {
  _id: string;
  username: string;
  email: string;
  contact: {
    phoneNumebr: string;
    whatsApp: string;
    telegram: string;
  };
}
