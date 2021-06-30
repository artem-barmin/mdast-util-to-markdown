module.exports = safe

var patternCompile = require('./pattern-compile')
var patternInScope = require('./pattern-in-scope')

function safe(context, input, config) {
  return input;
}
