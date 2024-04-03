import Node from "./node-class.js";

class HashMap {
  constructor() {
    this.brackets = new Array(16);
  }

  static hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= 16;
    }
    return hashCode;
  }

  set(key, value) {
    const number = HashMap.hash(key);

    const newNode = new Node(key, value);
    console.log("1", this.brackets[number]);
    let current;

    if (!this.brackets[number]) {
      this.brackets[number] = newNode;
    } else {
      current = this.brackets[number];
      console.log("3", current[key]);
      while (current) {
        if (Object.keys(current)[0] === key) {
          current[key] = value;
          return;
        }
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  get(key) {
    const number = this.hash(key);
    let current;
    if (!this.brackets[number]) return null;

    current = this.brackets[number];
    while (current.nextNode) {
      if (Object.keys(current)[0] === key) return current[key];
      current = current.nextNode;
    }
    return null;
  }

  has(key) {
    const number = HashMap.hash(key);
    let current;
    if (!this.brackets[number]) return false;

    current = this.brackets[number];
    while (current.nextNode) {
      if (Object.keys(current)[0] === key) return true;
      current = current.nextNode;
    }
    return false;
  }

  remove(key) {
    const number = HashMap.hash(key);

    if (!this.brackets[number]) return false;

    let current = this.brackets[number];
    if (!current.nextNode) {
      console.log("current", current);
      this.brackets[number] = null;
      return true;
    }

    let prev = current;
    while (current) {
      if (Object.keys(current)[0] === key) {
        if (!current.nextNode) {
          prev.nextNode = null;
          return true;
        }
        prev.nextNode = current.nextNode;
        return true;
      }
      prev = current;
      current = current.nextNode;
    }
    return false;
  }

  length() {
    let count = 0;
    this.brackets.forEach((element) => {
      if (element) {
        count += 1;
        let current = element;
        console.log(current);
        while (current.nextNode) {
          count += 1;
          current = current.nextNode;
        }
      }
    });
    return count;
  }

  clear() {
    this.brackets.length = 0;
    return "Hashmap cleared";
  }

  keys() {
    const keys = [];
    this.brackets.forEach((element) => {
      let current = element;
      keys.push(Object.keys(element)[0]);

      while (current.nextNode) {
        current = current.nextNode;
        keys.push(Object.keys(current)[0]);
      }
    });
    return keys;
  }

  values() {
    const values = [];
    this.brackets.forEach((element) => {
      let current = element;
      values.push(Object.values(element)[0]);

      while (current.nextNode) {
        current = current.nextNode;
        values.push(Object.values(current)[0]);
      }
    });
    return values;
  }

  entries() {
    const entries = [];
    this.brackets.forEach((element) => {
      let current = element;
      entries.push(Object.entries(element)[0]);

      while (current.nextNode) {
        current = current.nextNode;
        entries.push(Object.entries(current)[0]);
      }
    });
    return entries;
  }
}

export default HashMap;
