        // Get DOM elements
        const startBtn = document.getElementById('start-btn');
        const nextBtn = document.getElementById('next-btn');
        const questionContainer = document.getElementById('question-container');
        const questionElement = document.getElementById('question');
        const answerButtons = document.getElementById('answer-buttons');

        // Add event listener for start button
        startBtn.addEventListener('click', startQuiz);

        // Add event listener for next button
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            setNextQuestion();
        });

        // Add event listener for answer buttons
        answerButtons.addEventListener('click', selectAnswer);

        // Quiz data
        const quizData = [
            {
                question: 'Question 1',
                answers: [
                    { text: 'Answer 1', correct: false },
                    { text: 'Answer 2', correct: true },
                    { text: 'Answer 3', correct: false },
                    { text: 'Answer 4', correct: false }
                ]
            },
            {
                question: 'Question 2',
                answers: [
                    { text: 'Answer 1', correct: false },
                    { text: 'Answer 2', correct: false },
                    { text: 'Answer 3', correct: true },
                    { text: 'Answer 4', correct: false }
                ]
            },
            // Add more questions as needed
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        // Function to start the quiz
        function startQuiz() {
            startBtn.classList.add('hide');
            questionContainer.classList.remove('hide');
            setNextQuestion();
        }

        // Function to set the next question
        function setNextQuestion() {
            resetState();
            if (currentQuestionIndex < quizData.length) {
                showQuestion(quizData[currentQuestionIndex]);
            } else {
                // Quiz is finished
                // Show score or perform any other action
                alert('Quiz finished. Your score: ' + score);
            }
        }

        // Function to show a question
        function showQuestion(question) {
            questionElement.innerText = question.question;
            question.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add('btn');
                if (answer.correct) {
                    button.dataset.correct = true;
                }
                button.addEventListener('click', selectAnswer);
                answerButtons.appendChild(button);
                });
                }
            // Function to handle answer selection
    function selectAnswer(event) {
        const selectedButton = event.target;
        const correct = selectedButton.dataset.correct;
        setStatusClass(document.body, correct);
        Array.from(answerButtons.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
        });
        if (correct) {
            score++;
        }
        if (currentQuestionIndex < quizData.length - 1) {
            nextBtn.classList.remove('hide');
        } else {
            nextBtn.innerText = 'Finish';
        }
    }

    // Function to reset state
    function resetState() {
        nextBtn.classList.add('hide');
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    // Function to set status class
    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('incorrect');
        }
    }

    // Function to clear status class
    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('incorrect');
    }

