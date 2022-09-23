// keyof
interface Point {
  x: number;
  y: number;
}

type keys = keyof Point;
type PropName = keyof any;

// Required & Partial & Pick
interface User {
  id: number;
  age: number;
  name?: string;
}

type PartialUser = Partial<User>;
type PickUser = Pick<User, 'id' | 'age'>;
type RequiredUser = Required<User>;

// Condition Type
type isTrue<T> = T extends true ? true : false;
type t1 = isTrue<number>
// never & Exclude & Extract & Omit
type A = Exclude<'x' | 'a', 'x'>;
type A2 = Extract<'x' | 'a', 'x'>
type OmitUser = Omit<User, 'id'>

// typeof
// is
// Record & Dictionary & Many
type A3 = Record<string, any>

// infer & Return Type & Parameters Type
