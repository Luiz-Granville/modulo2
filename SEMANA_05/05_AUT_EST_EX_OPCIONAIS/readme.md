var lines = input.split(/\s+/)

var grade1 = Number(lines.shift())
var grade2 = Number(lines.shift())
var grade3 = Number(lines.shift())
var grade4 = Number(lines.shift())

var media = (grade1 * 2 + grade2 * 3 + grade3 * 4 + grade4 * 1) / (2 + 3 + 4 + 1)

console.log(`Media: ${media.toFixed(1)}`)

if (media >= 7) {
    console.log("Aluno aprovado.")
}
else if (media < 5) {
    console.log("Aluno reprovado.")
}
else {
    console.log("Aluno em exame.")
    var examGrade = Number(lines.shift())
    console.log(`Nota do exame: ${examGrade.toFixed(1)}`)
    media = (media + examGrade) / 2
    if (media >= 5) {
        console.log("Aluno aprovado.")
    }
    else {
        console.log("Aluno reprovado.")
    }
    console.log(`Media final: ${media.toFixed(1)}`)
}
