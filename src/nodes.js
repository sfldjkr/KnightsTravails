class Node {
  constructor(coord) {
    this.value = coord;
    (this.forwardLeft = null),
      (this.forwardRight = null),
      (this.leftForward = null),
      (this.rightForward = null),
      (this.rightBackward = null),
      (this.leftBackward = null),
      (this.backwardRight = null),
      (this.backwardLeft = null);
    (this.forwardLeftList = [coord]),
      (this.forwardRightList = [coord]),
      (this.leftForwardList = [coord]),
      (this.rightForwardList = [coord]),
      (this.rightBackwardList = [coord]),
      (this.leftBackwardList = [coord]),
      (this.backwardRightList = [coord]),
      (this.backwardLeftList = [coord]);
    this.previous = [];
  }
}

class semiNode {
  constructor(coord) {
    this.value = coord;
    (this.forwardLeft = null),
      (this.forwardRight = null),
      (this.leftForward = null),
      (this.rightForward = null),
      (this.rightBackward = null),
      (this.leftBackward = null),
      (this.backwardRight = null),
      (this.backwardLeft = null);
    this.previous = [];
  }
}

export { Node, semiNode };
