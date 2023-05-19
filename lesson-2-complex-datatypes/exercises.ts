/**************************************************************************/
// implement functions using arrays
function multiplyAll(numbers) {
    // your code here
    return numbers
}

const myNumbers = [2, 6, 5, 8];
const actualNumbers = multiplyAll(myNumbers);


// testing (do not change)
if (
    actualNumbers?.[0] === 4 &&
    actualNumbers?.[1] === 12 &&
    actualNumbers?.[2] === 10 &&
    actualNumbers?.[3] === 16
) {
    console.log("correct");
} else {
    {
        console.log("wrong output:", actualNumbers);
    }
}

/**************************************************************************/
// use classes as types
class Car {
    speed = 0;
    accelerate() {
        this.speed += 10;
    }
}

class Garage {
    parkingSpaces;
    parkingCars = [];

    constructor(parkingSpaces) {
        this.parkingSpaces = parkingSpaces;
    }

    addCar(car) {
        if (!this.isFull()) {
            this.parkingCars.push(car);
        }
    }

    isFull() {
        return this.parkingCars.length >= this.parkingSpaces;
    }
}

const myGarage = new Garage(2);
myGarage.addCar(new Car());
myGarage.addCar(new Car());
myGarage.addCar(new Car());

// testing (do not change)
if (myGarage.isFull() && myGarage.parkingCars.length === 2) {
    console.log("correct")
} else {
    console.log("Garage is not full or does not have the right amount of cars in it")
}

/**************************************************************************/
// use union types of interfaces
class Gorilla {
    walk() { }
    eat() { }
}

class Duck {
    walk() { }
    fly() { }
    swim() { }
}

function letAnimalWalk(animal) {
    animal.walk();
}

letAnimalWalk(new Gorilla());
letAnimalWalk(new Duck());

/**************************************************************************/
// use typed Promises
function loadFeatures() {
    return new Promise((r) => {
        return r([
            { id: 1, type: "polygon" },
            { id: 2, type: "polygon" },
            { id: 3, type: "polyline" },
            { id: 4, type: "point" },
            { id: 5, type: "point" },
        ]);
    });
}

function getPoints(data) {
    return data.filter((x) => x.type === "point");
}

// testing (do not change)
(async () => {
    const features = await loadFeatures();
    const points = getPoints(features);

    if (points?.length === 2 && points.every(x => x.type === "point")) {
        console.log("correct");
    } else {
        console.log(points);
        console.log(`${points?.length} is not 2 or features are no points`);
    }
})();

/**************************************************************************/
// Convert Collection to a generic class
class Collection {
    private items = [];

    addItem(item) {
        this.items.push(item);
    }

    getFirst() {
        return this.items[0];
    }
}

class Book {
    constructor(public title: string) { }
}
class Coin {
    constructor(public value: number) { }
}


const coinCollection = new Collection();
const bookCollection = new Collection();

// DO NOT CHANGE CODE AFTER THIS LINE

coinCollection.addItem(new Coin(50));
coinCollection.addItem(new Coin(20));

bookCollection.addItem(new Book("Dune"));
bookCollection.addItem(new Book("Faust"));

if (
    coinCollection.getFirst().value === 50 &&
    bookCollection.getFirst().title === "Dune"
) {
    console.log("correct");
}