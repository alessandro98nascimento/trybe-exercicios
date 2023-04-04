const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const hof = () => {
    let pontos = 0;

    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
        if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
            pontos += 1;
        } else if (STUDENT_ANSWERS[index] === 'N.A'){
        } else {
            pontos -= 0.5;
        }
    }
    return `Resultado : ${pontos} pontos`;
}

console.log(hof());




