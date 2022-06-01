const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');


const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElemwnt = document.getElementById('answer-button');

let shuffledQuestion, currentQuestionIndex;
let quizScore, totalquestions = 0;

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++;
    setNextQuestion();
})

function startQuiz(){
    startButton.classList.add('hide')
    document.getElementById('right-answers').innerText = null;
    shuffledQuestion = questions.sort(()=> {Math.random() -0.5})
    currentQuestionIndex=0;
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    answerButtonElemwnt.classList.remove('hide');
    setNextQuestion();
    quizScore=0;
}

function setNextQuestion(){
    resetState();
    showQueston(shuffledQuestion[currentQuestionIndex])
    totalquestions++;
}

function showQueston(question){
    questionElement.innerText = question.question;
    question.answers.forEach((answer)=>{
        const button = document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnser);
        answerButtonElemwnt.appendChild(button);

    })
}


function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    
    while(answerButtonElemwnt.firstChild){
        answerButtonElemwnt.removeChild(answerButtonElemwnt.firstChild);
    }
}


function selectAnser(e){
    const selectedButton=e.target;
    const correct=selectedButton.dataset.correct;

    setStatusClass(document.body, correct)
    Array.from(answerButtonElemwnt.children).forEach((button)=>{
        setStatusClass(button, button.dataset.correct)
    })
    if(selectedButton.dataset=correct){
        quizScore++
    }
    if(shuffledQuestion.length>currentQuestionIndex +1){
        nextButton.classList.remove("hide");
    }else{
        document.getElementById('right-answers').innerText='score: ' + quizScore + '/' + totalquestions;
        startButton.innerText = "restart";
        startButton.classList.remove("hide");
    }
    
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
    
    
}


const questions = [
    {
        question: 'Which of the following is a Javascript framework? ',
        answers: [
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false}
        ]
    },
    {
        question: 'Who is the founder of Tesla?',
        answers: [
            {text: 'Steve Jobs', correct: false},
            {text: 'Doctor Sebi', correct: false},
            {text: 'Elon Musk', correct: true},
            {text: 'Rahul Ghandi', correct: false}
        ]
    },
    {
        question: 'The first country to land on the moon? ',
        answers: [
            {text: 'China', correct: false},
            {text: 'USA', correct: false},
            {text: 'Russia', correct: true},
            {text: 'United Kingdom', correct: false}
        ]
    },
    {
        question: 'Who was the first black president of USA ',
        answers: [
            {text: 'Barack Obama', correct: true},
            {text: 'Malcom X', correct: false},
            {text: 'Bumpy Johnson', correct: false},
            {text: 'Eddie Santiago', correct: false}
        ]
    }

]