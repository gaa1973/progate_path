export const breadthFirstSearch = (
  relationships: number[][],
  startUser: number,
  targetUser: number,
): number => {
  // スタートユーザーとターゲットユーザーが同じ場合は距離0
  if (startUser === targetUser) {
    return 0;
  }

  // BFSのための訪問済みノードを記録するセット
  const visited = new Set<number>();
  // BFSのためのキュー：[ユーザーID, 距離]のタプル
  const queue: Array<[number, number]> = [];

  // スタートユーザーをキューに追加し、訪問済みとしてマーク
  queue.push([startUser, 0]);
  visited.add(startUser);

  // キューが空になるまでループ
  while (queue.length > 0) {
    // キューから最初の要素を取得
    const [currentUser, distance] = queue.shift()!;

    // 現在のユーザーの友達を調べる
    for (const friend of relationships[currentUser]) {
      // ターゲットユーザーが見つかった場合、距離を返す
      if (friend === targetUser) {
        return distance + 1;
      }

      // 訪問済みでない場合、キューに追加
      if (!visited.has(friend)) {
        visited.add(friend);
        queue.push([friend, distance + 1]);
      }
    }
  }

  // ターゲットユーザーが見つからない場合、-1を返す
  return -1;
};
