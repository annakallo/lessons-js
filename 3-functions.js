
// 3. Functions

/* 

Defining a function: 	- it is a regular binding where the value of the binding is a function 

						const square = function(x) {
						return x * x;
						};
						console.log(square(12));
						// → 144

						- Can have multiple parameters or no parameters at all

						const makeNoise = function() {
							console.log("Pling!");
						};
						makeNoise();
						// → Pling!


						const power = function(base, exponent) {
							let result = 1;
							for (let count = 0; count < exponent; count++) {
								result *= base;
							}
							return result;
						};
						console.log(power(2, 10));
						// → 1024

						- Some functions produce a value, such as power and square, and some don’t,
						such as makeNoise, whose only result is a side effect. 
						- A return statement determines the value the function returns. When control comes
						across such a statement, it immediately jumps out of the current function and
						gives the returned value to the code that called the function.
						- A return keyword without an expression after it will cause the function to 
						return undefined. 
						- Functions that don’t have a return statement at all, such as makeNoise, similarly
						return undefined.

Bindings and scopes: 	- Each binding has a scope, which is the part of the program in which the binding
						is visible. 
						- For bindings defined outside of any function or block, the scope is
						the whole program—you can refer to such bindings wherever you want. These
						are called global.
						- But bindings created for function parameters or declared inside a function
						can be referenced only in that function, so they are known as local bindings
						- Bindings declared with let and const are in fact local to the block that they
						are declared in, so if you create one of those inside of a loop, the code before and
						after the loop cannot “see” it.

						let x = 10;
						if (true) {
							let y = 20;
							var z = 30;
							console.log(x + y + z);
						// → 60
						}
						// y is not visible here
						console.log(x + z);
						// → 40

						- The exception is when multiple bindings have the same
						name—in that case, code can see only the innermost one. 

						const halve = function(n) {
							return n / 2;
						};
						let n = 10;
						console.log(halve(100));
						// → 50
						console.log(n);
						// → 10

Nested scope: 		- JavaScript distinguishes not just global and local bindings. Blocks and functions
					can be created inside other blocks and functions, producing multiple degrees
					of locality.
					- The set of bindings visible inside a block is determined by the place of that
					block in the program text. Each local scope can also see all the local scopes that
					contain it, and all scopes can see the global scope. This approach to binding
					visibility is called lexical scoping.

Functions as values: 	- A function value can do all the things that other
						values can do—you can use it in arbitrary expressions, not just call it. It is
						possible to store a function value in a new binding, pass it as an argument to
						a function, and so on. Similarly, a binding that holds a function is still just a
						regular binding and can, if not constant, be assigned a new value

						let launchMissiles = function() {
							missileSystem.launch("now");
						};
						if (safeMode) {
							launchMissiles = function() { do nothing };
						}

Declaration notation: 	
							function square(x) {
								return x * x;
							}

							- This is a function declaration. The statement defines the binding square 
							and points it at the given function. It is slightly easier to write and 
							doesn’t require a semicolon after the function.

							console.log("The future says:", future());
							function future() {
								return "You'll never have flying cars";
							}

							- The preceding code works, even though the function is defined below the code
							that uses it. Function declarations are not part of the regular top-to-bottom
							flow of control. They are conceptually moved to the top of their scope and can
							be used by all the code in that scope. This is sometimes useful because it offers
							the freedom to order code in a way that seems meaningful, without worrying
							about having to define all functions before they are used.

Arrow functions: 	- Instead of the function keyword, it uses an arrow (=>) made up of an
					equal sign and a greater-than character (not to be confused with the greaterthan-
					or-equal operator, which is written >=).

					const power = (base, exponent) => {
						let result = 1;
						for (let count = 0; count < exponent; count++) {
							result *= base;
						}
						return result;
					};


					const square1 = (x) => { return x * x; };
					const square2 = x => x * x;

					- When there is only one parameter name, you can omit the parentheses
					around the parameter list. If the body is a single expression, rather than a
					block in braces, that expression will be returned from the function

					const horn = () => {
					console.log("Toot");
					};

The call stack: 	
					function greet(who) {
						console.log("Hello " + who);
					}
					greet("Harry");
					console.log("Bye");

					- We could show the flow of control schematically like this:
					not in function
					in greet
					in console.log
					in greet
					not in function
					in console.log
					not in function

					- Because a function has to jump back to the place that called it when it returns,
					the computer must remember the context from which the call happened.
					In one case, console.log has to return to the greet function when it is done.
					In the other case, it returns to the end of the program.
					The place where the computer stores this context is the call stack. Every
					time a function is called, the current context is stored on top of this stack.
					When a function returns, it removes the top context from the stack and uses
					that context to continue execution.

					- Storing this stack requires space in the computer’s memory --> “out of stack space”
					or “too much recursion”.

Optional arguments: 
						function square(x) { return x * x; }
						console.log(square(4, true, "hedgehog"));
						// → 16

						- We defined square with only one parameter. Yet when we call it with three,
						the language doesn’t complain. It ignores the extra arguments and computes
						the square of the first one.


						function minus(a, b) {
							if (b === undefined) return -a;
							else return a - b;
						}
						console.log(minus(10));
						// → -10
						console.log(minus(10, 5));
						// → 5

						-  If you pass too many, the extra ones are ignored. If you pass too few, the missing
						parameters get assigned the value undefined.
						- If you write an = operator after a parameter, followed by an expression, the
						value of that expression will replace the argument when it is not given.

						function power(base, exponent = 2) {
							let result = 1;
							for (let count = 0; count < exponent; count++) {
								result *= base;
							}
							return result;
						}
						console.log(power(4));
						// → 16
						console.log(power(2, 6));
						// → 64

Closure: 	
			function wrapValue(n) {
				let local = n;
				return () => local;
			}
			let wrap1 = wrapValue(1);
			let wrap2 = wrapValue(2);
			console.log(wrap1());
			// → 1
			console.log(wrap2());
			// → 2

			- local bindings are created anew for every call, and different calls can’t trample on
			one another’s local bindings. This feature—being able to reference a specific instance 
			of a local binding is an enclosing scope—is called closure. A function that references bindings
			from local scopes around it is called a closure.

			function multiplier(factor) {
				return number => number * factor;
			}

			let twice = multiplier(2);
			console.log(twice(5));
			// → 10

			- In the example, multiplier is called and creates an environment in which its
			factor parameter is bound to 2. The function value it returns, which is stored
			in twice, remembers this environment. So when that is called, it multiplies its
			argument by 2.

Recursion: 	- A function that calls itself is called recursive.

			function power(base, exponent) {
				if (exponent == 0) {
					return 1;
				} else {
					return base * power(base, exponent - 1);
				}
			}

			console.log(power(2, 3));
			// → 8

			- But this implementation has one problem: in typical JavaScript implementations,
			it’s about three times slower than the looping version. Running through
			a simple loop is generally cheaper than calling a function multiple times.

Growing functions  

					function zeroPad(number, width) {
						let string = String(number);
						while (string.length < width) {
							string = "0" + string;
						}
						return string;
					}

					function printFarmInventory(cows, chickens, pigs) {
						console.log(`${zeroPad(cows, 3)} Cows`);
						console.log(`${zeroPad(chickens, 3)} Chickens`);
						console.log(`${zeroPad(pigs, 3)} Pigs`);
					}

					printFarmInventory(7, 16, 3);


Functions and side effects 		- Functions can be roughly divided into those that are called 
								for their side effect and those that are called for their return 
								value.
								-Pure function is a specific kind of value-producing function that 
								not only has no side effects but also doesn’t rely on side effects 
								from other code—for example, it doesn’t read global bindings whose 
								value might change. A pure function has the pleasant property that,
								when called with the same arguments, it always produces the same value 
								(and doesn’t do anything else). A call to such a function can be 
								substituted by its return value without changing the meaning of the code. 
								When you are not sure that a pure function is working correctly, you can 
								test it by simply calling it and know that if it works in that
								context, it will work in any context. Nonpure functions tend to require 
								more scaffolding to test.
Summary: 	

				Define f to hold a function value
				const f = function(a) {
				console.log(a + 2);
				};

				Declare g to be a function
				function g(a, b) {
				return a * b * 3.5;
				}

				A less verbose function value
				let h = a => a % 3;

Exercises: 	
				1. Minimum:

				The previous chapter introduced the standard function Math.min that returns
				its smallest argument. We can build something like that now. Write a function
				min that takes two arguments and returns their minimum.


				let smallerArgument = (a, b) => {
					if (a < b) {
						return a;
					} else {
						return b;
					}
				};

				console.log(smallerArgument(7,4));




				2. Recursion

				We’ve seen that % (the remainder operator) can be used to test whether a
				number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
				another way to define whether a positive whole number is even or odd:
				- Zero is even.
				- One is odd.
				- For any other number N, its evenness is the same as N - 2.
				Define a recursive function isEven corresponding to this description. The
				function should accept a single parameter (a positive, whole number) and return
				a Boolean.
				Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
				way to fix this?

				function isEven(number) {
					if (Math.abs(number) == 0) {
						return true;
					} else if (Math.abs(number) == 1) {
						return false;
					} else {
						return isEven(Math.abs(number)-2);
					}
				}

				console.log(isEven(-5));

				3. Bean counting

				You can get the Nth character, or letter, from a string by writing "string"[N].
				The returned value will be a string containing only one character (for example,
				"b"). The first character has position 0, which causes the last one to be found at
				position string.length - 1. In other words, a two-character string has length
				2, and its characters have positions 0 and 1.
				Write a function countBs that takes a string as its only argument and returns
				a number that indicates how many uppercase “B” characters there are in the
				string.
				Next, write a function called countChar that behaves like countBs, except
				it takes a second argument that indicates the character that is to be counted
				(rather than counting only uppercase “B” characters). Rewrite countBs to
				make use of this new function.


				let countBs = (word) => {
					let bs = 0;
					for (let i = 0; i < word.length; i++) {
						if (word[i] === 'B') {
							bs += 1;
						}
					}
					return bs;
				};

				console.log(countBs('BUBBBBLESB'));



				let countChar = (word, letter) => {
					let counter = 0;
					for (let i = 0; i < word.length; i++) {
						if (word[i] == letter) {
							counter += 1;
						}
					}
					return counter;
				};

				console.log(countChar('abelaa', 'a'));
					



*/

