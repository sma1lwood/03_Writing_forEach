const colors = ['teal', 'cyan', 'peach', 'purple'];

function forEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i);
	}
}

forEach(colors, function (color, i) {
	console.log(color.toUpperCase(), 'at index of:', i);
});

colors.forEach(function (color, i) {
	console.log(color.toUpperCase(), 'at index of:', i);
});

