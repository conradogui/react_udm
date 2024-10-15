// 1 - var, let, const
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}
console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

let i = 100;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

function logName() {
  const name = "Guilherme";
  console.log(name);
}

const name = "Mariana";
logName();
console.log(name);

// 2 - Arrow functions

const sum = function sum(a, b) {
  return a + b;
};

const arowSun = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arowSun(5, 5));

const greeting = (name) => {
  if (name) {
    return `Olá, ${name}!`;
  } else {
    return "Olá, estranho!";
  }
};

console.log(greeting("Conrado"));
console.log(greeting());

const testeArrow = () => console.log("testou");

testeArrow();

const user = {
  name: "Guilherme",
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 500);
  },
  sayUserNameArrow: () => {
    setTimeout(() => {
      console.log(this);
      console.log("Username: " + this.name);
    }, 700);
  },
};

// user.sayUserName()
// user.sayUserNameArrow()

// 3 - metodo filter
const arr = [1, 2, 3, 4, 5];

console.log(arr);

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});
console.log(highNumbers);

const users = [
  { name: "Guilherme", avaliable: true },
  { name: "James", avaliable: false },
  { name: "Mariana", avaliable: false },
  { name: "Carlos", avaliable: true },
];

const avaliableUsers = users.filter((user) => user.avaliable);
const notAvaliableUsers = users.filter((user) => !user.avaliable);

console.log(avaliableUsers);
console.log(notAvaliableUsers);

// 4 - metodo map
const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira eletrica", price: 50.0, category: "Eletro" },
  { name: "Fogão", price: 400, category: "Eletro" },
  { name: "Calça jeans", price: 34.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// 5 - template literals

const userName = "Guilherme";
const age = 22;

console.log(`O nome do usuario é ${userName} e ele tem ${age} anos.`);

// 6 - destructuring

const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f2);

const productDetails = {
  name: "Mouse",
  price: 30.99,
  category: "Perifericos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa ${price}, pertence a categoria ${productCategory} e é da cor ${color}`
);

// 7 - spread operator
const a1  = [1, 2, 3];
const a2 = [4, 5 , 6]

const a3 = [...a1, ...a2]

console.log(a3);

const a4 = [0, ...a1, 4]

console.log(a4);

// 8 - classes

class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDisount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Products("Camisa gola V", 20)

console.log(shirt.name);

// 9 herança

class ProductWithAtributes extends Products {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }
    showColors() {
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAtributes("Chapeu", 29.99, ["preto", "Azul", "Verde"])

console.log(hat.name);
console.log(hat.productWithDisount(30));
hat.showColors();

