require('array-extensions')

function attributes (obj) {
  return Object.getOwnPropertyNames(obj)
}

function analyze (data, ignoredAtt, fTable) {
  let stats = {}
  stats.numRecords = data.length
  keys = attributes(data[0]).where(key => ignoredAtt.indexOf(key) === -1)
  keys.each(key => {
    stats[key] = {}
    stats[key]['missingRecords'] = stats.numRecords - data.count(e => e[key])
    if (typeof data[0][key] === 'boolean') {
      stats[key]['type'] = 'Boolean'
      stats[key]['missingRecords'] =
        stats.numRecords - data.count(e => e[key] === true || e[key] === false)
    } else if (!isNaN(data[0][key])) {
      let r = stats.numRecords - stats[key]['missingRecords']
      stats[key]['type'] = 'Numeric'
      stats[key]['average'] = data.sum(e => e[key] || 0) / r
      stats[key]['max'] = data.max(e => e[key])[key]
      stats[key]['min'] = data.min(e => e[key])[key]
    } else {
      stats[key]['type'] = 'String'
    }
    if (fTable) stats[key]['freqTable'] = countUnique(data.pluck(key))
  })
  return stats
}

function countUnique (arr) {
  var counts = {}
  for (var i = 0; i < arr.length; i++) {
    counts[arr[i]] = 1 + (counts[arr[i]] || 0)
  }
  return counts
}

module.exports = {
  attributes: attributes,
  analyze: analyze
}
