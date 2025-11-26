const questions = [
    // 外向 (E) vs. 內向 (I)
    {
        question: "下面佗一个論述較符合你ê個性？",
        dichotomy: 'EI',
        answers: [
            { text: "誠閉思", score: -3 },
            { text: "小可閉思", score: -1 },
            { text: "無的確", score: 0 },
            { text: "不止仔大範", score: 1 },
            { text: "誠大範", score: 3 }
        ]
    },
    {
        question: "佇一个聚會內底，你會偏向按怎kah人chih-chiap？",
        dichotomy: 'EI',
        answers: [
            { text: "恬恬仔觀察，等待別人開喙。", score: -3 },
            { text: "主動去揣別人開講。", score: 3 }
        ]
    },

    // 實感 (S) vs. 直覺 (N)
    {
        question: "你咧看電影ê時陣會較注意？",
        dichotomy: 'SN',
        answers: [
            { text: "電影的細節、場景kah口白。", score: -3 },
            { text: "藏佇演員ê行為kah對話背後的意義和訊息。", score: 3 }
        ]
    },
    {
        question: "你感覺下面佗一个較重要？",
        dichotomy: 'SN',
        answers: [
            { text: "眼前ê事實和實際ê經驗。", score: -3 },
            { text: "未來可能發生ê代誌和新ê想法。", score: 3 }
        ]
    },
    
    // 思考 (T) vs. 情感 (F)
    {
        question: "若朋友來揣你怨嘆ê時，你會按怎反應？",
        dichotomy: 'TF',
        answers: [
            { text: "先分析問題，予伊實際ê處理方案。", score: -3 },
            { text: "先安搭伊ê情緒，共攬一下。", score: 3 }
        ]
    },
    {
        question: "做決定ê時，你通常會考慮啥物？",
        dichotomy: 'TF',
        answers: [
            { text: "用邏輯和客觀ê標準來判斷。", score: -3 },
            { text: "考慮所有人ê感受kah和諧。", score: 3 }
        ]
    },

    // 判斷 (J) vs. 感知 (P)
    {
        question: "你ê生活風格較親像？",
        dichotomy: 'JP',
        answers: [
            { text: "有規律，提早按算，照計畫進行。", score: -3 },
            { text: "佮意chhun-kiu，隨時調整。", score: 3 }
        ]
    },
    {
        question: "佗一句俗諺較符合你對期限截止ê sim-chiâⁿ？",
        dichotomy: 'JP',
        answers: [
            { text: "好天著拍算雨來糧。", score: -3 },
            { text: "時到時擔當，無米才煮番薯湯。", score: 3 }
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



