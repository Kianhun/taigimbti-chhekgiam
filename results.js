// 儲存 16 種性格的描述內容
const personalities = {
    // 記得將我們之前討論過的台語翻譯加進來
    "INFP": {
        name: "公親 - 調停者",
        description: "你ê外表恬恬仔，毋過心內真燒烙。你gâu軟心、重情重義，想欲kah別人建立深刻ê關係，佮意共人鬥相共，chóng--sī有當時仔會感覺家己是孤鳥插人群，徛佇一个干焦屬於家己ê世界。"
    },
    "INFJ": {
        name: "指點燈 - 提倡者",
        description: "你是一个心思幼路ê人，想欲追求真理，會為著公平正義勇敢喝聲。你有一寡固定深交ê朋友，嘛定定暗中觀察別人，拄著狀況ê時，用同理心化解in ê難關。"
    },
    "ENFJ": {
        name: "戰腳 - 主角",
        description: "你是真gâu做代誌ê人，會當chhōa-niá同伴向前行。你充滿熱情，人緣闊，正正是一个天生ê領導者！"
    },
    "ENTJ": {
        name: "指揮官 - 領袖",
        description: "果斷、有邏輯，天生就是領導者。他們不畏挑戰，喜歡解決複雜的問題，並且能夠有條理地安排一切，是一個天生的指揮家。"
    },
    "INTP": {
        name: "邏輯學家 - 發明家",
        description: "他們是充滿好奇心的思想家，熱愛探索複雜的理論和抽象的概念。他們的思考快速且精確，喜歡從事獨立研究。雖然有時閉思，但內心充滿了對知識的渴望。"
    },
    "ISTJ": {
        name: "後勤 - 物流師",
        description: "你是恬恬仔做閣gâu揹重擔ê人。做代誌照起工，所有的細節你攏會照顧甲到。你毋是ài展風神ê角色，毋過團體若有你絕對穩觸觸！"
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




