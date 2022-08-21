import { Validation } from '@src/presentation/protocols';

export const validationComposite =
  (validations: Validation[]): Validation =>
  (input) => {
    for (const validation of validations) {
      const error = validation(input);
      if (error) {
        return error;
      }
    }
    return null;
  };
