export function sum(a = 0, b = 0) {
  return a + b;
}
export function subtract(a = 0, b = 0) {
  return a - b;
}
export function multiply(a = 0, b = 0) {
  return Number.parseFloat((a * b).toFixed(2));
}
export function divide(a = 0, b = 0) {
  if (b !== 0) {
    return Number.parseFloat((a / b).toFixed(2));
  } else {
    throw new Error("You cannot divide by 0");
  }
}
