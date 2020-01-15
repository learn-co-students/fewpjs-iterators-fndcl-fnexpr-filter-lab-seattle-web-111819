// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// returns all drivers that match the passed in name
const findMatching = (drivers, name) => {
    // return drivers.filter(drivers => drivers.toLowerCase() == name.toLowerCase())
    return drivers.filter(drivers => drivers.toUpperCase() === name.toUpperCase())
    // return drivers.filter(drivers => drivers[0].toUpperCase() === name[0].toUpperCase())
}

// returns a driver if beginning provided letters match
const fuzzyMatch = (drivers, name) => {
    return drivers.filter(drivers => drivers[0].toUpperCase() == name[0].toUpperCase())
}

// accesses the data structure to check if name matches
const matchName = (drivers, name) => {
    return drivers.filter(drivers => drivers.name === name)
}