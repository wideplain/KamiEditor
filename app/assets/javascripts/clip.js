var form = document.forms.targetForm;

var copyTextInTarget = function(target) {

    // 要素に含まれる文字列全てを選択状態にする
    target.selectionStart = 0;
    target.selectionEnd = target.value.length;

    // コピーしたい文字列がある要素をフォーカス
    target.focus();

    // コピーを実行する。失敗した場合はログにメッセージを表示。
    if (!document.execCommand('copy')) {
        console.log("コピーに失敗しました。");
    }

    // フォーカスを外す
    target.blur();
};

// ボタン（copy1）がクリックされた時
form.copy1.addEventListener("click", function(e) {

    // ボタン本来の動作をブロック
    e.preventDefault();

    // フォームの中にあるinput要素を取得
    var input = form.inputArea;

    // 生成と同時にコピーする
    copyTextInTarget(input);
}, false);

// ボタン（copy2）がクリックされた時
form.copy2.addEventListener("click", function(e) {

    // ボタン本来の動作をブロック
    e.preventDefault();

    // フォームの中にあるテキストエリアを取得
    var textarea = form.codes;

    // 生成と同時にコピーする
    copyTextInTarget(textarea);
}, false);
