const gravity = 10

function Calc(){
    let velocity = document.getElementById("input-vel").value
    let time = velocity/gravity
    let hmax = (velocity**2)/(2*gravity)
    document.getElementById('result-one').innerText = "O tempo de trajetória do objeto foi de "+time+" segundos."
    document.getElementById('result-two').innerText = "A distância percorrida pela trajetória do objeto foi de "+hmax+" metros."
}