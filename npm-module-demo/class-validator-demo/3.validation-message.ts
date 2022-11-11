import { MinLength, MaxLength, validate, ValidationArguments } from 'class-validator';
// $value - the value that is being validated
// $property - name of the object's property being validated
// $target - name of the object's class being validated
// $constraint1, $constraint2, ... $constraintN - constraints defined by specific validation type
export class Post {
  @MinLength(10, {
// Message function accepts ValidationArguments which contains the following information:

// value - the value that is being validated
// constraints - array of constraints defined by specific validation type
// targetName - name of the object's class being validated
// object - object that is being validated
// property - name of the object's property being validated
    message: (args: ValidationArguments) => {
      if (args.value.length === 1) {
        return 'Too short, minimum length is 1 character';
      } else {
        return 'Too short, minimum length is ' + args.constraints[0] + ' characters';
      }
    },
  })
  @MaxLength(50, {
    each: true, // valid array sets maps
    // here, $constraint1 will be replaced with "50", and $value with actual supplied value
    message: 'Title is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  title: string[];
}

const post = new Post()

post.title = ['123']

validate(post).then(errors => {
  // errors is an array of validation errors
  if (errors.length > 0) {
    console.log('validation failed. errors: ', errors);
  } else {
    console.log('validation succeed');
  }
});