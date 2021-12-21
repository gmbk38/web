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

function Card(from, to){
    this.from = from;
    this.to = to;
};

var c1 = new Card("Екатеринбург ","Москва");
console.log(c1);



class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    /**
     * Информация о человеке вида «Коля, 23, 180»
     * @return {string}
     */
    getInfo() {
        return `${this.name}, ${this.age}, ${this.height}`;
    }
    /**
     * Имя человека
     * @return {string}
     */
    get firstname() {
        return this.name;
    }

    toString(){
        return `{name: "${this.name}", age: ${this.age}, height:${this.height}}`;
    };

    
}


let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
];

let json = JSON.stringify(humans);
console.log(json);

for (let human of humans)
    console.log(human.getInfo());

