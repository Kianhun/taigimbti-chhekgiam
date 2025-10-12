// 儲存 16 種性格的描述內容
const personalities = {
    // 記得將我們之前討論過的台語翻譯加進來
    "INFP": {
        name: "公親 - 哲學家",
        description: "公親是一个充满理想，富有同情心，且总是努力为世界带来更美好的改变的人。他们重情重义，心肝软，就像是厝边头尾的知己，总是在你最需要时出现，给予温柔的陪伴和支持。他们看起来闭思，但内心世界非常丰富。他们喜欢跟着起毛走，并且伸勼去迎接各种挑战。"
    },
    "INFJ": {
        name: "顧問 - 預言家",
        description: "他們是心思細膩的策略家，能夠洞察人性並為他人指引方向。他們看事看得很透，也重情重義。雖然閉思，但內心充滿為世界帶來改變的熱情。"
    },
    "ENFJ": {
        name: "戰腳 - 主角",
        description: "你是真gâu做代誌ê人，會當chhōa-niá同伴向前行。你充滿熱情，人緣闊，正正是一个天生ê領導者。"
    },
    "ENTJ": {
        name: "指揮官 - 領袖",
        description: "果斷、有邏輯，天生就是領導者。他們不畏挑戰，喜歡解決複雜的問題，並且能夠有條理地安排一切，是一個天生的指揮家。"
    },
    "INTP": {
        name: "邏輯學家 - 發明家",
        description: "他們是充滿好奇心的思想家，熱愛探索複雜的理論和抽象的概念。他們的思考快速且精確，喜歡從事獨立研究。雖然有時閉思，但內心充滿了對知識的渴望。"
    }
    // 你可以繼續在這裡新增其他 11 個性格的資料...
};

// 讀取網址列的參數
const urlParams = new URLSearchParams(window.location.search);
const personalityType = urlParams.get('type');

// 如果找到性格類型，就顯示內容
if (personalityType && personalities[personalityType]) {
    const result = personalities[personalityType];
    
    // 將結果顯示在網頁上
    document.getElementById('personality-type').innerText = result.name;
    document.getElementById('description').innerText = result.description;
} else {
    // 如果沒有找到，顯示錯誤訊息
    document.getElementById('personality-type').innerText = "找不到你的性格！";
    document.getElementById('description').innerText = "請重新進行測驗。";
}