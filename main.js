function calculate(){
var area=Number(document.getElementById("length_of_a_side").value) *
Number(document.getElementById("length_of_a_side").value);
document.getElementById("area").innerHTML=area;


var perimiter=Number(document.getElementById("length_of_a_side").value) *
4;
document.getElementById("perimiter").innerHTML=perimiter;

}