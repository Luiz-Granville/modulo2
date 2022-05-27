
function caixaEletronico(valorSaque) {
    document.getElementById("troco").innerHTML = ""
    const nota = [100, 50, 20, 10, 5, 2, 1];
    var valorSaque, troco = 0, troco1;
    var cedulas = [];

    for (var i = 0; i < nota.length; i++){
        if (troco == 0){
            troco = valorSaque % nota[i];
        }
        else{
            troco1 = troco % nota[i];
            valorSaque = troco
            troco = troco1
        }
        cedulas.push((valorSaque-troco)/nota[i]);
        document.getElementById(nota[i].toString()).innerHTML = cedulas[i]
    }
    if (troco != 0){
        document.getElementById("troco").innerHTML ="Não possuímos troco para o valor a seguir R$ "+ troco.toFixed(2)+" centavos"
    }
}
