const questions = [
    "O que aprendi hoje?" ,
    "O que me aborreceu hoje? Tem algo no meu controle para melhorar a situação?" ,
    "Ajudei alguém hoje? Se não, o que posso fazer para me ajudar?" ,
    "O que me deixou feliz hoje?" ,
]

const ask = (index) => {
    process.stdout.write('\n' + questions[index] + ' > ');
}

const answerArray = [];

ask( index = 0);

process.stdin.on("data" , data => {
    answerArray.push(data.toString().trim());

    if (answerArray.length < questions.length) {
        ask(answerArray.length);
    } else {
        process.exit();
    }
})

process.on("exit" , ()=>{
    console.log(`
        Olá, pessoa!
        
        Hoje, você aprendeu:
        ${answerArray[0]}
        
        O que te aborreceu e você poderia melhorar foi:
        ${answerArray[1]}
        
        Você ajudou ou poderia se ajudar:
        ${answerArray[2]}
        
        Isso aqui te deixou feliz, hoje:
        ${answerArray[3]}`
    );
})