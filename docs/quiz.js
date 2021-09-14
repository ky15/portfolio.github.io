const quiz = [
    {
        question: '王貞治の通算ホームラン数は？',
        choices: ['657', '755', '762', '868'],
        correct: '868'
    }, {
        question: '張本勲の通算最多安打数は？',
        choices: ['2786', '2901', '3085', '3089'],
        correct: '3085'
    }, {
        question: 'NPBのシーズン最高打率保持者は誰？',
        choices: ['イチロー', 'バース', '張本勲', '内川聖一'],
        correct: 'バース'
    }
];

const $question = document.getElementById('question') // idがquestionの情報を$questionにいれる
const $button = document.getElementsByTagName('button')// buttonタグの情報を$buttonにいれる
let count = 0; // 出題数カウント
let score = 0; // 正解数カウント

// クイズを出題するsetupQuiz関数を定義
const setupQuiz = () => {
    $question.innerText = quiz[count].question // 問題文を書き換える
    for(let i = 0; i < quiz[count].choices.length; i++){ // 選択肢の要素数分回して
        $button[i].innerText = quiz[count].choices[i]; // それぞれのボタンのテキスト部分を書き換える
    }    
}

// ボタンをクリックしたときの正誤判定を行うclickHandler関数を定義
const clickHandler = () => { 
    for (let i = 0; i < quiz[count].choices.length; i++) { // 選択肢の要素数分回して
        $button[i].addEventListener('click', () => { // i番目のボタンをクリックした際の処理を記述

            if(quiz[count].correct === quiz[count].choices[i]){ // クリックしたボタンが正解なら
                window.alert('正解！'); // アラートを出し正解数を+する
                score++;
            } else { // クリックしたボタンが不正解なら
                window.alert('不正解！'); // アラートを出す
            }

            count++; // 出題数を+する
            
            if(count < quiz.length){ // 出題数が問題数より少ない場合は
                setupQuiz(); // 次のクイズを出題する
            } else { // 出題数が問題数と同数なら
                window.alert('終了！あなたのスコアは' + score + '/' + quiz.length + 'です！'); // アラートにスコアを表示して
                window.location.reload(); // 画面をリロードする
            }
        });
    }
}
setupQuiz(); // 最初の一問だけ手動で出題
clickHandler(); // 一問目の正誤判定とその後の出題用の関数を実行