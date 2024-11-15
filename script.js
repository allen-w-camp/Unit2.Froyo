let flavor = prompt("Please enter your Froyo flavor(s)! \n(use commas, but no spaces when entering more than one flavor)");

flavor = flavor.split(",");


const countflavor = (arr) => {
    const count = {};

    for (let flavor of arr) {
    flavor - flavor.trim();

    flavor in count ? (count[flavor] += 1) : (count[flavor] = 1);
}
return count;
};

console.table(countflavor(flavor));