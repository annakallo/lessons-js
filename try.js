
/*								3. Chessboard 
							Write a program that creates a string that represents an 8×8 grid, using newline
							characters to separate lines. At each position of the grid there is either a space
							or a "#" character. The characters should form a chessboard.
							Passing this string to console.log should show something like this:
							# # # #
							 # # # #
							# # # #
							 # # # #
							# # # #
							 # # # #
							# # # #
							 # # # #
							When you have a program that generates this pattern, define a binding size
							= 8 and change the program so that it works for any size, outputting a grid
							of the given width and height.
 */



//this is better
let odd = '';
let even = '';
let gridnumber = 8;
for (let counter = 0; counter < gridnumber/2; counter++) {
	odd = odd + ' #'; 
	even = even + '# ';
}
for (let counter = 0; counter < gridnumber; counter++) {
	if (counter % 2 == 0) {
		console.log(even);
	} else {
		console.log(odd);
	}
}



let gridnumber = 8;
for (let counter = 0; counter < gridnumber; counter++) {
	let odd = '';
	let even = '';
	if (counter % 2 == 0) {
		for (let counter = 0; counter < gridnumber/2; counter++) {
			even = even + '# ';
		}
		console.log(even);
	} else {
		for (let counter = 0; counter < gridnumber/2; counter++) {
			odd = odd + ' #';
		}
		console.log(odd);
	}
}




//this is best cause we console.log only once

let odd = '';
let even = '';
let gridnumber = 8;
let chessboard = '';
for (let counter = 0; counter < gridnumber/2; counter++) {
	odd = odd + ' #'; 
	even = even + '# ';
}
for (let counter = 0; counter < gridnumber; counter++) {
	if (counter % 2 == 0) {
		chessboard =  chessboard + even + '\n';
	} else {
		chessboard =  chessboard + odd + '\n';
	}
}
console.log(chessboard);