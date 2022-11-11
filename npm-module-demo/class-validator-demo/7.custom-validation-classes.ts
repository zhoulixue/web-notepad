import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, Validate } from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class CustomTextLength implements ValidatorConstraintInterface {
  validate(text: string, validationArguments: ValidationArguments) {
    // return text.length > 1 && text.length < 10; // for async validations you must return a Promise<boolean> here
    return text.length > validationArguments.constraints[0] && text.length < validationArguments.constraints[1];
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Text ($value) is too short or too long!';
  }
}

class Post {
  @Validate(CustomTextLength, [3, 20], {
    message: 'Title is too short or long!',
  })
  title: string;
}
