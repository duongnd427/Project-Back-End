const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TableModel = new Schema({
    state: { type: String, required: true },
    tableNumber: { type: Number, required: true, unique: true },
    chairNumber: { type: Number, required: true }
}, {
        timestamps: true
    })

module.exports = mongoose.model('Table', TableModel)