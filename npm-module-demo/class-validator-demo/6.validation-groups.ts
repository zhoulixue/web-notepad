import { validate, Min, Length } from 'class-validator';

export class User {
  @Min(12, {
    groups: ['registration'],
  })
  age: number;

  @Length(2, 20, {
    groups: ['registration', 'admin'],
  })
  name: string;
}

let user = new User();
user.age = 10;
user.name = 'Alex';

validate(user, {
  groups: ['registration'],
}); // this will not pass validation

validate(user, {
  groups: ['admin'],
}); // this will pass validation

validate(user, {
  groups: ['registration', 'admin'],
}); // this will not pass validation

validate(user, {
  groups: undefined, // the default
}); // this will not pass validation since all properties get validated regardless of their groups

validate(user, {
  groups: [],
}); // this will not pass validation, (equivalent to 'groups: undefined', see above)
