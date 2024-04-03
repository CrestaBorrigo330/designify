const randomColor = require('./randomColor')
const numberArrayToString = require('./numberArrayToString')

module.exports = (str) => {
    return str.split("").map((char) => parseInt(char));
  }