#!/usr/bin/env node
const program = require('commander')
let lib = require('./src/wrappers')

function ignoredAtt (val) {
  return val.split(',')
}

program
.command('attributes <file>')
.description('show attributes in the data')
.action(lib.attributes)

program
.command('analyze <file>')
.description('show statistics about the data')
.option('-i, --igAt [items]', 'Specify attributes to ignore', ignoredAtt, [])
.option('-t, --table', 'Create frequency table for each attribute (resource intensive)')
.action((file, options) => {
  lib.analyze(file, options.igAt, options.table || false)
})

// program
// .command('analyze-dates <file> <column> <splitter>')
// .description('Report invalid dates')
// .action(lib.analyzeDates)
//
// program
// .command('reorder <file> <column>')
// .description('Reorder by column')
// .action(lib.reorder)
//
// program
// .command('unpad-date <file> <column> <splitter> <dayPosition> <monthPosition> <yearPosition>')
// .description('Clean up date format by unpadding the zeros in the month or day part')
// .action(lib.unpadDate)
//
// program
// .command('search-column-value <file> <column> <value>')
// .description('search for entries with a specific value in the specified column')
// .action(lib.searchColumn)
//
// program
// .command('search-duplicates <file> <omitColumn>')
// .description('search duplicates with all values, ommiting a column (like ID)')
// .action(lib.searchDuplicates)
//
// program
// .command('remove-missing <file> <column>')
// .description('remove registers missing a value in a specified column')
// .action(lib.removeMissing)
//
// program
// .command('remove-duplicates <file> <column>')
// .description('remove duplicates registers using a value in a specified column, will conserve the first one to appear in the file')
// .action(lib.removeDuplicates)
//
// program
// .command('remove-by-value <file> <column> <value>')
// .description('remove registers using a value in a specified column')
// .action(lib.removeValues)
//
// program
// .command('switch-const <file> <column> <valueToReplace> <const>')
// .description('fill some column select values with a constant')
// .action(lib.switchConst)
//
// program
// .command('switch-dates <file> <columnToFix> <dateColumn> <place> <splitter>')
// .description('fill some column select values with a constant')
// .action(lib.switchDates)
//
// program
// .command('fill-const <file> <column> <const>')
// .description('fill a column missing values with a constant')
// .action(lib.fillConst)
//
// program
// .command('fill-mean <file> <column> <isNumeric>')
// .description('fill a column missing values with the mean for numeric values or the mode for other types')
// .action(lib.fillMean)
//
// program
// .command('fill-mean-class <file> <column> <classColumn> <isNumeric>')
// .description('fill a column missing values with the mean or mode, taking into account the class')
// .action(lib.fillMeanClass)

program.parse(process.argv)
if (program.args.length === 0) program.help()
