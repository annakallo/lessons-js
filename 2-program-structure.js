
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

										let theNumber = Number(prompt("Pick a number"));
										if (!Number.isNaN(theNumber)) {
										console.log("Your number is the square root of " +
										theNumber * theNumber);
										} else {
										console.log("Hey. Why didn't you give me a number?");
										}

										- If you have more than two paths to choose from, you can “chain” multiple
										if/else pairs together:

										if (num < 10) {
										console.log("Small");
										} else if (num < 100) {
										console.log("Medium");
										} else {
										console.log("Large");
										}

			While and do loops: 	
									let number = 0;
									while (number <= 12) {
									console.log(number);
									number = number + 2;
									}


									let result = 1;
									let counter = 0;
									while (counter < 10) {
									result = result * 2;
									counter = counter + 1;
									}
									console.log(result);
									// → 1024

								- it is a good idea to get use to counting from 0

								- A do loop is a control structure similar to a while loop. It 
								differs only on one point: a do loop always executes its body at 
								least once, and it starts testing whether it should stop only after
								that first execution. To reflect this, the test appears after the 
								body of the loop.

								let yourName;
								do {
								yourName = prompt("Who are you?");
								} while (!yourName);
								console.log(yourName);

								- Applying the ! operator will convert a value to Boolean type 
								before negating it, and all strings except "" convert to true. 
								This means the loop continues going round until you provide a 
								non-empty name.

			Indenting code

			For loops: 	
							for (let number = 0; number <= 12; number = number + 2) {
							console.log(number);
							}
							- This program is exactly equivalent to the earlier even-number-printing 
							example. The only change is that all the statements that are related 
							to the “state” of the loop are grouped together after for.

							let result = 1;
							for (let counter = 0; counter < 10; counter = counter + 1) {
							result = result * 2;
							}
							console.log(result);
							// → 1024

			Breaking out of a loop: 	- There is a special statement called break that has the 
										effect of immediately jumping out of the enclosing loop.

										for (let current = 20; ; current = current + 1) {
										if (current % 7 == 0) {
										console.log(current);
										break;
										}
										}
										// → 21

										- If you were to remove that break statement or you accidentally 
										write an end condition that always produces true, your program
										would get stuck in an infinite loop. A program stuck in an 
										infinite loop will never finish running, which is usually a bad
										thing.

										- The continue keyword is similar to break, in that it influences
										the progressof a loop. When continue is encountered in a loop 
										body, control jumps out of the body and continues with the loop’s 
										next iteration. But how, example???????

			Updating bindings succinctly: 	counter += 1;
											result *= 2;
											counter -= 1;
											counter += 1; --> counter++;
											counter -= 1; --> counter--;

			Dispatching on a value with switch: 	
													if (x == "value1") action1();
													else if (x == "value2") action2();
													else if (x == "value3") action3();
													else defaultAction();

													switch (prompt("What is the weather like?")) {
													case "rainy":
													console.log("Remember to bring an umbrella.");
													break;
													case "sunny":
													console.log("Dress lightly.");
													case "cloudy":
													console.log("Go outside.");
													break;
													default:
													console.log("Unknown weather type!");
													break;
													}
			Capitalization
			Comments
			Exercises: 	
							1. Looping a triangle:
							Write a loop that makes seven calls to console.log to output the following
							triangle:
							#
							##
							###
							####
							#####
							######
							#######

							It may be useful to know that you can find the length of a string by writing
							.length after it.
							let abc = "abc";
							console.log(abc.length);
							// → 3

							let sign = '';					
							for (let number = 0; sign.length < 7; number++ ) {
								sign = sign + '#';
								console.log(sign);
							}

							2. FizzBuzz
							Write a program that uses console.log to print all the numbers from 1 to 100,
							with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
							number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
							When you have that working, modify your program to print "FizzBuzz" for
							numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
							for numbers divisible by only one of those).
							(This is actually an interview question that has been claimed to weed out
							a significant percentage of programmer candidates. So if you solved it, your
							labor market value just went up.)

							for (let counter = 1; counter < 100; counter++) {
								if ((counter % 3 == 0) && (counter % 5 != 0)) {
									console.log('Fizz')
								} else if ((counter % 5 == 0) && (counter % 3 != 0)) {
									console.log('Buzz')
								} else if ((counter % 3 == 0) && (counter % 5 == 0)) {
									console.log('FizzBuzz')
								} else {
									console.log(counter)
								}
							}

							3. Chessboard 
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




*/