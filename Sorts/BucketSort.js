/*
Wikipedia says: Bucket sort, or bin sort, is a sorting algorithm that works by distributing the
elements of an array into a number of buckets. Each bucket is then sorted individually, either using
a different sorting algorithm, or by recursively applying the bucket sorting algorithm. It is a
distribution sort, and is a cousin of radix sort in the most to least significant digit flavour.
Bucket sort is a generalization of pigeonhole sort. Bucket sort can be implemented with comparisons
and therefore can also be considered a comparison sort algorithm. The computational complexity estimates
involve the number of buckets.

Time Complexity of Solution:
Best Case O(n); Average Case O(n); Worst Case O(n)

*/

class BucketSort {
  valueMaximum;
  valueMinimum;
  arrayDisordered;

  constructor(arrayDisordered) {
    this.arrayDisordered = arrayDisordered;
  }

  sorting(size) {
    const sizeBucket = this.checkSizeBucket(size);

    if (this.arrayDisordered.length === 0) {
      return this.arrayDisordered;
    }

    this.valueMinimum = this.arrayDisordered[0];
    this.valueMaximum = this.arrayDisordered[0];

    this.findValueMinumumAndValueMaximum();

    const bucketsNeeded = this.checkBucketsNeeded(sizeBucket);
    const buckets = this.createBuckets(bucketsNeeded);
    const bucketFilled = this.bucketFill(buckets, sizeBucket);
    const arrayOrdered = this.orderBucketSort(bucketFilled);
    return arrayOrdered;
  }

  bucketFill(buckets, sizeBucket) {
    for (let index = 0; index < this.arrayDisordered.length; index++) {
      const key = Math.floor(
        (this.arrayDisordered[index] - this.valueMinimum) / sizeBucket
      );
      buckets[key].push(this.arrayDisordered[index]);
    }
    return buckets;
  }

  createBuckets(bucketsNeeded) {
    const buckets = [];
    for (let count = 0; count < bucketsNeeded; count++) {
      buckets.push([]);
    }
    return buckets;
  }

  checkBucketsNeeded(sizeBucket) {
    return Math.floor((this.valueMaximum - this.valueMinimum) / sizeBucket) + 1;
  }

  findValueMinumumAndValueMaximum() {
    for (let index = 0; index < this.arrayDisordered.length; index++) {
      if (this.arrayDisordered[index] < this.valueMinimum) {
        this.valueMinimum = this.arrayDisordered[index];
      } else if (this.arrayDisordered[index] > this.valueMaximum) {
        this.valueMaximum = this.arrayDisordered[index];
      }
    }
  }

  checkSizeBucket(sizeBucket) {
    if (undefined === sizeBucket) {
      return 5;
    }
    return sizeBucket;
  }

  orderBucketSort(buckets) {
    const bucketsSorted = [];
    for (let iBucket = 0; iBucket < buckets.length; iBucket++) {
      const arr = buckets[iBucket].sort();
      for (let iSorted = 0; iSorted < arr.length; iSorted++) {
        bucketsSorted.push(arr[iSorted]);
      }
    }
    return bucketsSorted;
  }
}

const arrayBeforeOrdination = [5, 6, 7, 8, 1, 2, 12, 14];
console.log(arrayBeforeOrdination);

const bucketSort = new BucketSort(arrayBeforeOrdination);
const arrayAfterOrdination = bucketSort.sorting();
console.log(arrayAfterOrdination);
