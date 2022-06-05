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

function militantes(event) {
    console.log(event)
    if (event.target.text == "+") {
        document.getElementById("militantes-qtd").value = parseInt(document.getElementById("militantes-qtd").value) + 1
    }
    else {
        document.getElementById("militantes-qtd").value = parseInt(document.getElementById("militantes-qtd").value) - 1
    }
}


function trade() {
    let aux = document.getElementById("palavra1").value
    document.getElementById("palavra1").value = document.getElementById("palavra2").value
    document.getElementById("palavra2").value = aux
}

function verify() {
    let value = document.getElementById("cell").value
    console.log(2)
    if (value[0] == "(" && value[3] == ")" && value[9] == "-" && value.length > 13 && value.length < 15) {
        document.getElementById("resultado").innerHTML = "Estrutura de número correto"
        document.getElementById("resultado").style.color = "#7AAE72"
    }
    else {
        document.getElementById("resultado").innerHTML = "Estrutura de número incorreto"
        document.getElementById("resultado").style.color = "#E12C2C"
    }
}

function calculate() {
    let persons = document.getElementById("travel").value
    let period = document.getElementById("selection").value
    let valor

    if (persons != "" && period != 0) {
        if (period == "1") {
            if (persons > 50) {
                valor = persons * 120
            }
            else {
                valor = persons * 200
            }
            document.getElementById("resultado-fly").innerHTML = "O valor total de passangens é R$" + valor

        }
        else {
            if (persons > 50) {
                valor = persons * 80
            }
            else {
                valor = persons * 100
            }
            document.getElementById("resultado-fly").innerHTML = "O valor total de passangens é R$" + valor
        }

    }
    else {
        document.getElementById("resultado-fly").style.color = "#E12C2C"
        document.getElementById("resultado-fly").innerHTML = "Informe os campos acimas antes de calcular"

    }

}


function notasCalculo() {
    var alunos = parseInt(document.getElementById("nStudantes").value);
    var meProva = 0;
    var maProva = 0;
    var meProjeto = 0;
    var maProjeto = 0;
    var notasProva = 0;
    var notasProjeto = 0;
    var mediaG = 0;
    var medias = "";
    for (let idx = 0; idx < alunos; idx++) {
      var prova = parseInt(document.getElementById("prova-" + idx).value);
      var projeto = parseInt(document.getElementById("projeto-" + idx).value);
      notasProva += prova;
      notasProjeto += projeto;
      var average = (prova * 2 + projeto * 3) / 5;
      mediaG += average;
      medias += `
        <span>
        <h5>Aluno ${idx + 1}</h5>
        <p>Média: ${average} </p>
        </span>
        `;
      if (prova > maProva) {
        maProva = prova;
      }
      if (projeto > maProjeto) {
        maProjeto = projeto;
      }
      if (idx == 0) {
        meProva = prova;
        meProjeto = projeto;
      } else {
        if (prova < meProva) meProva = prova;
        if (projeto < meProjeto) meProjeto = projeto;
      }
    }
    document.getElementById("resultado").innerHTML = `
      <hr>
      ${medias}
      <hr>
      <h5>Média geral: ${mediaG / alunos}</h5>
      <hr>
      <h5>Trabalhos</h5>
      <h6>Média artiméticas das notas da prova: ${notasProva / alunos}</h6>
      <h6>Maior nota da prova: ${maProjeto}</h6>
      <h6>Menor da prova: ${meProjeto}</h6>
      <hr>
      <h5>Provas</h5>
      <h6>Média artiméticas das notas do trabalho: ${notasProjeto / alunos} </h6>
      <h6>Maior nota do trabalho: ${maProva} </h6>
      <h6>Menor da trabalho: ${meProva}</h6>
      `;
  }

  function entradas() {
    var entradas = "";
    var alunos = parseInt(document.getElementById("nStudantes").value);
    for (let idx = 0; idx < alunos; idx++) {
    entradas += `
        <h5>Aluno ${idx + 1} </h5>
          <div>
          <input placeholder="Nota da prova" id="prova-${idx}"/>
          <input  placeholder="Nota do trabalho"  id="projeto-${idx}"/>
          </div>
          <br />`;
    }
    document.getElementById("entradas").innerHTML =
    entradas + "<a onclick='notasCalculo()' id='trade-button' href='#' class='btn btn-sm animated-button thar-one'>Calcular</a>";
  }