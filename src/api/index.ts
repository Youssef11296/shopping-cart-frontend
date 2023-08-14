import axios from "axios";
import { User } from "../models/User";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://shoppingcart-2evs.onrender.com"
    : "http://localhost:2000";
const baseUrlV1 = `${baseUrl}/api/v1`;

export type RegisterUserRequest = {
  username: string;
  email: string;
  password: string;
};

export type LoginUserRequest = {
  email: string;
  password: string;
};

export type AuthUserResponse = {
  data: {
    success: boolean;
    message: string;
    user: User;
  };
};

export const authApi = {
  registerUser: (reqBody: RegisterUserRequest): Promise<AuthUserResponse> =>
    axios.post(`${baseUrlV1}/auth/register`, reqBody),
  loginUser: (reqBody: LoginUserRequest): Promise<AuthUserResponse> =>
    axios.post(`${baseUrlV1}/auth/login`, reqBody),
};
