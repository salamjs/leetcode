function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  if (target < array[start] || target > array[end]) {
    return -1;
  }

  while (true) {
    if (target === array[start]) {
      return start;
    }

    if (target === array[end]) {
      return end;
    }

    if (end - start <= 1) {
      return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
}

console.log(binarySearch([1, 3, 6, 9], 3));
