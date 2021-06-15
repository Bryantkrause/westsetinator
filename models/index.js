const { model, Schema } = require('mongoose')

module.exports = {
    Expense: require('./Expense.js')(model, Schema),
    Hours: require('./Hours.js')(model, Schema),
    Orders: require('./Orders.js')(model, Schema),
    Revenue: require('./Revenue.js')(model, Schema)
}