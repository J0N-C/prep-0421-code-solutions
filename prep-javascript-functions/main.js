function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHourstoMinutes(hours) {
  return hours * 60;
}
var twoHours = convertHourstoMinutes(2);
console.log('convertHourstoMinutes Exercise:', twoHours);

function getGreeting(name) {
  return '"Hello ' + name + '!"';
}
console.log('getGreeting Exercise:', getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5(35, 10));
