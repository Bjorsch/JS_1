//alert('hej'); //happy code

//Datatyp
//var nbr = 12; //Datatyp
//nbr = "Hej"; // Dynamiskt typat språk
//var name = "Johan";
//var myArray = ["Johan", 5, 'hej', 8.9]; //En array
//var myObjekt = { name: "Johan", age: 35 }; //Ett objekt, följer JSON syntax.
//var noWay; //undefined, den är namngiven men vet inte vad den är.

//alert(typeof 3); //number är datatypen/litteralen
//alert(typeof 'g'); //string är datatypen
//alert(typeof ""); //string är datatypen
//alert(typeof true); //boolean
//alert(typeof [2, 3, 4, 5, "hej"]); //objekt OBS!!
//alert(typeof ["Johan", 5, 'hej', 8.9]); //objekt

//var d = new Date(); //
//alert(d);

//var d = new Date(); //
//alert(new Date(d.getMilliseconds()));

//var d = new Date(); //
//alert(new Date(0));

//var d = new Date(); //
//alert(new Date(1990, 0, 17)); //månad 0 == jan, dag-datum 1 == 1

//alert(d.getDay()); //nollbaserad, start på söndag

//var age = "35";
//var ageNumber = Number(age); //Stor bokstav pga objekt. Konverterar till number.
//var ageNextYear = "Nästa år är jag " + age + 1;
//var ageNextYearNumber = "Nästa år är jag " + (ageNumber + 1);
//alert(ageNextYear);
//alert(ageNextYearNumber);

//var ageString = String(ageNumber); //Konverterar till string

////Kontroll om det är ett nummer med en prompt
//var age = prompt('Hur gammal är du?');
//if (isNaN(age)) {
//    alert('Not a number');
//}
//else {
//    alert('Du är' + age + 'år gammal');
//}

//True = alla strängar som inte är tomma, alla nummer som inte är 0, "0"
//False = "", '', undefined, false
//var age;
//if (age = 3) {
//    alert('Har ett värde');
//}
//else {
//    alert('Har inget värde');
//}

//var tal = prompt('Skriv ett tal');
//switch (tal) {
//    case 1:
//        alert("ett");
//        break;   
//    default:
//        alert('två');
//        break;
//}

//Uppgift
//skapa ett enkelt program som frågar efter temp vatten har. svara is <=0
//svara med vatten > 1 = 99
// svara med ånga > 100
//använd switch inga if/else

//Lösningsförslag med switch på true:
var vatten = prompt('Ange vattengrad');

if (isNaN(vatten) || vatten.trim() === "") {
    alert('Du angav ingen siffra');   
}
else {
    switch (true) {
        case (vatten <= 0):
            alert('Ice');
            break; //Utan break går den in i nästa case utan att det stämmer
        case (vatten >= 100):
            alert('Ånga');
            break;
        case (vatten > 0 && vatten < 100):
            alert('Vatten');
            break;
        default:
            alert('Fel inmatning, inget tal har skrivits in');
            break;
    }
}


console.log('hej');
