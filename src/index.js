import HashMap from "./HashMap-class.js";
import Node from "./node-class.js";


const newHashmap = new HashMap;
console.log(newHashmap.set("Fred", "Smith"))
console.log(newHashmap.set("Fred", "Bisset"))
console.log(newHashmap.set("Mickey", "walley"))

console.dir(newHashmap, {depth: null})

console.log(newHashmap.remove("Fred"))

console.log(newHashmap.length())
newHashmap.clear()
console.dir(newHashmap, {depth: null})
console.log(newHashmap.set("Fred", "Bisset"))
console.dir(newHashmap, {depth: null})

