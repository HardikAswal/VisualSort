function mergeSort(array)
{
    const animations = [];
    if(array.length <= 1) return array;
    const auxilliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxilliaryArray, animations);
    return animations;
}

export default mergeSort;

function mergeSortHelper(mainArray, start, end, auxilliaryArray, animations)
{
    if(start===end) return;
    const mid = Math.floor((start+end)/2);
    mergeSortHelper(auxilliaryArray, start, mid, mainArray, animations);
    mergeSortHelper(auxilliaryArray, mid+1, end, mainArray, animations);
    merge(mainArray, start, mid, end, auxilliaryArray, animations);
}

function merge(mainArray, start, mid, end, auxilliaryArray, animations)
{
    let k = start, i = start, j = mid+1;
    
    while(i <= mid && j <= end){
        animations.push([i, j]);
        animations.push([i, j]);
        
        if(auxilliaryArray[i] <= auxilliaryArray[j]){
            animations.push([k, auxilliaryArray[i]]);
            mainArray[k++] = auxilliaryArray[i++];
        }
        else{
            animations.push([k, auxilliaryArray[j]]);
            mainArray[k++] = auxilliaryArray[j++];
        }
    }
        while(i <= mid){
            animations.push([i, i]);
            animations.push([i, i]);
            animations.push([k, auxilliaryArray[i]]);
            mainArray[k++] = auxilliaryArray[i++];
        }
        while(j <= end){
            animations.push([j, j]);
            animations.push([j, j]);
            animations.push([k, auxilliaryArray[j]]);
            mainArray[k++] = auxilliaryArray[j++];
    }
}



// export function getMergeSortAnimations(array) {
//     const animations = [];
//     if (array.length <= 1) return array;
//     const auxiliaryArray = array.slice();
//     mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//     return animations;
//   }
  
//   function mergeSortHelper(
//     mainArray,
//     startIdx,
//     endIdx,
//     auxiliaryArray,
//     animations,
//   ) {
//     if (startIdx === endIdx) return;
//     const middleIdx = Math.floor((startIdx + endIdx) / 2);
//     mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//     mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//     doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
//   }
  
//   function doMerge(
//     mainArray,
//     startIdx,
//     middleIdx,
//     endIdx,
//     auxiliaryArray,
//     animations,
//   ) {
//     let k = startIdx;
//     let i = startIdx;
//     let j = middleIdx + 1;
//     while (i <= middleIdx && j <= endIdx) {
//       // These are the values that we're comparing; we push them once
//       // to change their color.
//       animations.push([i, j]);
//       // These are the values that we're comparing; we push them a second
//       // time to revert their color.
//       animations.push([i, j]);
//       if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//         // We overwrite the value at index k in the original array with the
//         // value at index i in the auxiliary array.
//         animations.push([k, auxiliaryArray[i]]);
//         mainArray[k++] = auxiliaryArray[i++];
//       } else {
//         // We overwrite the value at index k in the original array with the
//         // value at index j in the auxiliary array.
//         animations.push([k, auxiliaryArray[j]]);
//         mainArray[k++] = auxiliaryArray[j++];
//       }
//     }
//     while (i <= middleIdx) {
//       // These are the values that we're comparing; we push them once
//       // to change their color.
//       animations.push([i, i]);
//       // These are the values that we're comparing; we push them a second
//       // time to revert their color.
//       animations.push([i, i]);
//       // We overwrite the value at index k in the original array with the
//       // value at index i in the auxiliary array.
//       animations.push([k, auxiliaryArray[i]]);
//       mainArray[k++] = auxiliaryArray[i++];
//     }
//     while (j <= endIdx) {
//       // These are the values that we're comparing; we push them once
//       // to change their color.
//       animations.push([j, j]);
//       // These are the values that we're comparing; we push them a second
//       // time to revert their color.
//       animations.push([j, j]);
//       // We overwrite the value at index k in the original array with the
//       // value at index j in the auxiliary array.
//       animations.push([k, auxiliaryArray[j]]);
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }




















