/* Bubble Sort is an algorithm to sort an array. It
*  compares adjacent element and swaps thier position
*  The big O on bubble sort in worst and best case is O(N^2).
*  Not efficient.
*
*  In bubble sort, we keep iterating while something was swapped in
*  the previous inner-loop iteration. By swapped I mean, in the
*  inner loop iteration, we check each number if the number proceeding
*  it is greater than itself, if so we swap them.
*
*  Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
*  Animated Visual: https://www.toptal.com/developers/sorting-algorithms/bubble-sort
*/

/*
*  Doctests
*
*  > bubbleSort([5, 4, 1, 2, 3])
*  [1, 2, 3, 4, 5]
*  > bubbleSort([])
*  []
*  > bubbleSort([1, 2, 3])
*  [1, 2, 3]
*
*  > alternativeBubbleSort([5, 4, 1, 2, 3])
*  [1, 2, 3, 4, 5]
*  > alternativeBubbleSort([])
*  []
*  > alternativeBubbleSort([1, 2, 3])
*  [1, 2, 3]
*/

/*
*  Using 2 for loops
*/


class BubbleSort {

  /*
  * @param [array] elements which will be sorted
  */
  constructor(elements) {
    this.elements = elements;
    this.length = this.elements.length;
  }

  /*
  * Sort a array with integer elements.
  * @return [array] sorted list.
  */
  sort(){
    for(let iteration = this.length - 1; iteration >= 0; iteration--) {
      const limitIndex = this.length - iteration;
      this.sortElement(limitIndex);
    }
    return this.elements;
  }

  /*
  * Check if element on received index is bigger than adjacent element.
  * @param currentIndex [number] index used as based
  * @return [boolen] true if element on received index is bigger than next element, otherwise returns false.
  */
  biggerThanNextValue(currentIndex){
    return this.elements[currentIndex] > this.elements[currentIndex + 1];
  }

  /*
  * Swich two elements based on a index, replace element on received index for adjacent.
  * @param index [number] index used as reference
  */
  switchElements(index){
    const temp = this.elements[index];
    this.elements[index] = this.elements[index + 1];
    this.elements[index + 1] = temp;
  }

  /*
  * Sort a single element, always set current bigger element on correct position.
  * @param limitIndex [number] define until which element should be considered.
  */
  sortElement(limitIndex){
    for(let currentIndex = 0; currentIndex < limitIndex; currentIndex++){
      if(this.biggerThanNextValue(currentIndex)){
        this.switchElements(currentIndex);
      }
    }
  }
}

/*
*  Implementation of 2 for loops method
*/
const array1 = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation using 2 for loops -')
console.log(array1)
// After Sort
console.log('- After Sort | Implementation using 2 for loops -')
console.log(new BubbleSort(array1).sort())
console.log('\n')

/*
*  Using a while loop and a for loop
*/
function alternativeBubbleSort (arr) {
  let swapped = true

  while (swapped) {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  }

  return arr
}

/*
*  Implementation of a while loop and a for loop method
*/
const array2 = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation using a while loop and a for loop -')
console.log(array2)
// After Sort
console.log('- After Sort | Implementation using a while loop and a for loop -')
console.log(alternativeBubbleSort(array2))
console.log('\n')
