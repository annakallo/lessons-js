// load dependencies
// require("./code/load")("code/journal.js", "code/chapter/04_data.js");

// for (let event of journalEvents(JOURNAL)) {
//   let correlation = phi(tableFor(event, JOURNAL));
//   if (correlation > 0.1 || correlation < -0.1) {
//     console.log(event + ":", correlation);
//   }
// }
// → brushed teeth: -0.3805211953
// → work:          -0.1371988681
// → reading:        0.1106828054



let journal = [];

function addEntry(events, squirrel) {
journal.push({events, squirrel});
}


addEntry(["work", "touched tree", "pizza", "running",
		"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
		"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
		"beer"], true);