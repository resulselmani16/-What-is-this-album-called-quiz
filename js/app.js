const quizData = [
    {
        image:"/images/2014ForestHills.jpg",
        question: "What is this album called?",
        a: '2014 Forest Hills',
        b: '4 Your Eyez Only',
        c: 'AstroWorld',
        d: 'Eternal Atake',
        correct: "a"
    },
    {   image:"/images/Astroworld.jpg",
        question: "What is this album called?",
        a: 'KOD',
        b: 'Scorpion',
        c: 'Astro World',
        d: 'Jackboys',
        correct: "c"
    },
    {
        image:"/images/TakeCare.jpg",
        question: "What is this album called?",
        a: 'Issa Album',
        b: 'Eternal Atake',
        c: 'I am > I was',
        d: 'Take Care',
        correct: "d"
    },
    {
        image:"/images/EternalAtake.jpg",
        question: "What is this album called?",
        a: 'Scorpion',
        b: 'Eternal Atake',
        c: '4 Your Eyez Only',
        d: '2014 Forest Hills',
        correct: "b"
    },
    {
        image:"/images/4yourEyezOnly.jpg",
        question: "What is this album called?",
        a: '4 Your Eyez Only',
        b: 'Take Care',
        c: 'Jackboys',
        d: 'KOD',
        correct: "a"
    },
    {
        image:"/images/Kod.jpg",
        question: "What is this album called?",
        a: 'KOD',
        b: 'Issa Album',
        c: 'Astro world',
        d: 'Scorpion',
        correct: "a"
    },
    {
        image:"/images/Scorpion.jpg",
        question: "What is this album called?",
        a: 'Take Care',
        b: 'Scorpion',
        c: 'Eternal Atake',
        d: 'I am > I was',
        correct: "b"
    },
    {
        image:"/images/IssaAlbum.jpg",
        question: "What is this album called?",
        a: 'Jackboys',
        b: 'I am > I was',
        c: 'Issa Album',
        d: '2014 Forest Hills',
        correct: "c"
    },
    {
        image:"/images/Iam--Iwas.jpg",
        question: "What is this album called?",
        a: 'Eternal Atake',
        b: 'Astro world',
        c: 'Take Care',
        d: 'I am > I was',
        correct: "d"
    },
    {
        image:"/images/Jackboys.jpg",
        question: "What is this album called?",
        a: 'Jackboys',
        b: '4 Your Eyez Only',
        c: 'Scorpion',
        d: 'KOD',
        correct: "a"
    },
]

const quiz = document.getElementById('quiz')
const image = document.getElementById("image")
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')
const answerList = document.querySelectorAll('.answer')

let currentQuiz = 0;
let score = 0;

let loadQuiz = () =>{
    const currentQuizData = quizData[currentQuiz];
    image.src = currentQuizData.image;
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

let getSelected = () =>{
    let answer = undefined;
    answerList.forEach(selected => {
        if(selected.checked){
            answer = selected.id;
        }
    })
    return answer;
}

let deselectAnswers = () => {
    answerList.forEach(selected => {
        selected.checked = false;
    })
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            deselectAnswers();
            loadQuiz();
        }else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.
            <button class = "btn-results" onclick="location.reload()">Reload</button>`
        }
    }

})

loadQuiz();