class Person {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `Person Name :${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }

  describe() {
    return `${super.describe()} and title : ${this.title}`;
  }
}

let p = new Person("Jhon");
console.log(p.describe());

let e = new Employee("Bala", "Architect");
console.log(e.describe());
