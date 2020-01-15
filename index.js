// Code your solution here

const findMatching = (drivers, name) => {
   return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => driver[0] === string[0])
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name)
}