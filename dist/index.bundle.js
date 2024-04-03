"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./src/HashMap-class.js":
/*!******************************!*\
  !*** ./src/HashMap-class.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-class.js */ "./src/node-class.js");


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

    const newNode = new _node_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](key, value);

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

  remove(key){
    const number = this.hash(key);
    let current;
    let prev = null;
    if (!this.brackets[number])return false
    
    current = this.brackets[number]
    while (current.nextNode) {
      if (current.nextNode !== null) prev = current;
      if(Object.keys(current)[0] === key){
        if (current.nextNode === null)
        prev.nextNode = current.nextNode
        return true
      }
      current = current.nextNode;
    }
    return false

  }

  length(){
    let count = 0;
    let current;
    this.brackets.forEach(element => {
      
      count +=1
      current = element
      while(current.nextNode)
        current = current.nextNode
        count += 1
        console.log(current.nextNode)
    });
    return count
  }

  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashMap);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HashMap_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HashMap-class.js */ "./src/HashMap-class.js");
/* harmony import */ var _node_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-class.js */ "./src/node-class.js");




const newHashmap = new _HashMap_class_js__WEBPACK_IMPORTED_MODULE_0__["default"];
console.log(newHashmap.set("Fred", "Smith"))
console.log(newHashmap.set("Fred", "Bisset"))
console.log(newHashmap.set("Mickey", "walley"))

console.dir(newHashmap, {depth: null})

console.log(newHashmap.remove("Fred"))

console.log(newHashmap.length())


/***/ }),

