//Output

//window.alert('hej');
//document.write("hej på dig");

//document.getElementById("ett").innerHTML = "Goddag";
//console.log("Hej hej");
//alert(document.getElementById("ett").innerHTML);

var vikt = document.getElementById("vikt").innerHTML;
var langd = document.getElementById("langd").innerHTML;
var bmi = calcBMI(vikt,langd);
document.getElementById("result").innerHTML = bmi;

function calcBMI(vikt,langd) {
    return vikt / (langd * langd);

}