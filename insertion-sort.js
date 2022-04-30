const insertionSort = (arr = []) => {
	for (i = 0; i < arr.length; i++) {
		let j = i
		while (j > 0 && arr[j] < arr[j - 1]) {
			;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
			j -= 1
		}
	}
	return arr
}

console.log(insertionSort([8, 4, 5, 6, 3, 7, 16, 11, 2, 1, 10]))
