//1
const numbers = [4, 5, 6, 7, 8, 9, 10];

let elevados = () => numbers.map((i) => i ** i);

/*2 no anda
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const valuesList = ['Italia', 'Japón', 'Valencia', 'Entrecot'];

const result2 = foodList.map(function(i){

    return  `Como soy de ${valuesList[0]}, amo comer ${foodList[0]}`,
            `Como soy de ${valuesList[1]}, amo comer ${foodList[1]}`,
            `Como soy de ${valuesList[2]}, amo comer ${foodList[2]}`,
            `Aunque no como carne, el ${valuesList[3]} es sabroso`
});
*/

//2
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const result2 = foodList.map((food) => {
  if (food === 'Pizza') {
    return 'Como soy de Italia, amo comer ' + food;
  } else if (food === 'Ramen') {
    return 'Como soy de Japón, amo comer ' + food;
  } else if (food === 'Paella') {
    return 'Como soy de Valencia, amo comer ' + food;
  } else {
    return 'Aunque no como carne, el ' + food + ' es sabroso';
  }
});

//3
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

const result3 = staff.map(person => {

  return `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`;

});

//4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(impar => impar % 2 !== 0);


//5
const foodList2 =[
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }];

const veggieFoods = foodList2.filter(food => food.isVeggie);

const result5 = veggieFoods.map(food =>{
  if (food.name === 'Tofu burguer') {
    return `Que rica ${food.name} me voy a comer!`;
  } else {
    return `Que rico ${food.name} me voy a comer!`;
  }
});



//6
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

const expensive = inventory.filter(caro => caro.price > 300);
const result6 = expensive.map(caro => caro.name)


//6 bis (7 en teoría)
const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((a, b) => a * b, 1);


//7
const sentenceElements = [
  'Me',
  'llamo',
  'Edu',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const result8 = sentenceElements.reduce((a, b) => {
  return `${a} ${b}`;
});


//8
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const libros = books.filter((book) => book.category === 'code');
const result9 = libros.reduce((total, book) => total + book.price, 0);