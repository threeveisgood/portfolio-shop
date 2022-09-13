export interface User {
  email: string;
  password: string;
  name: string;
}

export interface ChangePassword {
  oldPassword: string;
  newPassword: string;
}
