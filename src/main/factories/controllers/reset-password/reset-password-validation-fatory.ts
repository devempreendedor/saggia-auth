import { EmailValidatorAdapter } from '@src/infra/validators/email-validator-adapter';
import { Validation } from '@src/presentation/protocols';
import {
  EmailValidation,
  RequiredFieldValidation,
  ValidationComposite,
} from '@src/validation/validators';

export const makeResetPasswordValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const requiredFields = ['email', 'password', 'accessToken'];
  for (const field of requiredFields) {
    validations.push(new RequiredFieldValidation(field));
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
  return new ValidationComposite(validations);
};
