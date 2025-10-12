const questions = [
    // 外向 (E) vs. 內向 (I)
    {
        question: "你的個性較像什麼？",
        dichotomy: 'EI',
        answers: [
            { text: "非常閉思", score: -3 },
            { text: "有點閉思", score: -1 },
            { text: "不好說", score: 0 },
            { text: "有點蝦趴", score: 1 },
            { text: "非常蝦趴", score: 3 }
        ]
    },
    {
        question: "在派對裡，你會？",
        dichotomy: 'EI',
        answers: [
            { text: "靜靜地觀察，等待別人開口。", score: -3 },
            { text: "主動去認識大家，跟大家聊天。", score: 3 }
        ]
    },

    // 實感 (S) vs. 直覺 (N)
    {
        question: "當你在看電影時，你比較注意？",
        dichotomy: 'SN',
        answers: [
            { text: "電影的細節、場景和對白。", score: -3 },
            { text: "電影背後的意義和隱藏的訊息。", score: 3 }
        ]
    },
    {
        question: "你覺得什麼比較重要？",
        dichotomy: 'SN',
        answers: [
            { text: "當下的事實和實際的經驗。", score: -3 },
            { text: "未來的可能性和新的想法。", score: 3 }
        ]
    },
    
    // 思考 (T) vs. 情感 (F)
    {
        question: "當朋友找你訴苦時，你會？",
        dichotomy: 'TF',
        answers: [
            { text: "先分析問題，給他實際的解決方案。", score: -3 },
            { text: "先安撫他的情緒，給他一個抱抱。", score: 3 }
        ]
    },
    {
        question: "做決定時，你通常會？",
        dichotomy: 'TF',
        answers: [
            { text: "用邏輯和客觀的標準來判斷。", score: -3 },
            { text: "考慮所有人的感受和和諧。", score: 3 }
        ]
    },

    // 判斷 (J) vs. 感知 (P)
    {
        question: "你的生活風格比較像？",
        dichotomy: 'JP',
        answers: [
            { text: "有計畫、有條理，喜歡照表操課。", score: -3 },
            { text: "隨性、彈性，喜歡保持開放選項。", score: 3 }
        ]
    },
    {
        question: "你怎麼看待死線 (Deadline)？",
        dichotomy: 'JP',
        answers: [
            { text: "把它當成目標，提早完成。", score: -3 },
            { text: "最後一刻再說，反正來得及。", score: 3 }
        ]
    }
];

const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultMessage = document.getElementById('result-message');

let currentQuestionIndex = 0;
// 新增：用物件來儲存四個維度的分數
let scores = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
};

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.dataset.score = answer.score;
        button.dataset.dichotomy = currentQuestion.dichotomy; // 新增：將維度存到按鈕上
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedScore = parseInt(e.target.dataset.score);
    const dichotomy = e.target.dataset.dichotomy;
    
    // 新增：將分數加到對應的維度上
    scores[dichotomy] += selectedScore;
    
    currentQuestionIndex++;
    
    showQuestion();
}

function showResult() {
    // 這裡不再需要隱藏問題和按鈕，因為我們要直接跳轉
    // questionText.style.display = 'none';
    // answerButtons.style.display = 'none';

    let result = "";

    // 第一個維度：外向 (E) vs. 內向 (I)
    if (scores.EI >= 0) {
        result += "E";
    } else {
        result += "I";
    }

    // 第二個維度：實感 (S) vs. 直覺 (N)
    if (scores.SN <= 0) {
        result += "S";
    } else {
        result += "N";
    }

    // 第三個維度：思考 (T) vs. 情感 (F)
    if (scores.TF <= 0) {
        result += "T";
    } else {
        result += "F";
    }

    // 第四個維度：判斷 (J) vs. 感知 (P)
    if (scores.JP <= 0) {
        result += "J";
    } else {
        result += "P";
    }
    
    // 這一行是讓網頁跳轉的關鍵！
    // 它會將結果作為參數，傳送到結果頁面
    window.location.href = `result.html?type=${result}`;
}
showQuestion();