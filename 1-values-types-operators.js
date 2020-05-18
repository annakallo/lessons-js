
let total = 0, count = 1;
while (count <= 10) {
	total += count;
	count += 1;
}
console.log(total);


console.log(sum(range(1, 10)));

// 1. Values, Types, and Operators

/*
	data = bits --> separate them into chunks, called values of different types

	Numbers: 	- JS uses 64 bits to store a single number
				- integer (whole numbers), fractional numbers (9.81), 
				very big or small numbers using exponent (2.998e8 = 299800000)
				- calculation with fractional numbers are not precise (pi)

			Arithmetic: 	- addition or multiplication, subtraction or division
							- '+','*', '-', '/' - operators
							- remainder '%' (maradek) - also called modulo

			Special numbers: 	- Infinity and -Infinity
								- NaN - not a number,you willget this value if 
								trying to calculate 0/0, Infinity - Infinity

	Strings: 	- represents text: 'Down on the sea', "Lie on the ocean", `Float on the ocean`
				- newlines: \n, tab: \t, backticks: \`, everytime \ found in a text the character 
				after it has a special meaning (escaping the character)
				"This is the first line\nAnd this is the second"
				- if two backslashes follow each other, they will collapse together, and only 
				one will be left in the resulting string value. This is how the string 
				“A newline character is written like "\n".” can be expressed:
				"A newline character is written like \"\\n\"."
				- '+' operator can be used on strings, its not adding, its concatenate
				- backtick-quoted strings - template literals - can embed other values:
				`half of 100 is ${100 / 2}`, what is inside this ${ } is computed, converted 
				to a string and included at that position.

	Unary operators: 	- some operators can be words: 'typeof', which produces a string value 
						naming the type of the value you give it

						console.log(typeof '4.5')
						// string
						- unary operators take only one value, not like binary ones('+','/',..)
						- '-' can be unary operator or binary

	Boolean values: 	- “yes” and “no” or “on” and “off” -- has only two options - its good for
						switches

			Comparison: 	console.log(3 > 2)
							// -> true
							- the > and < signs are the traditional symbols for “is greater than” 
							and “is less than”, respectively. They are binary operators.
							- strings can be compared in the same way.






*/