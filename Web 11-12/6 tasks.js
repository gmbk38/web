let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;


let city2 = {
    name: "ГородM",
    population: 1e6
};


function getName() { 
    return this.name; 
}

city1.getName = getName;
city2.getName = getName;


function exportStr() { 
    return `name=${this.name}\npopulation=${this.population}\n`; 
}

city1.exportStr = exportStr;
city2.exportStr = exportStr;


function getObj() { 
    return this; 
}

function getCity() { 
    return getObj.apply(this).getName(); 
}


city1.getCity = getCity;
city2.getCity = getCity;

console.log(city1.exportStr());
console.log(city2.exportStr());
console.log(city1.getCity());
console.log(city2.getCity());


var obj = {
    method1: function() {
        return this;
    },
    method2: function() {
        return this;
    },
    method3: function() {
       return 'метод3';
    }
  }

console.log(obj.method1().method2().method3());