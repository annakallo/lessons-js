
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

						65old

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