// function quick(array, left, right) {
//     let index;
//     if (array.length > 1) {
//         index = partition(array, left, right);
//         if (left < index - 1) {
//             quick(array, left, index - 1);
//         }
//         if (index < right) {
//             quick(array, index, right);
//         }
//     }
//     return array;
// }


// function partition(array, left, right) {

//     const pivot = array[Math.floor((right + left) / 2)];
//     let i = left;
//     let j = right;

//     while (i <= j) {
//         while (compare(array[i], pivot) === -1) {
//             i++;
//         }
//         while (compare(array[j], pivot) === 1) {
//             j--;
//         }
//         if (i <= j) {
//             swap(array, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function swap(array, a, b) {
//     [array[a], array[b]] = [array[b], array[a]];
// }

// // 比较函数
// function compare(a, b) {
//     if (a === b) {
//         return 0;
//     }
//     return a < b ? -1 : 1;
// }


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const midIndex = Math.floor(arr.length / 2);
    const valArr = arr.splice(midIndex, 1);
    const midIndexVal = valArr[0];
    let right = [];
    let left = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > midIndexVal) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(midIndexVal, quickSort(right))
}
console.log(quickSort([1, 2, 3, 4, 7, 6yq, 5]))