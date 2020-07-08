
// NARCISSISTIC NUMBER
function narcissistic( value ) {
  var valStr = '' + value;
  var valLength = valStr.length;
  var result = 0;  
  for (var i in valStr) {
    result += Math.pow((+valStr[i]), valLength);
  }
    return result === value;
}

console.log(narcissistic(153));
console.log(narcissistic(111));


const arrLet = [2, 4, 0, 100, 4, 11, 2602, 36];
const arrLet2 = [160, 3, 1719, 19, 11, 13, -21];
const arrLet3 = [11, 13, 15, 19, 9, 13, -21];

// PARITY OUTLIER
function findEvenNum(arr) {
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }else{
      return false;
    }
  }
}

function findOddNum(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
}

function findOutlier(integers) {
  var evenCount = 0;
  var oddCount = 0;
  for (var i = 0; i < integers.length + 1; i++) { 
    if (evenCount > 1) {
      return findOddNum(integers);
    }
    if (oddCount > 1) {
      
      return findEvenNum(integers);
    }
    if (integers[i] % 2 === 0) {
      evenCount++;
    }
    if (integers[i] % 2 !== 0) {
      oddCount++;
    }
  }
}

console.log(findOutlier(arrLet));
console.log(findOutlier(arrLet2));
console.log(findOutlier(arrLet3));

// NEEDLE IN THE HAYSTACK
function findNeedle(arr,str ) {    
      for (var i = 0; i < arr.length; i++) {
        var needle = arr[i];
				if (needle === str) {
					    return needle;
			    } 
		}
};

console.log(findNeedle(["red", "blue", "yellow", "black", "grey"],"blue" ));