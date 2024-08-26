// With the reserved words 'class' and 'constructor'.
class Singlenton1 {

  static instance;
  name = '';

  constructor (name = '') {
    // if the class instance exist, return it
    if(Singlenton1.instance) {
      return Singlenton1.instance
    }
    // else, return the instance with the new constructor call
    Singlenton1.instance = this;
    this.name = name
  }
}
const instance1 = new Singlenton1('Ironman')
const instance2 = new Singlenton1('Aquaman')

console.log(instance1)
console.log(instance2)

// Without the reserved words, 'class' and 'constructor'.


// NOTE: IIFE way

const Singlenton2 = (function() {

  let instance;

  function createInstance(name){
    return {
      name: name
    }
  }

  return {
    getInstance: function(name = ''){
      if(!instance){
        instance =  createInstance(name)
      }
      return instance
    }
  }
})();
//
// Create instances
const instance3 = Singlenton2.getInstance('Jhon')
const instance4 = Singlenton2.getInstance('Aquaman')

console.log(instance3);
console.log(instance4);


// NOTE: 'new' operator compatible

function Singlenton3(name = '') {
  if (!!Singlenton3.instance){
    return Singlenton3.instance
  }
  this.name = name
  Singlenton3.instance = this
}
const instance5 = new Singlenton3('JavaScript is god')
const instance6 = new Singlenton3('Aquaman')

console.log(instance5);
console.log(instance6);
