let apiReponse = {
  firstName: "Lim",
  lastName: "Kim",
  address: {
    city: "ny",
    state: "ny",
    zip: 1234
  }
};

// const firstName = apiReponse.firstName;
// const city = apiReponse.address.city;

const {
  address: { city },
  firstName: name = "n/a"
} = apiReponse;

console.log(name, city);

let members1 = ["jim", "kim", "pim"];
// let manager = members1[0];
// let lead = members1[1];
// let engg = members1[2];

let [engg, manager, lead] = members1;
console.log(manager, lead, engg);
