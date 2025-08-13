function bucketSort(array, bucketSize = 5, compareFn = (a, b) => a - b) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  // Find min and max values
  let minValue = Math.min(...array);
  let maxValue = Math.max(...array);

  // Determine bucket count
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = Array.from({ length: bucketCount }, () => []);

  // Distribute elements into buckets
  for (let value of array) {
    let bucketIndex = Math.floor((value - minValue) / bucketSize);
    buckets[bucketIndex].push(value);
  }

  // Sort each bucket and concatenate results
  let sortedArray = [];
  for (let bucket of buckets) {
    insertionSort(bucket, compareFn);
    sortedArray.push(...bucket);
  }

  return sortedArray;
}

function insertionSort(array, compareFn) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1;

    while (j >= 0 && compareFn(array[j], currentValue) > 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
  }
  return array;
}

module.exports = bucketSort;
