import Node from "./node-class.js";

class HashMap {
  constructor() {
    this.brackets = new Array(16);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= 16;
    }

    return hashCode;
  }

  set(key, value) {
    const number = this.hash(key);

    const newNode = new Node(key, value);

    let current;

    if (!this.brackets[number]) {
      this.brackets[number] = newNode;
    } else {
      current = this.brackets[number];
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  get(key){
    const number = this.hash(key);
    let current;
    if (!this.brackets[number])return null
    
    current = this.brackets[number]
    while (current.nextNode) {
      if(Object.keys(current)[0] === key) return current[key]
      current= current.nextNode;
    }
    return null
  }

  has(key){
    const number = this.hash(key);
    let current;
    if (!this.brackets[number])return false
    
    current = this.brackets[number]
    while (current.nextNode) {
      if(Object.keys(current)[0] === key) return true
      current= current.nextNode;
    }
    return false
  }

  
}

export default HashMap;
