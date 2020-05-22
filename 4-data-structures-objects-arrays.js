
// 4. Data Structures: Objects and Arrays

/*

Data sets: 	- arrays

			let listOfNumbers = [2, 3, 5, 7, 11];
			console.log(listOfNumbers[2]);
			// → 5
			console.log(listOfNumbers[0]);
			// → 2
			console.log(listOfNumbers[2 - 1]);
			// → 3

Properties: 	- We’ve seen a few suspicious-looking expressions like myString.length (to get
				the length of a string) and Math.max (the maximum function) in past chapters.
				These are expressions that access a property of some value. In the first case,
				we access the length property of the value in myString. In the second, we
				access the property named max in the Math object (which is a collection of
				mathematics-related constants and functions).

				- The two main ways to access properties in JavaScript are with a dot and with
				square brackets. Both value.x and value[x] access a property on value—but
				not necessarily the same property. The difference is in how x is interpreted.
				When using a dot, the word after the dot is the literal name of the property.
				When using square brackets, the expression between the brackets is evaluated to
				get the property name. Whereas value.x fetches the property of value named
				“x”, value[x] tries to evaluate the expression x and uses the result, converted
				to a string, as the property name.
				- value.color, value[2], value['John Doe'], array.length

Methods: 	- Both string and array objects contain, in addition to the length property, a
			number of properties that hold function values.

			let doh = "Doh";
			console.log(typeof doh.toUpperCase);
			// → function
			console.log(doh.toUpperCase());
			// → DOH

			- Every string has a toUpperCase property. When called, it will return a copy
			of the string in which all letters have been converted to uppercase. There is
			also toLowerCase, going the other way.
			- Properties that contain functions are generally called methods of the value
			they belong to, as in “toUpperCase is a method of a string”
			- The push method adds values to the end of an array, and the pop method
			does the opposite, removing the last value in the array and returning it.
			- These somewhat silly names are the traditional terms for operations on a
			stack. A stack, in programming, is a data structure that allows you to push
			values into it and pop them out again in the opposite order so that the thing
			that was added last is removed first.

Objects: 	- Values of the type object are arbitrary collections of properties. One way to
			create an object is by using braces as an expression.
			- Inside the braces, there is a list of properties separated by commas. Each
			property has a name followed by a colon and a value. When an object is written
			over multiple lines, indenting it like in the example helps with readability.
			Properties whose names aren’t valid binding names or valid numbers have to
			be quoted.

			let descriptions = {
				work: "Went to work",
				"touched tree": "Touched a tree",
				property: value
			};

			- Reading a property that doesn’t exist will give you the value undefined.
			- The delete operator cuts off a tentacle from such an octopus. It is a unary
			operator that, when applied to an object property, will remove the named
			property from the object. This is not a common thing to do, but it is possible.

			let anObject = {left: 1, right: 2};
			console.log(anObject.left);
			// → 1
			delete anObject.left;
			console.log(anObject.left);
			// → undefined
			console.log("left" in anObject);
			// → false
			console.log("right" in anObject);
			// → true

			- The binary in operator, when applied to a string and an object, tells you
			whether that object has a property with that name. The difference between
			setting a property to undefined and actually deleting it is that, in the first
			case, the object still has the property (it just doesn’t have a very interesting
			value), whereas in the second case the property is no longer present and in will
			return false.
			- To list the properties:

			console.log(Object.keys({x: 0, y: 0, z: 2}));
			// → ["x", "y", "z"]


			- Copies properties form one object into an object

			let objectA = {a: 1, b: 2};
			Object.assign(objectA, {b: 3, c: 4});
			console.log(objectA);
			// → {a: 1, b: 3, c: 4}

			- Arrays, then, are just a kind of object specialized for storing sequences of
			things. If you evaluate typeof [], it produces "object".

Mutability: 	- The object1 and object2 bindings grasp the same object, which is why
				changing object1 also changes the value of object2. They are said to have the
				same identity. The binding object3 points to a different object, which initially
				contains the same properties as object1 but lives a separate life.

				let object1 = {value: 10};
				let object2 = object1;
				let object3 = {value: 10};

				console.log(object1 == object2);
				// → true
				console.log(object1 == object3);
				// → false
				object1.value = 15;
				console.log(object2.value);
				// → 15
				console.log(object3.value);
				// → 10


				const score = {visitors: 0, home: 0};
				// This is okay
				score.visitors = 1;
				// This isn't allowed
				score = {visitors: 1, home: 1};

				- When you compare objects with JavaScript’s == operator, it compares by
				identity: it will produce true only if both objects are precisely the same value.
				Comparing different objects will return false, even if they have identical 
				properties.

The lycanthrope's log: 	
						let journal = [];

						function addEntry(events, squirrel) {
						journal.push({events, squirrel});
						}

						- Instead of declaring properties like events: events, it just gives a 
						property name. This is shorthand that means the same thing—if a property 
						name in brace notation isn’t followed by a value, its value is taken from 
						the binding with the same name.

						-Arrays have an includes method that checks whether a given value exists in
						the array. 


						for (let i = 0; i < JOURNAL.length; i++) {
						let entry = JOURNAL[i];
						// Do something with entry
						}
						
						- You can iterate over arrays using a special kind of for loop—for 
						(let element of array)

						for (let entry of JOURNAL) {
						console.log(`${entry.events.length} events.`);
						}

						- When a for loop looks like this, with the word of after a variable definition,
						it will loop over the elements of the value given after of. This works not only
						for arrays but also for strings and some other data structures.

Further arrayology: 	- push and pop - add and remove elements at the end of an array. The corresponding 
						methods for adding and removing things at the start of an array are called 
						unshift and shift.

						let todoList = [];
						function remember(task) {
							todoList.push(task);
						}
						function getTask() {
							return todoList.shift();
						}
						function rememberUrgently(task) {
							todoList.unshift(task);
						}

						- To search for a specific value, arrays provide an indexOf method. The method
						searches through the array from the start to the end and returns the index at
						which the requested value was found—or -1 if it wasn’t found. To search from
						the end instead of the start, there’s a similar method called lastIndexOf.

						console.log([1, 2, 3, 2, 1].indexOf(2));
						// → 1
						console.log([1, 2, 3, 2, 1].lastIndexOf(2));
						// → 3

						- Another fundamental array method is slice, which takes start and end indices
						and returns an array that has only the elements between them. The start
						index is inclusive, the end index exclusive.

						console.log([0, 1, 2, 3, 4].slice(2, 4));
						// → [2, 3]
						console.log([0, 1, 2, 3, 4].slice(2));
						// → [2, 3, 4]

						- When the end index is not given, slice will take all of the elements after the
						start index. You can also omit the start index to copy the entire array.
						- The concat method can be used to glue arrays together to create a new array,
						similar to what the + operator does for strings.

						function remove(array, index) {
							return array.slice(0, index)
							.concat(array.slice(index + 1));
						}
						console.log(remove(["a", "b", "c", "d", "e"], 2));
						// → ["a", "b", "d", "e"]

						- If you pass concat an argument that is not an array, that value will be added
						to the new array as if it were a one-element array.

String and their properties: 	
								let kim = "Kim";
								kim.age = 88;
								console.log(kim.age);
								// → undefined

								- Values of type string, number, and Boolean are not objects, 
								and though the language doesn’t complain if you try to set new 
								properties on them, it doesn’t actually store those properties.

								- Every string value has a number of methods. Some very useful 
								ones are slice and indexOf, which resemble the array methods of 
								the same name.

								console.log("coconuts".slice(4, 7));
								// → nut
								console.log("coconut".indexOf("u"));
								// → 5

								One difference is that a string’s indexOf can search for a string containing
								more than one character, whereas the corresponding array method looks only
								for a single element.

								console.log("one two three".indexOf("ee"));
								// → 11

								- The trim method removes whitespace (spaces, newlines, tabs, 
								and similar characters) from the start and end of a string.

								console.log(" okay \n ".trim());
								// → okay

								- padStart takes the desired length and padding character as
								arguments

								console.log(String(6).padStart(3, "0"));
								// → 006

								- You can split a string on every occurrence of another string with
								split and join it again with join.

								let sentence = "Secretarybirds specialize in stomping";
								let words = sentence.split(" ");
								console.log(words);
								// → ["Secretarybirds", "specialize", "in", "stomping"]
								console.log(words.join(". "));
								// → Secretarybirds. specialize. in. stomping

								- A string can be repeated with the repeat method, which creates a new 
								string containing multiple copies of the original string, glued together.

								console.log("LA".repeat(3));
								// → LALALA

								let string = "abc";
								console.log(string.length);
								// → 3
								console.log(string[1]);
								// → b

Rest parameters: 	- It can be useful for a function to accept any number of arguments. For example,
					Math.max computes the maximum of all the arguments it is given.
					To write such a function, you put three dots before the function’s last parameter,
					like this:

					function max(...numbers) {
					let result = -Infinity;
					for (let number of numbers) {
					if (number > result) result = number;
					}
					return result;
					}
					console.log(max(4, 1, 9, -2));
					// → 9

					- When such a function is called, the rest parameter is bound to an array
					containing all further arguments. If there are other parameters before it, their
					values aren’t part of that array. When, as in max, it is the only parameter, it
					will hold all arguments.

					- You can use a similar three-dot notation to call a function with an array of
					arguments.
					let numbers = [5, 1, 7];
					console.log(max(...numbers));
					// → 7

					- This “spreads” out the array into the function call, passing its elements as
					separate arguments. It is possible to include an array like that along with other
					arguments, as in max(9, ...numbers, 2).
					Square bracket array notation similarly allows the triple-dot operator to
					spread another array into the new array.

					let words = ["never", "fully"];
					console.log(["will", ...words, "understand"]);
					// → ["will", "never", "fully", "understand"]

The Math object: 	- As we’ve seen, Math is a grab bag of number-related utility functions, such as
					Math.max (maximum), Math.min (minimum), and Math.sqrt (square root).
					The Math object is used as a container to group a bunch of related functionality.
					There is only one Math object, and it is almost never useful as a value.
					Rather, it provides a namespace so that all these functions and values do not
					have to be global bindings.
					- If you need to do trigonometry, Math can help. It
					contains cos (cosine), sin (sine), and tan (tangent), as well as their inverse
					functions, acos, asin, and atan, respectively. The number  (pi)—or at least
					the closest approximation that fits in a JavaScript number—is available as Math
					.PI. There is an old programming tradition of writing the names of constant
					values in all caps.

					function randomPointOnCircle(radius) {
						let angle = Math.random() * 2 * Math.PI;
						return {x: radius * Math.cos(angle),
								y: radius * Math.sin(angle)};
					}
					console.log(randomPointOnCircle(2));
					// → {x: 0.3667, y: 1.966}


					- The previous example used Math.random. This is a function that returns a
					new pseudorandom number between zero (inclusive) and one (exclusive) every
					time you call it.

					console.log(Math.random());
					// → 0.36993729369714856

					- If we want a whole random number instead of a fractional one, we can use
					Math.floor (which rounds down to the nearest whole number) on the result of
					Math.random.

					console.log(Math.floor(Math.random() * 10));
					// → 2

					- Multiplying the random number by 10 gives us a number greater than or
					equal to 0 and below 10. Since Math.floor rounds down, this expression will
					produce, with equal chance, any number from 0 through 9.
					There are also the functions Math.ceil (for “ceiling”, which rounds up to
					a whole number), Math.round (to the nearest whole number), and Math.abs,
					which takes the absolute value of a number, meaning it negates negative values
					but leaves positive ones as they are.

Destructuring: 	
				function phi(table) {
					return (table[3] * table[0] - table[2] * table[1]) /
					Math.sqrt((table[2] + table[3]) *
					(table[0] + table[1]) *
					(table[1] + table[3]) *
					(table[0] + table[2]));
				}

				function phi([n00, n01, n10, n11]) {
					return (n11 * n00 - n10 * n01) /
					Math.sqrt((n10 + n11) * (n00 + n01) *
					(n01 + n11) * (n00 + n10));
				}

				- This also works for bindings created with let, var, or const. If you know the
				value you are binding is an array, you can use square brackets to “look inside”
				of the value, binding its contents.
				A similar trick works for objects, using braces instead of square brackets.

				let {name} = {name: "Faraji", age: 23};
				console.log(name);
				// → Faraji

JSON: 	- JavaScript Object Notation - serializes the data, it is converted into a flat description
		- JSON looks similar to JavaScript’s way of writing arrays and objects, with a
		few restrictions. All property names have to be surrounded by double quotes,
		and only simple data expressions are allowed—no function calls, bindings, or
		anything that involves actual computation. Comments are not allowed in
		JSON.

		{
		"squirrel": false,
		"events": ["work", "touched tree", "pizza", "running"]
		}
		
		- JavaScript gives us the functions JSON.stringify and JSON.parse to convert
		data to and from this format. The first takes a JavaScript value and returns
		a JSON-encoded string. The second takes such a string and converts it to the
		value it encodes.

		let string = JSON.stringify({squirrel: false,
		events: ["weekend"]});
		console.log(string);
		// → {"squirrel":false,"events":["weekend"]}
		console.log(JSON.parse(string).events);
		// → ["weekend"]


*/


