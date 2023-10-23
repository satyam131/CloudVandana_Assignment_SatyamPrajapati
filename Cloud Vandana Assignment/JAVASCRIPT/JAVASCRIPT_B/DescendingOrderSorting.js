function bubbleSortDescending(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = bubbleSortDescending(unsortedArray);
console.log("Sorted array in descending order:", sortedArray);


// For the input value : [5, 2, 9, 1, 5, 6]
// The output should be : [ 9, 6, 5, 5, 2, 1 ].
