// Write a function that takes in an n x m 2D array(that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order.

// Spiral order starts at the top left corner of the 2D array, goes to the right and proceeds in a spiral pattern all the way until every element has been visited.

// Sample input: array =
// [
//   [1,   2,  3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9,   8, 7],
// ]

// Sample output:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//Naive approach: The first thing that comes to mind is using a nested loop to traverse through the 2D array, given that we want to be able to access each element in the nested arrays. We can keep track if we're on "an edge" of the nested array and when we get to one, if the index we're in is equal to the length of the array we can traverse down, if the index is equal to 0, we can traverse upward. The result will be the output array once the loop is complete.

//time complexity: Because we're running a single while loop, the runtime is O(n) where n is the total number of elements in the unput array.

//space complexity: Same as above.

//O(n) time | O(n) space complexity
function spiralTraverse(array) {
  // Write your code here.
  const result = [];
  let startRow = 0,
    endRow = array.length - 1;
  let startCol = 0,
    endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      //Handle the edge case when there's a single row
      //in the middle of the matrix. In this case, we dont
      //want to double-count the values in this row, which
      //we're already counted in the first for loop above.
      if (startCol === endRow) break;
      result.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row > startRow; row--) {
      //Same edge case as above except with a single column.
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}
