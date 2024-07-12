const words = [
    { word: '足', pronunciation: 'a.sh.i', type: 'noun', meaning: '足', example: '彼の足は速い。' },
    { word: '手', pronunciation: 't.e', type: 'noun', meaning: '手', example: '手を洗う。' },
    { word: '踵', pronunciation: 'k.a.o', type: 'noun', meaning: '踵', example: '踵が痛い。' },
    { word: '臓', pronunciation: 'z.a.o', type: 'noun', meaning: '臓器', example: '内臓の健康。' },
    { word: '脳', pronunciation: 'n.a.o', type: 'noun', meaning: '脳', example: '脳を鍛える。' },
    { word: '我', pronunciation: 'w.a', type: 'noun', meaning: '我', example: '我を忘れる。' },
    { word: '彼', pronunciation: 'k.a.r.e', type: 'pronoun', meaning: '彼', example: '彼は学生です。' },
    { word: '仁', pronunciation: 'r.e.n', type: 'noun', meaning: '仁', example: '仁愛の心。' },
    { word: '従', pronunciation: 's.h.u', type: 'verb', meaning: '従う', example: 'ルールに従う。' },
    { word: '立', pronunciation: 'r.i.t.s.u', type: 'verb', meaning: '立つ', example: '立ち上がる。' },
    { word: '木', pronunciation: 'k.i', type: 'noun', meaning: '木', example: '大きな木。' },
    { word: '矢', pronunciation: 'y.a', type: 'noun', meaning: '矢', example: '矢を放つ。' }
];

const dictionary = document.getElementById('dictionary');
const wordCountElem = document.getElementById('wordCount');
const exampleCountElem = document.getElementById('exampleCount');

let uniqueExamples = new Set();

function displayWords(wordsToDisplay) {
    dictionary.innerHTML = '';
    uniqueExamples.clear();
    wordsToDisplay.forEach(({ word, pronunciation, type, meaning, example }) => {
        const wordCard = document.createElement('div');
        wordCard.classList.add('word-card', type);

        wordCard.innerHTML = `
            <p><strong>${word}</strong> (${pronunciation})</p>
            <p><em>${meaning}</em></p>
            <p>${example}</p>
        `;

        dictionary.appendChild(wordCard);
        uniqueExamples.add(example);
    });

    wordCountElem.innerText = wordsToDisplay.length;
    exampleCountElem.innerText = uniqueExamples.size;
}

function searchWord() {
    const query = document.getElementById('search').value;
    const searchType = document.getElementById('searchType').value;
    let filteredWords = [];

    switch (searchType) {
        case 'prefix':
            filteredWords = words.filter(word => word.word.startsWith(query) || word.pronunciation.startsWith(query));
            break;
        case 'partial':
            filteredWords = words.filter(word => word.word.includes(query) || word.pronunciation.includes(query));
            break;
        case 'exact':
            filteredWords = words.filter(word => word.word === query || word.pronunciation === query);
            break;
        case 'pronunciation':
            filteredWords = words.filter(word => word.pronunciation.includes(query));
            break;
    }

    displayWords(filteredWords);
}

// 初回表示
displayWords(words);
