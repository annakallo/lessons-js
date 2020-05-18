
// 2. Program Structure
/*

	Expressions and statements: 	- A fragment of code that produces a value is called an expression. 
									Every value that is written literally (such as 22 or "psychoanalysis")
									is an expression. An expression between parentheses is also an expression,
									as is a binary operator applied to two expressions or a unary operator 
									applied to one.
									- If an expression corresponds to a sentence fragment, a JavaScript 
									statement corresponds to a full sentence. A program is a list of 
									statements. The simplest kind of statement is an expression 
									with a semicolon after it.
									- expression --> statement --> program
									- A statement stands on its own, so it amounts to something only if it 
									affects the world. It could display something on the screen—that counts 
									as changing the world—or it could change the internal state of the 
									machine in a way that will affect the statements that come after it. 
									These changes are called side effects.

	Bindings: 	- also called variables
				- 'let', 'const', 'var'

				let caught = 5 * 5;

				let mood = "light";
				console.log(mood);
				// → light
				mood = "dark";
				console.log(mood);
				// → dark

				- If you ask for the value of an empty binding, you’ll get the value undefined.
				- A single let statement may define multiple bindings. The definitions mustbe separated by commas.

				let one = 1, two = 2;
				console.log(one + two);
				// → 3

				- The word const stands for constant. It defines a constant binding, which points at the 
				same value for as long as it lives. This is useful for bindings that give a name to a 
				value so that you can easily refer to it later.

	Binding names: 	- The name must not start with a digit. A binding name may include dollar signs ($) 
					or underscores (_) but no other punctuation or special characters.
					- break case catch class const continue debugger default
					delete do else enum export extends false finally for
					function if implements import interface in instanceof let
					new package private protected public return static super
					switch this throw true try typeof var void while with yield

	The environment: 	- The collection of bindings and their values that exist at a given time is called
						the environment.
						- Default environment

	Functions: 	- A function is a piece of program wrapped in a value. Such values can be applied
				in order to run the wrapped program.
				- Executing a function is called invoking, calling, or applying it.
				- Values given to functions are called arguments. Different functions might need a 
				different number or different types of arguments.

	The console.log function: 	- Though binding names cannot contain period characters, console.log does
								have one. This is because console.log isn’t a simple binding. It is actually an							
								expression that retrieves the log property from the value held by the console
								binding.

	Return values: 	- Showing a dialog box or writing text to the screen is a side effect. A lot of
					functions are useful because of the side effects they produce. Functions may
					also produce values, in which case they don’t need to have a side effect to
					be useful. For example, the function Math.max takes any amount of number
					arguments and gives back the greatest.

					console.log(Math.max(2, 4));
					// → 4

					- When a function produces a value, it is said to return that value. Anything
					that produces a value is an expression in JavaScript, which means function
					calls can be used within larger expressions. Here a call to Math.min is used as part 
					of a plus expression:

					console.log(Math.min(2, 4) + 100);
					// → 102

	Control flow: 	- The statements in a progrma are executed as if they are a story, from top to bottom.

					let theNumber = Number(prompt("Pick a number"));
					console.log("Your number is the square root of " +
					theNumber * theNumber);

					- The function Number converts a value to a number. We need that conversion
					because the result of prompt is a string value, and we want a number. There
					are similar functions called String and Boolean that convert values to those
					types.

			Conditional execution: 	
										let theNumber = Number(prompt("Pick a number"));
										if (!Number.isNaN(theNumber)) {
										console.log("Your number is the square root of " +
										theNumber * theNumber);
										}

										- The Number.isNaN function is a standard JavaScript function that returns
										true only if the argument it is given is NaN. The Number function happens to
										return NaN when you give it a string that doesn’t represent a valid number.
										Thus, the condition translates to “unless theNumber is not-a-number, do this”.



*/