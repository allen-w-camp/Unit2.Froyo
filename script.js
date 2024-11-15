const prompt = require("prompt-sync")();

let userInputString = prompt("Please enter your Froyo flavor(s)! \n(use commas, but no spaces when entering more than one flavor)");

console.log(userInputString);

// const flavor = {
//     flavor: "chocolate"
// }

const stringArray = userInputString.split(",");

const flavor = (key, value) => {
    const obj = {};
    obj[key] = value;
    return obj;
    const count = flavor.length;
    console.log(count);
    };

    

    console.table(flavor);
    console.log("bracket notaion", flavor["color"]);
    console.log("looping over object");

    for (const key in flavor) {
    console.log(`The flavor ${key} is ${flavor[key]}`);
    console.log(key);
    console.log(flavor[key]);
    }

    console.log("Object.keys", Object.keys(flavor));
    console.log("Object.values", Object.values(flavor));
    console.log("Object.entries", Object.entries(flavor));

    const printObject = (obj) => {
    console.log("obj passed to function");
    for (const key in obj) {
    console.log(`key: ${key}, value: ${obj[key]}`);
     }
     };

    

    