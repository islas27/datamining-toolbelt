let helpers = require('./helpers')

function attributes (file) {
  let stats = helpers.attributes(loadData(file)[0])
  console.log(stats)
}

function analyze (file, ignoredAtt, freqTable) {
  let stats = helpers.analyze(loadData(file), ignoredAtt, freqTable)
  console.log(stats)
}

function loadData (inputFile) {
  let data = require('../' + inputFile)
  if (!data) endProgram('File not found or incorrect format')
  return data
}

function writeData (data, outputFile) {
  console.log(data)
}

module.exports = {
  attributes: attributes,
  analyze: analyze
}
