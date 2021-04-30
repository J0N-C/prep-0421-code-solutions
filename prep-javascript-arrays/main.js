var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];

console.log('languages Array', languagesArray);
console.log('array length', languagesArray.length);

languagesArray.splice(5, 0, 'C#', 'php');

console.log('Updated Array', languagesArray);

languagesArray.pop();

console.log('last index removed', languagesArray);

languagesArray.unshift('C++');

console.log('added element to front', languagesArray);

languagesArray.shift();

console.log('removed first item', languagesArray);

var thirdElement = languagesArray[2];

console.log('3rd element in languageArray', thirdElement);

console.log('The final length of the array is ', languagesArray.length);

var lastItem = languagesArray[languagesArray.length - 1];

console.log('The last item in the array is ', lastItem);
