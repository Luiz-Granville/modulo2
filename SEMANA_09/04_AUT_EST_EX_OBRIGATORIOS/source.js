function hover(event) {
    let id = event.target.outerText
    let idArray = id.split(" ")
    let number = ''
    let others = []
    let k = 0
    switch (parseInt(idArray[1])) {
        case 1:
            number = "um";
            others = ["dois", "tres", "quatro", "cinco"];
            break
        case 2:
            number = "dois";
            others = ["um", "tres", "quatro", "cinco"];
            break
        case 3:
            number = "tres";
            others = ["dois", "um", "quatro", "cinco"];
            break
        case 4:
            number = "quatro";
            others = ["dois", "tres", "um", "cinco"];
            break
        case 5:
            number = "cinco";
            others = ["dois", "tres", "quatro", "um"];
            break
    }
    document.getElementById(number).style.display = "flex"
    while (k < others.length) {
        document.getElementById(others[k]).style.display = "none"
        k++
    }
}

function cardinalidade(){
    let string = document.getElementById("number1").value
    let number = parseInt(string[string.length - 3])
    
    if(string.length < 3){
        document.getElementById("result-cardnalidade").innerHTML = "Informe um valor de 3 algarismos"
    }else{
        if (number % 2 == 0){
            document.getElementById("result-cardnalidade").innerHTML = "Dígito da centena é Par"
        }else{
            document.getElementById("result-cardnalidade").innerHTML = "Dígito da centena é Impar"
        }
        
    }
}

function somarAlgarismos() {
    let string = document.getElementById("number2").value
    let soma = 0

    if (string != ""){
    for (var i = 0; i < string.length; i++){
        soma = soma + parseInt(string[i])
    }
    document.getElementById("result-soma").innerHTML = "O resultado da soma é "+ soma
    }else{
        document.getElementById("result-soma").innerHTML = "Digite um valor válido"
    }
}


function ordenar() {
    let array = []

    if(document.getElementById("name0").value != "" && document.getElementById("name1").value != "" && document.getElementById("name2").value != ""){

    for (var i = 0; i < 3; i++){
    
        array.push(document.getElementById("name"+i).value)
    }

    array.sort()
    document.getElementById("result-ordem").innerHTML = "Os nomes em ordem são: "+array} else{
        document.getElementById("result-ordem").innerHTML = "Insira nomes válidos"
    }
}

function fibonacci() {
    var n = parseInt(document.getElementById("numberFibonnaci").value, 10);
    var fib = new Array();
    fib[0] = 0;
    fib[1] = 1;
    if(fib < 1)
        document.getElementById("result-fibo").innerHTML = "Valores menores que 1 não são permitidos."
    else{
        for(var i = 2; i <= n; i++){
            fib[i] = fib[i - 2] + fib[i - 1];
        }
        document.getElementById("result-fibo").innerHTML = "Posição = " + n + ".\nValor = " + fib[n]
    }

}

function ePrimo(n){
    let divisores = 0

    for(var i = 1; i <= n; i++){
      if(n % i == 0){
        divisores++}
    }
    if(divisores == 2){
      return 1}
    else{
      return 0} 
  }

  function primoIntervalo(){
    var primos = []
    var init = parseInt(document.getElementById("intervalo1").value)
    var end = parseInt(document.getElementById("intervalo2").value)
    document.getElementById("result-primo").innerHTML = "O números primos desse intervalo são: <br>"
    for(var i = init; i <= end; i++){
      if(ePrimo(i) == 1){
        primos.push(i)
      }
    }
    for(var i=0; i < primos.length;i++){
    document.getElementById("result-primo").innerHTML +=primos[i]+"<br>"

    }
}