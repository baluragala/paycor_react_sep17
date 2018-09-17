function step1() {
  setTimeout(function() {
    console.log(1);
    console.log(2);
    step2();
  }, 2000);
}

function step2() {
  console.log(3);
  console.log(4);
  step3();
}

function step3() {
  setTimeout(function() {
    console.log(5);
    console.log(6);
    step4();
  }, 2000);
}

function step4() {
  console.log(7);
  console.log(8);
}

function doWork() {
  step1();
}

doWork();