let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5


let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]


let day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false


let descriptions = {
	work: "Went to work",
	"touched tree": "Touched a tree"
};


let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true



//lists properties
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]



//copies properties form one object into an object
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}



let journal = [
	{events: ["work", "touched tree", "pizza",
				"running", "television"],
	squirrel: false},
	{events: ["work", "ice cream", "cauliflower",
				"lasagna", "touched tree", "brushed teeth"],
	squirrel: false},
	{events: ["weekend", "cycling", "break", "peanuts",
				"beer"],
	squirrel: true},
/* and so on... */
];



let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10


const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};



// Journal of a weresquirell
//This function checks the correspondence with a formula
function phi(table) {
return (table[3] * table[0] - table[2] * table[1]) /
Math.sqrt((table[2] + table[3]) *
(table[0] + table[1]) *
(table[1] + table[3]) *
(table[0] + table[2]));
}
// console.log(phi([76, 9, 4, 1]));
// // → 0.068599434

// this function does the table for the upstairs formula
function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}
// console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

// for (let entry of JOURNAL) {
// console.log(`${entry.events.length} events.`);
// }


// Does an array with all the activities
function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}

// console.log(journalEvents(JOURNAL));
// // → ["carrot", "exercise", "weekend", "bread", …]

// for (let event of journalEvents(JOURNAL)) {
// console.log(event + ":", phi(tableFor(event, JOURNAL)));
// };

