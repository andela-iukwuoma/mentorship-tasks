const linearArray = [2, 4, 6, 8, 12, 14, 16];

function insertion(array) {
  const item = 10;
  const insertPosition = 4;
  let numberOfElements = 7;
  let j = numberOfElements;
  let n = numberOfElements + 1;

  while(j >= insertPosition) {
    linearArray[j] = linearArray[j-1];
    j -= 1;
  }
  linearArray[insertPosition] = item;

  return linearArray;
}

insertion(linearArray);