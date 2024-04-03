class Node {
  constructor(key, value, nextNode=null) {
    this[key] = value;
    this.nextNode = nextNode;
  }
}

export default Node;
