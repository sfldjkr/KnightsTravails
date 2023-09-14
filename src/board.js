import { showShortestWay } from "./shortestFunc.js";
import { showAnswer } from "./display.js";
import { Node, semiNode } from "./nodes.js";

let AllPermutationMovesFrom = (coordination, memo) => {
  const key = `${coordination[0]},${coordination[1]}`;

  if (memo.has(key)) {
    return null;
  }

  if (
    coordination[0] > 8 ||
    coordination[0] <= 0 ||
    coordination[1] <= 0 ||
    coordination[1] > 8
  ) {
    return null;
  }
  let coordNode = new semiNode(coordination);
  memo.set(key, coordNode.value); // Memoize the result
  if (memo.size === 64) return null;
  let copyMemo = new Map(memo);

  coordNode.forwardRight = AllPermutationMovesFrom(
    [coordination[0] + 1, coordination[1] + 2],
    copyMemo,
  );
  coordNode.forwardLeft = AllPermutationMovesFrom(
    [coordination[0] - 1, coordination[1] + 2],
    copyMemo,
  );
  coordNode.leftForward = AllPermutationMovesFrom(
    [coordination[0] - 2, coordination[1] + 1],
    copyMemo,
  );
  coordNode.rightForward = AllPermutationMovesFrom(
    [coordination[0] + 2, coordination[1] + 1],
    copyMemo,
  );
  coordNode.rightBackward = AllPermutationMovesFrom(
    [coordination[0] + 2, coordination[1] - 1],
    copyMemo,
  );
  coordNode.leftBackward = AllPermutationMovesFrom(
    [coordination[0] - 2, coordination[1] - 1],
    copyMemo,
  );
  coordNode.backwardLeft = AllPermutationMovesFrom(
    [coordination[0] - 1, coordination[1] - 2],
    copyMemo,
  );
  coordNode.backwardRight = AllPermutationMovesFrom(
    [coordination[0] + 1, coordination[1] - 2],
    copyMemo,
  );

  return coordNode;
};

let AllPermutationMovesFromveta = (coordination, list) => {
  if (
    coordination[0] > 8 ||
    coordination[0] <= 0 ||
    coordination[1] <= 0 ||
    coordination[1] > 8
  ) {
    return null;
  }
  for (let item of list) {
    if (item[0] === coordination[0] && item[1] === coordination[1]) {
      return null;
    }
  }

  list.push(coordination);
  let coordNode = new semiNode(coordination);

  coordNode.forwardRight = AllPermutationMovesFrom(
    [coordination[0] + 1, coordination[1] + 2],
    [...list],
  );
  coordNode.forwardLeft = AllPermutationMovesFrom(
    [coordination[0] - 1, coordination[1] + 2],
    [...list],
  );
  coordNode.leftForward = AllPermutationMovesFrom(
    [coordination[0] - 2, coordination[1] + 1],
    [...list],
  );
  coordNode.rightForward = AllPermutationMovesFrom(
    [coordination[0] + 2, coordination[1] + 1],
    [...list],
  );
  coordNode.rightBackward = AllPermutationMovesFrom(
    [coordination[0] + 2, coordination[1] - 1],
    [...list],
  );
  coordNode.leftBackward = AllPermutationMovesFrom(
    [coordination[0] - 2, coordination[1] - 1],
    [...list],
  );
  coordNode.backwardLeft = AllPermutationMovesFrom(
    [coordination[0] - 1, coordination[1] - 2],
    [...list],
  );
  coordNode.backwardRight = AllPermutationMovesFrom(
    [coordination[0] + 1, coordination[1] - 2],
    [...list],
  );
  return coordNode;
};

let AllMovesFrom = (coordination) => {
  if (
    coordination[0] > 8 ||
    coordination[0] <= 0 ||
    coordination[1] <= 0 ||
    coordination[1] > 8
  ) {
    return null;
  }
  let coordNode = new Node(coordination);
  const memoOne = new Map();
  const memoTwo = new Map();
  const memoThree = new Map();
  const memoFour = new Map();
  const memoFive = new Map();
  const memoSix = new Map();
  const memoSeven = new Map();
  const memoEight = new Map();
  const key = `${coordination[0]},${coordination[1]}`;
  memoOne.set(key, coordNode.value);
  memoTwo.set(key, coordNode.value);
  memoThree.set(key, coordNode.value);
  memoFour.set(key, coordNode.value);
  memoFive.set(key, coordNode.value);
  memoSix.set(key, coordNode.value);
  memoSeven.set(key, coordNode.value);
  memoEight.set(key, coordNode.value);

  coordNode.forwardRight = AllPermutationMovesFrom(
    [coordination[0] + 1, coordination[1] + 2],
    memoOne,
  );
  coordNode.forwardLeft = AllPermutationMovesFrom(
    [coordination[0] - 1, coordination[1] + 2],
    memoTwo,
  );
  coordNode.leftForward = AllPermutationMovesFrom(
    [coordination[0] - 2, coordination[1] + 1],
    memoThree,
  );
  coordNode.rightForward = AllPermutationMovesFrom(
    [coordination[0] + 2, coordination[1] + 1],
    memoFour,
  );
  coordNode.rightBackward = AllPermutationMovesFrom(
    [coordination[0] + 2, coordination[1] - 1],
    memoFive,
  );
  coordNode.leftBackward = AllPermutationMovesFrom(
    [coordination[0] - 2, coordination[1] - 1],
    memoSix,
  );
  coordNode.backwardLeft = AllPermutationMovesFrom(
    [coordination[0] - 1, coordination[1] - 2],
    memoSeven,
  );
  coordNode.backwardRight = AllPermutationMovesFrom(
    [coordination[0] + 1, coordination[1] - 2],
    memoEight,
  );
  return coordNode;
};

let getAllMoves = () => {
  let list = [];
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      list.push([i, j]);
    }
  }
  let treeObj = {};
  list.forEach((coordination) => {
    treeObj[`${coordination[0]}${coordination[1]}`] =
      AllMovesFrom(coordination);
  });

  return treeObj;
};
class Board {
  constructor() {
    this.AllMoves = getAllMoves();
  }

  knightMoves(start, end) {
    let shortestWay = showShortestWay(start, end, this.AllMoves);
    showAnswer(shortestWay);
  }
}

export { Board };
