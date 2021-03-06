var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var PersonSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: String,
    class_role: String,
    help_status: Object,
    help_history: [],
    seating_status: Object,
    seating_history: [],
    lastViewedPage: String
});

module.exports = mongoose.model('Person', PersonSchema);