import { getTheShortestArray } from "./sortingArr.js";
let recursiverlyQue = (start, end) => {
  let que = [];
  let list = [];
  list.forEach((list) => {
    list.push([start.value[0], start.value[1]]);
  });
  start.previous.push(start.value);
  que.push(start);
  while (que.length > 0) {
    if (que[0].value[0] === end[0] && que[0].value[1] === end[1]) {
      list = start.previous;
      que = [];
      break;
    }
    let pointer = que[0];
    if (pointer.forwardLeft !== null) {
      pointer.previous.forEach((item) => {
        pointer.forwardLeft.previous.push(item);
      });
      pointer.forwardLeft.previous.push(pointer.forwardLeft.value);
      que.push(pointer.forwardLeft);

      if (
        pointer.forwardLeft.value[0] === end[0] &&
        pointer.forwardLeft.value[1] === end[1]
      ) {
        list = pointer.forwardLeft.previous;

        que = [];
        break;
      }
    }
    if (pointer.forwardRight !== null) {
      que.push(pointer.forwardRight);

      pointer.previous.forEach((item) => {
        pointer.forwardRight.previous.push(item);
      });
      pointer.forwardRight.previous.push(pointer.forwardRight.value);

      if (
        pointer.forwardRight.value[0] === end[0] &&
        pointer.forwardRight.value[1] === end[1]
      ) {
        list = pointer.forwardRight.previous;

        que = [];
        break;
      }
    }
    if (pointer.leftForward !== null) {
      que.push(pointer.leftForward);

      pointer.previous.forEach((item) => {
        pointer.leftForward.previous.push(item);
      });
      pointer.leftForward.previous.push(pointer.leftForward.value);

      if (
        pointer.leftForward.value[0] === end[0] &&
        pointer.leftForward.value[1] === end[1]
      ) {
        list = pointer.leftForward.previous;

        que = [];
        break;
      }
    }
    if (pointer.rightForward !== null) {
      que.push(pointer.rightForward);

      pointer.previous.forEach((item) => {
        pointer.rightForward.previous.push(item);
      });
      pointer.rightForward.previous.push(pointer.rightForward.value);

      if (
        pointer.rightForward.value[0] === end[0] &&
        pointer.rightForward.value[1] === end[1]
      ) {
        list = pointer.rightForward.previous;

        que = [];
        break;
      }
    }
    if (pointer.rightBackward !== null) {
      que.push(pointer.rightBackward);

      pointer.previous.forEach((item) => {
        pointer.rightBackward.previous.push(item);
      });
      pointer.rightBackward.previous.push(pointer.rightBackward.value);
      if (
        pointer.rightBackward.value[0] === end[0] &&
        pointer.rightBackward.value[1] === end[1]
      ) {
        list = pointer.rightBackward.previous;

        que = [];
        break;
      }
    }
    if (pointer.leftBackward !== null) {
      que.push(pointer.leftBackward);
      pointer.previous.forEach((item) => {
        pointer.leftBackward.previous.push(item);
      });
      pointer.leftBackward.previous.push(pointer.leftBackward.value);

      if (
        pointer.leftBackward.value[0] === end[0] &&
        pointer.leftBackward.value[1] === end[1]
      ) {
        list = pointer.leftBackward.previous;

        que = [];
        break;
      }
    }
    if (pointer.backwardRight !== null) {
      que.push(pointer.backwardRight);

      pointer.previous.forEach((item) => {
        pointer.backwardRight.previous.push(item);
      });
      pointer.backwardRight.previous.push(pointer.backwardRight.value);

      if (
        pointer.backwardRight.value[0] === end[0] &&
        pointer.backwardRight.value[1] === end[1]
      ) {
        list = pointer.backwardRight.previous;

        que = [];
        break;
      }
    }
    if (pointer.backwardLeft !== null) {
      que.push(pointer.backwardLeft);
      pointer.previous.forEach((item) => {
        pointer.backwardLeft.previous.push(item);
      });
      pointer.backwardLeft.previous.push(pointer.backwardLeft.value);

      if (
        pointer.backwardLeft.value[0] === end[0] &&
        pointer.backwardLeft.value[1] === end[1]
      ) {
        list = pointer.backwardLeft.previous;

        que = [];
        break;
      }
    }
    que.shift();
  }
  return list;
};

let recursiverlyQueBeta = (start, end) => {
  let que = [];
  let list = [];

  start.previous.push(start.value);
  que.push(start);
  while (que.length > 0) {
    let toAppendList = [];
    let LIST = [];

    que.forEach((item) => {
      LIST.push(item.value);
    });

    if (que[0].value[0] === end[0] && que[0].value[1] === end[1]) {
      list.push(que[0].previous);
    }
    let pointer = que[0];

    if (pointer.forwardRight !== null) {
      pointer.previous.forEach((item) => {
        pointer.forwardRight.previous.push(item);
      });

      pointer.forwardRight.previous.push(pointer.forwardRight.value);
      toAppendList.push(pointer.forwardRight);
    }

    if (pointer.forwardLeft !== null) {
      pointer.previous.forEach((item) => {
        pointer.forwardLeft.previous.push(item);
      });

      pointer.forwardLeft.previous.push(pointer.forwardLeft.value);
      toAppendList.push(pointer.forwardLeft);
    }

    if (pointer.leftForward !== null) {
      pointer.previous.forEach((item) => {
        pointer.leftForward.previous.push(item);
      });

      pointer.leftForward.previous.push(pointer.leftForward.value);
      toAppendList.push(pointer.leftForward);
    }

    if (pointer.rightForward !== null) {
      pointer.previous.forEach((item) => {
        pointer.rightForward.previous.push(item);
      });

      pointer.rightForward.previous.push(pointer.rightForward.value);
      toAppendList.push(pointer.rightForward);
    }
    if (pointer.rightBackward !== null) {
      pointer.previous.forEach((item) => {
        pointer.rightBackward.previous.push(item);
      });

      pointer.rightBackward.previous.push(pointer.rightBackward.value);
      toAppendList.push(pointer.rightBackward);
    }
    if (pointer.leftBackward !== null) {
      pointer.previous.forEach((item) => {
        pointer.leftBackward.previous.push(item);
      });

      pointer.leftBackward.previous.push(pointer.leftBackward.value);
      toAppendList.push(pointer.leftBackward);
    }
    if (pointer.backwardRight !== null) {
      pointer.previous.forEach((item) => {
        pointer.backwardRight.previous.push(item);
      });

      pointer.backwardRight.previous.push(pointer.backwardRight.value);
      toAppendList.push(pointer.backwardRight);
    }
    if (pointer.backwardLeft !== null) {
      pointer.previous.forEach((item) => {
        pointer.backwardLeft.previous.push(item);
      });

      pointer.backwardLeft.previous.push(pointer.backwardLeft.value);
      toAppendList.push(pointer.backwardLeft);
    }
    toAppendList.forEach((subList) => {
      que.push(subList);
    });
    que.shift();
  }
  return list;
};

let showShortestWay = (start, end, allMoves) => {
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log("please provide different end points");
    return [];
  }
  if (start[0] > 8 || start[0] <= 0 || end[1] <= 0 || end[1] > 8) {
    console.log("value are out of range");
    return [];
  }
  let startIndex = `${start[0]}${start[1]}`;
  let allPath = recursiverlyQueBeta(allMoves[startIndex], end);
  let shortestPath = getTheShortestArray(allPath);
  return shortestPath;
};

export { showShortestWay };
