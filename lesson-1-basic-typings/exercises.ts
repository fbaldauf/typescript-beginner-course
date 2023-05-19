/**************************************************************************/

// add typings for variables and parameters
const firstName = "Max";
let lastName;

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const fullName = getFullName(firstName, lastName);

/**************************************************************************/

// implement functions with consistent return type
function addNumbers(firstNumber: number, secondNumber: number): number {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return;
    }

    return firstNumber + secondNumber;
}

/**************************************************************************/

// check for types
function isBoolean(value): boolean {
    // your code here
}

const shouldBeTrue = isBoolean(true);
const shouldBeFalse = isBoolean("true");

if (shouldBeTrue === true && shouldBeFalse === false) {
    console.log("correct");
} else {
    console.log(`${shouldBeTrue} should be true and ${shouldBeFalse} should be false`);
}

/**************************************************************************/

// try to fix the typescript error with your javascript knowledge
const person = {
    firstName: "Max",
    secondName: "Mustermann",
    dateOfBirth: new Date("2000-01-01"),
};

function getNameOfPerson(person): string {
    return person.name;
}

const myName = getNameOfPerson(person);