/***/ "./src/node-class.js":
/*!***************************!*\
  !*** ./src/node-class.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Node {
  constructor(key, value, nextNode = null) {
    this[key] = value;
    this.nextNode = nextNode;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixzREFBSTs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7OztBQ3JHa0I7QUFDTjs7O0FBR25DLHVCQUF1Qix5REFBTztBQUM5QjtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFlBQVk7O0FBRXJDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvSGFzaE1hcC1jbGFzcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ub2RlLWNsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gXCIuL25vZGUtY2xhc3MuanNcIjtcblxuY2xhc3MgSGFzaE1hcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnJhY2tldHMgPSBuZXcgQXJyYXkoMTYpO1xuICB9XG5cbiAgaGFzaChrZXkpIHtcbiAgICBsZXQgaGFzaENvZGUgPSAwO1xuXG4gICAgY29uc3QgcHJpbWVOdW1iZXIgPSAzMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaGFzaENvZGUgPSBwcmltZU51bWJlciAqIGhhc2hDb2RlICsga2V5LmNoYXJDb2RlQXQoaSk7XG4gICAgICBoYXNoQ29kZSAlPSAxNjtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaENvZGU7XG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMuaGFzaChrZXkpO1xuXG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGtleSwgdmFsdWUpO1xuXG4gICAgbGV0IGN1cnJlbnQ7XG5cbiAgICBpZiAoIXRoaXMuYnJhY2tldHNbbnVtYmVyXSkge1xuICAgICAgdGhpcy5icmFja2V0c1tudW1iZXJdID0gbmV3Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudCA9IHRoaXMuYnJhY2tldHNbbnVtYmVyXTtcbiAgICAgIHdoaWxlIChjdXJyZW50Lm5leHROb2RlKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHROb2RlO1xuICAgICAgfVxuICAgICAgY3VycmVudC5uZXh0Tm9kZSA9IG5ld05vZGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleSl7XG4gICAgY29uc3QgbnVtYmVyID0gdGhpcy5oYXNoKGtleSk7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgaWYgKCF0aGlzLmJyYWNrZXRzW251bWJlcl0pcmV0dXJuIG51bGxcbiAgICBcbiAgICBjdXJyZW50ID0gdGhpcy5icmFja2V0c1tudW1iZXJdXG4gICAgd2hpbGUgKGN1cnJlbnQubmV4dE5vZGUpIHtcbiAgICAgIGlmKE9iamVjdC5rZXlzKGN1cnJlbnQpWzBdID09PSBrZXkpIHJldHVybiBjdXJyZW50W2tleV1cbiAgICAgIGN1cnJlbnQ9IGN1cnJlbnQubmV4dE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBoYXMoa2V5KXtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLmhhc2goa2V5KTtcbiAgICBsZXQgY3VycmVudDtcbiAgICBpZiAoIXRoaXMuYnJhY2tldHNbbnVtYmVyXSlyZXR1cm4gZmFsc2VcbiAgICBcbiAgICBjdXJyZW50ID0gdGhpcy5icmFja2V0c1tudW1iZXJdXG4gICAgd2hpbGUgKGN1cnJlbnQubmV4dE5vZGUpIHtcbiAgICAgIGlmKE9iamVjdC5rZXlzKGN1cnJlbnQpWzBdID09PSBrZXkpIHJldHVybiB0cnVlXG4gICAgICBjdXJyZW50PSBjdXJyZW50Lm5leHROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJlbW92ZShrZXkpe1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMuaGFzaChrZXkpO1xuICAgIGxldCBjdXJyZW50O1xuICAgIGxldCBwcmV2ID0gbnVsbDtcbiAgICBpZiAoIXRoaXMuYnJhY2tldHNbbnVtYmVyXSlyZXR1cm4gZmFsc2VcbiAgICBcbiAgICBjdXJyZW50ID0gdGhpcy5icmFja2V0c1tudW1iZXJdXG4gICAgd2hpbGUgKGN1cnJlbnQubmV4dE5vZGUpIHtcbiAgICAgIGlmIChjdXJyZW50Lm5leHROb2RlICE9PSBudWxsKSBwcmV2ID0gY3VycmVudDtcbiAgICAgIGlmKE9iamVjdC5rZXlzKGN1cnJlbnQpWzBdID09PSBrZXkpe1xuICAgICAgICBpZiAoY3VycmVudC5uZXh0Tm9kZSA9PT0gbnVsbClcbiAgICAgICAgcHJldi5uZXh0Tm9kZSA9IGN1cnJlbnQubmV4dE5vZGVcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcblxuICB9XG5cbiAgbGVuZ3RoKCl7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgY3VycmVudDtcbiAgICB0aGlzLmJyYWNrZXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBcbiAgICAgIGNvdW50ICs9MVxuICAgICAgY3VycmVudCA9IGVsZW1lbnRcbiAgICAgIHdoaWxlKGN1cnJlbnQubmV4dE5vZGUpXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHROb2RlXG4gICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudC5uZXh0Tm9kZSlcbiAgICB9KTtcbiAgICByZXR1cm4gY291bnRcbiAgfVxuXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXNoTWFwO1xuIiwiaW1wb3J0IEhhc2hNYXAgZnJvbSBcIi4vSGFzaE1hcC1jbGFzcy5qc1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZS1jbGFzcy5qc1wiO1xuXG5cbmNvbnN0IG5ld0hhc2htYXAgPSBuZXcgSGFzaE1hcDtcbmNvbnNvbGUubG9nKG5ld0hhc2htYXAuc2V0KFwiRnJlZFwiLCBcIlNtaXRoXCIpKVxuY29uc29sZS5sb2cobmV3SGFzaG1hcC5zZXQoXCJGcmVkXCIsIFwiQmlzc2V0XCIpKVxuY29uc29sZS5sb2cobmV3SGFzaG1hcC5zZXQoXCJNaWNrZXlcIiwgXCJ3YWxsZXlcIikpXG5cbmNvbnNvbGUuZGlyKG5ld0hhc2htYXAsIHtkZXB0aDogbnVsbH0pXG5cbmNvbnNvbGUubG9nKG5ld0hhc2htYXAucmVtb3ZlKFwiRnJlZFwiKSlcblxuY29uc29sZS5sb2cobmV3SGFzaG1hcC5sZW5ndGgoKSlcbiIsImNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihrZXksIHZhbHVlLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==