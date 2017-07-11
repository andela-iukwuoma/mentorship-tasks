const linearArray = [2, 4, 6, 8, 12, 14, 16];

function deletion(array) {
  const deletePosition = 4;
  let numberOfElements = 7;
  let j = deletePosition;

  while(j < numberOfElements) {
    linearArray[j-1] = linearArray[j];
    j += 1;
  }
  
  let n = numberOfElements - 1;
  array.length = n;
  return linearArray;
}

deletion(linearArray);