const $form = document.getElementById('form'); // フォームにアクセス
const $input = document.getElementById('input'); // テキストにアクセス
const $ul = document.getElementById('ul'); // ulタグにアクセス

$form.addEventListener('submit', (event) => { // 入力を送信するときに
    event.preventDefault(); // 
    console.log($input.value);
    add();
});

function add() {
    const $li = document.createElement('li'); // liタグを作成しアクセス
    $li.innerText = $input.value; // テキストに入力した内容をliタグのテキストに入れる
    $li.classList.add('List-group-item'); // liタグにクラスを追加
    $ul.appendChild($li); // ulタグの子供としてliタグを追加
    $input.value = ""; // テキスト入力欄を空白に
}