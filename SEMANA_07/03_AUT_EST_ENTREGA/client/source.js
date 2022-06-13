

function createLine() {
    $("#alert-message")[0].innerHTML = "Você irá     receber informações no seu e-mail!"
}

function getData() {
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
getSkills()
function insertInputSkill(e) {
    // console.log(e);
    document.getElementById("edit-button").style.display = "block";
    document.getElementById("create-button").style.display = "none";
    
    document.getElementById("input-hability").value = e.nome;
    document.getElementById("input-id").value = e.id;
}

async function updateSkill() {
    let skill = document.getElementById("input-hability").value
    await $.ajax({
        dataType: "json",
        contentType: "application/json",
        url: "http://127.0.0.1:3051/habilidades/" + document.getElementById("input-id").value,
        type: "put",
        cors: true,
        headers: {
            'Acces-Control-Allow-Origin': '*',
        },
        data: JSON.stringify({ nome: skill }),
        success: function (resultData) {
            document.getElementById("edit-button").style.display = "none";
            document.getElementById("create-button").style.display = "block";
            getSkills();
        }
    })
}
function deleteSkill(id) {
    
    $.ajax({
        dataType: "json",
        contentType: "application/json",
        url: "http://127.0.0.1:3051/habilidades/" + id,
        type: "delete",
        cors: true,
        headers: {
            'Acces-Control-Allow-Origin': '*',
        },
        success: function (resultData) {
            getSkills();
        }
    })
}
async function createSkills() {
    let skill = document.getElementById("input-hability").value
    await
        $.ajax({
            contentType: "application/json",
            url: "http://127.0.0.1:3051/habilidades",
            type: "post",
            cors: true,
            headers: {
                'Acces-Control-Allow-Origin': '*',
            },
            data: JSON.stringify({ nome: skill }),
            dataType: "json",
            success: function (resultData) {
                getSkills();
            }
        })
}

function getSkills() {
    var data = [];
    $.ajax({
        url: "http://127.0.0.1:3051/habilidades",
        type: "get",
        dataType: "text",
        contentType: "application/json",
        cors: true,
        headers: {
            'Acces-Control-Allow-Origin': '*',
        },
        success: function (resultData) {
            var html = "";
            let data = JSON.parse(resultData);
            data.forEach((e) => {
                html += `<div id="sentence-place">
                <li class="sentence"> ${e.nome}</li>

                <img id="edit" src="./images/1159633.png" alt="" onclick="insertInputSkill({id:${e.id}, nome:'${e.nome}'})" />
              
                <img id="delete" src="./images/1799391.png" alt="" onclick="deleteSkill(${e.id})" />
            </div>`;
            })
            document.getElementById("listSkills").innerHTML = html
        }
    })
}