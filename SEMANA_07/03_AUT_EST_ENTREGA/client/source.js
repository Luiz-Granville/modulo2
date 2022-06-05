function createLine(){
    $("#alert-message")[0].innerHTML = "Você irá     receber informações no seu e-mail!"
}

function getData(){
    let url = "/information";

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    let data = JSON.parse(xhttp.responseText)[0]
    
    $(".nameTitle")[0].innerHTML = data.name
    $("#tellphone")[0].innerHTML = data.tellphone
    $("#email")[0].innerHTML = data.email
    $("#site")[0].innerHTML = data.site
    $("#github")[0].innerHTML = data.github
    $("#linkedin")[0].innerHTML = data.linkedin
}

getData()
