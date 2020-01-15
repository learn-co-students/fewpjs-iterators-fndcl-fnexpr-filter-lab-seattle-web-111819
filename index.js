// Code your solution here
let even = arr.filter(n => {
  return n % 2 === 0;
});

function findMatching(drivers, string) {
  return drivers.filter(matches =>
    matches.toLowerCase() === string.toLowerCase()
    )
}


function fuzzyMatch(drivers, letters){
  return drivers.filter( driver => driver.slice(0, letters.length) == letters)
}


function matchName(drivers, string){
 return drivers.filter(driver => driver.name === string)
}