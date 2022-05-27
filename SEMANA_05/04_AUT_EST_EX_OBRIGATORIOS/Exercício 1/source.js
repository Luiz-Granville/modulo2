
function calc(event){
    var number1 = document.getElementById("number1").value
    var number2 = document.getElementById("number2").value
    var operation = event.target.innerText
    var result

    if (number1 == ""){
        number1 = parseInt("0")
    }else{
        number1 = parseInt(number1)
    }
    if (number2 == ""){
        number2 = parseInt("0")
    }else{
        number2 = parseInt(number2)
    }

    switch(operation) {
        case "+":
          result = number1 + number2
          break;
        case "-":
          result = number1 - number2
          break;
        case "*":
          result = number1 * number2
          break;
        case "/":
          result = number1 / number2
          break;
        case "//":
            result = Math.round(number1 / number2)
          break;
        case "%":
          result = number1 % number2
          break;
      }

    document.getElementById("resultfinal").innerHTML = result
    document.getElementById("operation").innerHTML = operation
    console.log(number1)
    }