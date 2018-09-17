// const p = new Promise(function(resovle, reject) {
//   setTimeout(function() {
//     resovle({ message: "done" });
//   }, 5000);
// });

// p.then(function(v) {
//   console.log(v);
// }).catch(function(err) {
//   console.log(err);
// });

function step1() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log(1);
      console.log(2);
      resolve();
    }, 1000);
  });
}

function step2() {
  console.log(3);
  console.log(4);
}

function step3() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(5);
      console.log(6);
      resolve();
    }, 2000);
  });
}

function step4() {
  console.log(7);
  console.log(8);
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => step4())
  .catch(err => console.log(err));