// Defining a function
const square = function(x) {
	return x * x;
};

console.log(square(12));
// → 144


const makeNoise = function() {
	console.log("Pling!");
};

makeNoise();
// → Pling!


const power = function(base, exponent) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};


console.log(power(2, 10));
// → 1024


// Bindings and scopes
let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z);
// → 60
}
// y is not visible here
console.log(x + z);
// → 40


const halve = function(n) {
	return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10


// Nested scope
const hummus = function(factor) {
	const ingredient = function(amount, unit, name) {
		let ingredientAmount = amount * factor;
		if (ingredientAmount > 1) {
			unit += "s";
		}
		console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(0.25, "cup", "lemon juice");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
};


// Function declaration
function square(x) {
	return x * x;
}


console.log("The future says:", future());

function future() {
	return "You'll never have flying cars";
}


// Arrow functions
const power = (base, exponent) => {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};


const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => {
	console.log("Toot");
};



// Optional arguments
function minus(a, b) {
	if (b === undefined) return -a;
	else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5



function power(base, exponent = 2) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
}
console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64



// Closure
function multiplier(factor) {
	return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10


// Recursion

function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}

console.log(power(2, 3));
// → 8

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 5, `(${history} + 5)`) ||
			find(current * 3, `(${history} * 3)`);
		}
	}
	return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)


// Define f to hold a function value
const f = function(a) {
console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;