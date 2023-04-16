const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
        setNextQuestion()
        })

    function startGame() {
        startButton.classList.add('hide')
        shuffledQuestions = questions.sort(() => Math.random() - .10)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
            setNextQuestion()
        }

    function setNextQuestion() {
        resetState()
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }

    function showQuestion(question) {
        questionElement.innerText = question.question
        question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if (answer.correct) {
            button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
        })
    }

    function resetState() {
        clearStatusClass(document.body)
        nextButton.classList.add('hide')
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
            setStatusClass(document.body, correct)
            Array.from(answerButtonsElement.children).forEach(button => {
                setStatusClass(button, button.dataset.correct)
            })
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide')
        } else {
            startButton.innerText = 'Restart'
            startButton.classList.remove('hide')
        }
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }

    const questions = [
        {
            question: "What is the largest planet in our solar system?",
            answers: [
                {text: 'Earth', correct: false},
                {text: 'Jupiter', correct: true},
                {text: 'Mars', correct: false},
                {text: 'Saturn', correct: false},
            ]
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                {text: 'Au', correct: true},
                {text: 'Ag', correct: false},
                {text: 'Cu', correct: false},
                {text: 'Fe', correct: false},
            ]
        },
        {
            question: 'What is 2 + 2?',
            answers: [
                { text: '4', correct: true },
                { text: '22', correct: false }
            ]
        },
        {
            question: 'Who is the best YouTuber?',
            answers: [
                { text: 'Web Dev Simplified', correct: true },
                { text: 'Traversy Media', correct: true },
                { text: 'Dev Ed', correct: true },
                { text: 'Fun Fun Function', correct: true }
            ]
        },
        {
            question: 'Is web development fun?',
            answers: [
                { text: 'Kinda', correct: false },
                { text: 'YES!!!', correct: true },
                { text: 'Um no', correct: false },
                { text: 'IDK', correct: false }
            ]
        },
        {
            question: 'What is 4 * 2?',
            answers: [
                { text: '6', correct: false },
                { text: '8', correct: true }
            ]
        },
        {
            question: "What is the capital of France?",
            answers: [
                {text: 'Paris', correct: true },
                {text: 'Berlin', correct: false },
                {text: 'Rome', correct: false },
                {text: 'Madrid', correct: false },
            ]            
        },
        {
            question: "What is the highest mountain in the world?",
            answers: [
                {text: 'Mount Fuji', correct: true },
                {text: 'Mount Kilimanjaro', correct: false },
                {text: 'Mount Everest', correct: true },
                {text: 'McKinley', correct: false },                
            ]
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "What is the primary gas that makes up Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Methane"],
            answer: "Nitrogen"
        },
        {
            question: "Who is the author of the Harry Potter book series?",
            options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
            answer: "J.K. Rowling"
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
            answer: "Blue whale"
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yen", "Euro", "Dollar", "Pound"],
            answer: "Yen"
        },
        {
            question: "What is the tallest breed of dog?",
            options: ["Labrador Retriever", "Great Dane", "Siberian Husky", "Chihuahua"],
            answer: "Great Dane"
        }
    ]