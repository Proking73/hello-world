//https://proking73.github.io/hello-world/
/*document.getElementById("JELLLO_BELLO").innerHTML = "BELLO_JELLLO";
// using " " is do add a space in between words, for example 'let yeeeet_car = 1 + "2"'
let yeeeet_car = 1 + "2";
text("yeeeet_car");*/
//var file = document.getElementById("fiel").innerHTML;
//document.addEventListener("click", function() {
//    window.alert(file.value);
//})
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  var insept = document.getElementById("inputss").value;
  console.log(insept);
  document.getElementById("insept").innerHTML = toCelsius(insept);
  var yetsa = document.getElementById("meter").max;  
  document.getElementById("meter").value = yetsa/2;