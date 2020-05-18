
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
							- other similar operators are >= (greater than or equal to), 
							<= (less than or equal to), == (equal to), and != (not equal to)

							console.log("Itchy" != "Scratchy")
							// → true
							console.log("Apple" == "Orange")
							// → false

							- there is only one value in JavaScript that is not equal to itself, 
							and that is NaN (“not a number”).

							console.log(NaN == NaN)
							// → false

			Logical operators: 	- 'and': &&, 'or': ||, 'not': !
								console.log(true && false)
								// → false
								console.log(true && true)
								// → true
								console.log(false || true)
								// → true
								console.log(false || false)
								// → false
								- 'not' is a unary operator that flips the value given to 
								it — !true produces false, and !false gives true.

			Ternary operator: 	- conditional operator

								console.log(true ? 1 : 2);
								// → 1
								console.log(false ? 1 : 2);
								// → 2

								- the value on the left of the question mark “picks” which of 
								the other two values will come out. When it is true, it chooses 
								the middle value, and when it is false, it chooses the value on 
								the right.

	Empty values: 	- 'null','undefined' - denote the absence of a meaningful value, they carry
					no information

			Automatic type conversion: 	- Type coercion
										- When you do not want any type conversions to happen, there 
										are two additional operators: === and !==. The first tests
										whether a value is precisely equal to the other, and the 
										second tests whether it is not precisely equal.

			Short-circuiting of logical operators:
								- The || operator will return the value to its left when that
								 can be converted to true and will return the value on its 
								 right otherwise.

								console.log(null || "user")
								// → user
								console.log("Agnes" || "user")
								// → Agnes
								- We can use this functionality as a way to fall back on a default 
								value. If you have a value that might be empty, you can put || after 
								it with a replacement value. If the initial value can be converted to false, 
								you’ll get the replacement instead. The rules for converting strings and 
								numbers to Boolean values state that 0, NaN, and the empty string ("") count 
								as false, while all the other values count as true. So 0 || -1 produces -1, 
								and "" || "!?" yields "!?".
								- The && operator works similarly but the other way around. When the value
								to its left is something that converts to false, it returns that value, and otherwise
								it returns the value on its right.
								- Another important property of these two operators is that the part to their
								right is evaluated only when necessary. In the case of true || X, no matter
								what X is—even if it’s a piece of program that does something terrible—the
								result will be true, and X is never evaluated.
								- The same goes for false && X, which is false and will ignore X. 
								This is called short-circuit evaluation.








*/