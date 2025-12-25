/**
 * state_with_array/main.tsx
 * 配列を state として管理するサンプルアプリ
 * - `users` 配列を `useState` で管理
 * - 新しいユーザーの追加、名前の編集、削除を行う
 */
import ReactDOM from "react-dom/client"; // React 18 のルート作成用
import React, {useState} from "react"; // React と useState フック
import {v4 as uuid} from "uuid"; // ユーザーごとに一意な id を生成するユーティリティ

// `root` 要素を取得して React アプリをマウントする
const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(<App />);

function App() {
  // 入力フォームの値を保持する state
  const [input, setInput] = useState("");

  // ユーザー一覧を保持する state（配列）
  // 各要素は { id: string, name: string } の形
  const [users, setUsers] = useState([
    {id: uuid(), name: "taro"},
    {id: uuid(), name: "jiro"},
    {id: uuid(), name: "saburo"},
  ]);

  // フォーム入力が変わったときに呼ばれるハンドラ
  // event.target.value をそのまま `input` state に保存する
  function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  // 「追加」ボタンが押されたときの処理
  // 現在の `users` 配列を展開して新しいユーザーを末尾に追加する
  function handleAddClick() {
    setUsers([...users, {id: uuid(), name: input}]);
  }

  // ユーザー名を編集したときの処理
  // map で該当 id の要素だけ書き換え、その他はそのまま返す
  function handleNameChange(id: string, input: string) {
    setUsers(
      users.map(user => {
        if (user.id === id) {
          return {...user, name: input};
        }
        return user;
      })
    );
  }

  // ユーザー削除の処理
  // 指定 id と一致しない要素だけ残す（filter）
  function handleDeleteClick(id: string) {
    setUsers(users.filter(user => user.id !== id));
  }

  // 以下がコンポーネントの描画部分
  // - 入力フォームと追加ボタン
  // - ユーザー一覧（各要素には必ず `key` を付ける）
  // - 現在のユーザー名をスラッシュ区切りで表示
  return (
    <>
      <input type="text" value={input} onChange={handleFormChange}></input>
      <button onClick={handleAddClick}>add new user</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <input
              type="text"
              value={user.name}
              onChange={e => handleNameChange(user.id, e.target.value)}
            ></input>
            <button onClick={() => handleDeleteClick(user.id)}>delete</button>
          </li>
        ))}
      </ul>
      <div>{users.map(user => user.name).join(" / ")}</div>
    </>
  );
}
