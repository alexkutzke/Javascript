/**
 * @function QuickSort
 * @description Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
 * @param {Integer[]} items - Array of integers
 * @return {Integer[]} - Sorted array.
 * @see [QuickSort](https://en.wikipedia.org/wiki/Quicksort)
 * 
 * Refatoração realizada por: 
 * Mateus Mischel Lodi
 * Matheus da Rocha Schelbauer
 */


function quickSort (items) {
  if (checkIfArrayIsNotSortable(items)) {
    return items
  } else{
    return sortArray(items)
  } 
}

function sortArray(items) {
  const PIVOT = items[0];
  const GREATER = [];
  const LESSER = [];

  for (let index = 1; index < items.length; index++) {
    if (items[index] > PIVOT) {
      addItemGreaterThanPivot(GREATER, items[index])
    } else {
      addItemLesseThanPivot(LESSER, items[index])
    }
  }

  const sorted = [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)]
  return sorted
}

function checkIfArrayIsNotSortable(items) {
  return items.length < 1 ? true : false;
}

function addItemGreaterThanPivot(greaterArray, element) {
  greaterArray.push(element);
}

function addItemLesseThanPivot(lesserArray, element) {
  lesserArray.push(element);
}

console.log(quickSort([15,10,0]));

export { quickSort }
