import Node from "./node-class.js";

class HashMap{
  constructor(list = null){
    this.list = new Array(16);
  }

  hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i+=1) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= 16;
    }
 
    return hashCode;
  } 

  set(key, value){
    const number = this.hash(key);
    
    const newNode = new Node(value);

    



  }

}

export default HashMap