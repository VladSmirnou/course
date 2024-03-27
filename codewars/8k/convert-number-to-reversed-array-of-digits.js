// ------------------------------ Description ------------------------------
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of
// this number within an array in reverse order.
// ------------------------------ Solution ------------------------------
function digitize(n) {
    return n.toString().split('').reverse().map(v => Number(v));
}