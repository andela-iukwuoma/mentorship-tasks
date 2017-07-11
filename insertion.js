const linearArray = [2, 4, 6, 8, 12, 14, 16];
const item = 10;
const insertPosition = 5;

function insertion(array, item, insertPosition) {
  let numberOfElements = array.length;
  let j = numberOfElements;
  let n = numberOfElements + 1;

  while(j >= insertPosition) {
    linearArray[j] = linearArray[j - 1];
    j -= 1;
  }
  linearArray[insertPosition - 1] = item;

  return linearArray;
}

insertion(linearArray, item, insertPosition);