// list only the activities which are occuring more offen
for (let event of journalEvents(JOURNAL)) {
	let correlation = phi(tableFor(event, JOURNAL));
	if (correlation > 0.1 || correlation < -0.1) {
	console.log(event + ":", correlation);
	}
}

// tries out the correspondence between the two most likely results
for (let entry of JOURNAL) {
	if (entry.events.includes("peanuts") &&
		!entry.events.includes("brushed teeth")) {
		entry.events.push("peanut teeth");
	}
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1



// More arrays!!!!
let todoList = [];
function remember(task) {
	todoList.push(task);
}

function getTask() {
	return todoList.shift();
}

function rememberUrgently(task) {
	todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

// Strings
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5



console.log("one two three".indexOf("ee"));
// → 11


console.log(" okay \n ".trim());
// → okay


console.log(String(6).padStart(3, "0"));
// → 006


let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping


console.log("LA".repeat(3));
// → LALALA


let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b

// rest parameters
function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}

console.log(max(4, 1, 9, -2));
// → 9



let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7


// Math object
function randomPointOnCircle(radius) {
	let angle = Math.random() * 2 * Math.PI;
	return {x: radius * Math.cos(angle),
			y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}


// Destructuring

function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
	Math.sqrt((table[2] + table[3]) *
	(table[0] + table[1]) *
	(table[1] + table[3]) *
	(table[0] + table[2]));
}

function phi([n00, n01, n10, n11]) {
	return (n11 * n00 - n10 * n01) /
	Math.sqrt((n10 + n11) * (n00 + n01) *
	(n01 + n11) * (n00 + n10));
}