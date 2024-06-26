const makeChange = (c) => {
    const change = {
        q: 0, // Number of quarters
        d: 0, // Number of dimes
        n: 0, // Number of nickels
        p: 0  // Number of pennies
    };

    // Value of each coin in cents
    const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    // Calculate the number of quarters
    change.q = Math.floor(c / quarterValue);
    c = c % quarterValue;

    // Calculate the number of dimes
    change.d = Math.floor(c / dimeValue);
    c = c % dimeValue;

    // Calculate the number of nickels
    change.n = Math.floor(c / nickelValue);
    c = c % nickelValue;

    // Calculate the number of pennies
    change.p = Math.floor(c / pennyValue);

    return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
