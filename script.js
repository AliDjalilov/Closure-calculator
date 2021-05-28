function createCalculator (baseValue) {
  return {
    add:  (num) => (baseValue += num),
    sub:  (num) => (baseValue -= num),
    div:  (num) => (baseValue *= num),
    mult:  (num) => (baseValue /= num),
    set:  (num) => (baseValue = num),
    };
  }


const calc =  createCalculator(10);

console.log(calc.add(5));
console.log(calc.sub(10));
console.log(calc.div(40));
console.log(calc.mult(10));
console.log(calc.set(100));