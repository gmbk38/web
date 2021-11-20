//Номер 1
for (var i = 1; i < 8; i++) {
    console.log("#".repeat(i));
}


//Номер 2
for (var i = 0; i <= 100; i++) {
    if (i%3 == 0) {
      console.log(`${i} - Fizz`)
    }
    else if (i%5 == 0 && i%3 != 0) {
      console.log(`${i} - Bazz`)
    }

    if (i % 3 == 0 || i % 5 == 0) {
      console.log(`${i} - FizzBazz`)
    }
}


//Номер 3
for (var i = 0; i < 8; i++) {
    i % 2 == 0 ? console.log("# # # #") : console.log(" # # # #"); 
}


//Номер 4
function minimum(a, b) {
    return a < b ? a : b;
}
console.log(minimum(15, 20));


//Номер 5
function S_counter1(string1) {
    return (string1.split("O").length - 1);
}
console.log(S_counter1("BROWN"));

function S_counter2(string1, key) {
    return (string1.split(key).length - 1);
}
console.log(S_counter2("MAMA", "A"));


//Номер 6
function array_1(start, stop) {
    let arr1 = [];
    for (var i = start; i <= stop; i++) {
      arr1.push(i);
    }
    return arr1;
}
let test = array_1(2, 10)
console.log(test);

function sum(arr) {
    res = 0;
    for (i in arr) {
      res += Number(i);
    }
    return res;
}
console.log(sum(test));

function array_2(start, stop, step = 1) {
  let arr1 = [];
  if (Number(step) < 0) {
    for (var i = start; i >= stop; i+=step) {
      arr1.push(i);
    }
  } else if (Number(step) > 0) {
    for (var i = start; i <= stop; i+=step) {
      arr1.push(i);
    }
  }
  return arr1;
}
console.log(array_2(2, 10, 2));
console.log(array_2(10, 2, -1));


//Номер 7
function reverseArr(arr1) {
    let arr2 = [];
    for(var i = arr1.length-1; i >= 0; i--) {
        arr2.push(arr1[i]);
    }
    return arr2;
}
console.log(reverseArr([1, 2, 3, 4]));

//Сейчас будет мясо, хах
function reverseArrayInPlace(arr1) {
    for(let i = 0, j = arr1.length-1; i < j; i++, j--)
        [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
    return arr1;
}
console.log(reverseArrayInPlace([1, 2, 3, 4]));