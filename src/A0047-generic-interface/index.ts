interface PersonProtocol<T, U> {
  name: T;
  lastName: T;
  age: U;
}

export const student: PersonProtocol<string, number> = {
  name: 'John',
  lastName: 'Doe',
  age: 23,
};

console.log(student);
