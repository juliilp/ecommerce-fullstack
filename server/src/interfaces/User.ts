export interface UserInterface {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isBaneable: boolean;
  userEmailValidate: boolean;
  emailValidateCode?: string;
}
