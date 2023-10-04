/* eslint-disable */

type Age = number;

type RGBcolor = 'red' | 'green' | 'blue';
type CMYKcolor = 'cyan' | 'yellow' | 'black';

// UNION TYPE
type FavoriteColor = RGBcolor | CMYKcolor;

type Adress = {
  street: string;
  number: number;
  city: string;
};

type Person = {
  name: string;
  lastnasme: string;
  age: Age;
  adress: Adress;
  favoriteColor?: FavoriteColor;
};

const person: Person = {
  name: 'felipe',
  lastnasme: 'matthew',
  age: 19,
  adress: {
    city: 'ferraz de vasconcelos',
    number: 650_329,
    street: 'marcondes salgado'
  }
}

export function setFavoriteColor(person : Person, color: FavoriteColor): Person {
  return {
    ...person,
    favoriteColor: color
  }
}

console.log(setFavoriteColor(person, 'green'));

