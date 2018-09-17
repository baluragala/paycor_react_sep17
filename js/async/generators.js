// function* doWork() {
//   console.log(1);
//   console.log(2);
//   yield 100;
//   console.log(3);
//   console.log(4);
//   yield { name: "zeo" };
//   console.log(5);
//   console.log(6);
//   yield "hello";
//   console.log(7);
//   console.log(8);
// }

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

function* doWork() {
  try {
    yield step1();
    step2();
    yield step3();
    step4();
  } catch (error) {
    console.log(error);
  }
}

var it = doWork();

it.next().value.then(() => it.next().value.then(() => it.next()));
