let products = [
  {
    id: 1,
    title: "iphone",
    price: 2000
  },
  {
    id: 2,
    title: "pixel",
    price: 1200
  },
  {
    id: 3,
    title: "note",
    price: 1100
  }
];

let filtered = products.filter(function(p) {
  return p.price > 1100;
});

let filtered1 = products.filter(p => p.price > 1100);

console.log(filtered);

let product = {};

function Product(id, title, price) {
  this.id = id;
  this.title = title;
  this.price = price;
  this.print = () => {
    return `A product named ${this.title} costs ${this.price} dollars`;
  };
}

var p = new Product(1, "p1", 100);
p.print();
var ref = p.print;
ref();
