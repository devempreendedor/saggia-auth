import { Validation } from '@src/interface/protocols';
import { EmailValidator } from '@src/validation/protocols';

export const mockEmailValidator = (): EmailValidator => () => true;

export const mockValidation = (): Validation => () => null;
