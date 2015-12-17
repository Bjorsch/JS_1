alert(add(2, 3));
alert(add("Johan", "Cilla"));
alert(add(2, 2, 2, 2, 2, 2, 2)); // tar bara två första
alert(superAdder(2, 2, 2, 2, 2, 2, 2)); // tar alla tal

alert(add(6)); // NaN

function add(a, b) {
    //kontrollerar om det är ett nummer, annars kasta ett undantag
    return a + b;
}

function superAdder() {
    var tal = 0;
    for (var i = 0; i < arguments.length; i++) {
        tal += arguments[i];
    }
    return tal;
}