import "./styles.css";

/*
 * クリックイベントの定義
 */
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createImcompleteList(inputText);
};

/*
 *  未完了リストのTODOを削除する
 */
const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

/*
 * 未完了リストのTODOを作成する
 */
const createImcompleteList = (text) => {
  // liタグの作成
  const li = document.createElement("li");

  // divタグの作成
  const div = document.createElement("div");
  div.className = "list-row";

  // spanタグの作成
  const span = document.createElement("span");
  span.innerText = text;

  // buttonタグ（完了）の作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)の親タグ(li)を削除する
    deleteFromImcompleteList(completeButton.parentNode.parentNode);

    /*
     * 完了したTODOリストへ追加する
     */
    let addTarget = completeButton.parentNode.parentNode;
    // TODO内容を取得する
    const text = addTarget.firstChild.firstChild.innerText;

    // liタグの作成
    const li2 = document.createElement("li");
    // divタグの作成
    const div2 = document.createElement("div");
    div2.className = "list-row";
    // spanタグの作成
    const span2 = document.createElement("span");
    span2.innerText = text;
    // buttonタグ（戻す）の作成
    const undoButton = document.createElement("button");
    undoButton.innerText = "戻す";
    undoButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)の親タグ(li)を削除する
      document
        .getElementById("complete-list")
        .removeChild(undoButton.parentNode.parentNode);

      // TODO内容を取得する
      const text2 =
        undoButton.parentNode.parentNode.firstChild.firstChild.innerText;

      createImcompleteList(text2);
    });

    // 上記のタグを使ってTODOリストの要素を構築
    li2.appendChild(div2);
    div2.appendChild(span2);
    div2.appendChild(undoButton);

    // 未完了リストに追加
    document.getElementById("complete-list").appendChild(li2);
  });

  // buttonタグ（削除）の作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)の親タグ(li)を削除する
    deleteFromImcompleteList(deleteButton.parentNode.parentNode);
  });

  // 上記のタグを使ってTODOリストの要素を構築
  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

/*
 * 追加ボタンのクリックイベントを設定
 */
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
