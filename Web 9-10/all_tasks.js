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


//Номер 8
function arrayToList(arr) {
	return arr.reduceRight((rest, value) => ({value, rest}), null);
}
	
console.log(arrayToList ([1, 2, 3]))
	
function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
	array.push(node.value);
	}
	return array;
}

console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(value, list) {
	return {value, rest: list};
}

console.log(prepend(1, prepend(2, null)));

function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([1, 2, 3]), 1));


//Номер 9
function deepEqual(a, b) {
	if (a === b)
		return true;
	if (a == null || typeof a != "object" ||
		b == null || typeof b != "object") 
		return false;
	let keysA = Object.keys(a), keysB = Object.keys(b);
	if (keysA.length != keysB.length) 
		return false;
	for (let key of keysA) {
	  	if (!keysB.includes(key) || !deepEqual(a[key], b[key])) 
			return false;
	}
	return true;
  }
  
let asobj = {here: {is: "an"}, object: 2};
console.log(deepEqual(asobj, asobj));


//Номер 10
function flatten(arr) {
	return arr.reduce(function (flat, toFlatten) {
	  	return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, []);
  }

console.log(flatten([[1, 2, 3], [4, 5]]));


//Номер 11
let ancestry = ([
	{b: 1832, d: 1905},
	{b: 1876, d: 1956},
	{b: 1683, d: 1724},
	{b: 1714, d: 1748},
	{b: 1907, d: 1997},
	{b: 1761, d: 1833},
	{b: 1535, d: 1582},
	{b: 1918, d: 2012},
	{b: 1877, d: 1968},
	{b: 1696, d: 1724},
	{b: 1602, d: 1642}]);


function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
	return byName[person.mother] != null;
}).map(function(person) {
	return person.b - byName[person.mother].b;
});
console.log(average(differences)); 


//Номер 12
function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
	var groups = {};
	array.forEach(function(element) {
		var groupName = groupOf(element);
		if (groupName in groups)
		groups[groupName].push(element);
		else
		groups[groupName] = [element];
	});
	return groups;
}

var byCentury = groupBy(ancestry, function(person) {
	return Math.ceil(person.d / 100);
});

for (var century in byCentury) {
	var ages = byCentury[century].map(function(person) {
		return person.d - person.b;
	});
	console.log(century + ": " + average(ages));
}


//Номер 13
function every(array, predicate) {
	for (var i = 0; i < array.length; i++) {
		if (!predicate(array[i]))
		return false;
	}
	return true;
}

function some(array, predicate) {
	for (var i = 0; i < array.length; i++) {
		if (predicate(array[i]))
		return true;
	}
	return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
