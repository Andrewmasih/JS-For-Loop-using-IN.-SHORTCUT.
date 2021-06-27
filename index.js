/* we can RUN through an Array, by using 'for in loop' to easily get the index integer for elements in the Array.
*/

let theSportsIPlay = ["basketball", "football", "tennis", "chess"];

for (let i in theSportsIPlay) {
  // This is easier way, using 'for' and 'in' Inside the parentheses
  console.log(theSportsIPlay[1]);
}

/* as normal, the varible i contains the index integer of the current element in the Array, the code will be:
theSportsIPlay[0] in the first iteration
theSportsIPlay[1] in the second iteration
theSportsIPlay[2] in the third iteration
theSportsIPlay[3] in the forth iteration

on ths shortcut we dont need to use i < theSportsIPlay.length

this method is bettre when we want to retrieve and work with the index number of each element in the array.


 */

