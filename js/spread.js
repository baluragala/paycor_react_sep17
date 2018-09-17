let name = "jhon doe";

const chars = [...name];
// for (let i = 0; i < name.length; i++) {
//   chars.push(name[i]);
// }

console.log(chars);

let members1 = ["jim", "kim", "pim"];
let members2 = ["lim", "dim"];

let members = [...members1, ...members2, "yim"];
console.log(members);

let person_part1 = { name: "jhon", age: "22" };
let person_part2 = { height: 180, weight: 80 };

let person = { ...person_part1, grade: "A", ...person_part2 };
console.log(person);
