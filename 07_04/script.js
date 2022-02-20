/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


dreams = ["mt.Everest", "peace", "she"];
console.log(dreams);
dreams.push("worldTour", "money", "fame", "respect", "oldfriends");
console.log(dreams);
let iteml = dreams.pop();

console.log(iteml);

console.log(dreams);
dreams.unshift(iteml);
console.log(dreams);
dreams.sort();
console.log(dreams);