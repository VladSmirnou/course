// ------------------------------ Description ------------------------------
// Bob is working as a bus driver. However, he has become extremely popular
// amongst the city's residents. With so many passengers wanting to get aboard
// his bus, he sometimes has to face the problem of not enough space left on the
// bus! He wants you to write a simple program telling him if he will be able
// to fit all the passengers.
// If there is enough space, return 0, and if there isn't, return the number
// of passengers he can't take.
// ------------------------------ Solution ------------------------------
function enough(cap, on, wait) {
    return on + wait <= cap ? 0 : Math.abs(cap - (on + wait));
}