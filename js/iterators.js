//1. Iterable
//2. Iterator
let members1 = ["jim", "kim", "pim"];
const it = members1[Symbol.iterator]();
let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
}
