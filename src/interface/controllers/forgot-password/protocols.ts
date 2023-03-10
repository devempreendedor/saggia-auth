import {
  ForgotPassword,
  LoadAccountByEmail,
  SendMail,
} from '@src/domain/usecases';
import { Controller, Validation } from '@src/interface/protocols';

type Dependencies = {
  validation: Validation;
  loadAccountByEmail: LoadAccountByEmail;
  forgotPassword: ForgotPassword;
  sendMail: SendMail;
};

export type BuildForgotPasswordController = (
  dependencies: Dependencies
) => Controller;
