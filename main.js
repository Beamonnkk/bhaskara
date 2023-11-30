var valorA = prompt("informe o valor de a");
var valorB = prompt("informe o valor de b");
var valorC = prompt("informe o valor de c");
var coeficiente1;
var coeficiente2;

var delta = (valorB*valorB)-4*valorA*valorC;

document.write("Valor de de Delta =>" +"<br/><br/>");

if(delta<0){
    document.write("para Delta negativo, não existem raízes reais.<br/>")
}
else{
    document.write("Para Delta positivo, possuímos duas raízes iguais: <br/>");
    coeficiente1 = (-valorB+Math.sqrt(delta))/ (2*valorA);
    coeficiente2 = (-valorB-Math.sqrt(delta))/ (2*valorA);

    document.write("x1 = "+ coeficiente1 + "<br/>");
    document.write("x2 = "+ coeficiente2 + "<br/>");
}
