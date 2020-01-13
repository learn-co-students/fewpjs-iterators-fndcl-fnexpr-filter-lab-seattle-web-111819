// Code your solution here
const findMatching = (drivers, name) => drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())

const fuzzyMatch = (drivers, letters) => drivers.filter(driver => driver.slice(0,letters.length) == letters)

const matchName = (drivers, name) => drivers.filter(driver => driver.name == name)