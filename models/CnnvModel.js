const mongoose = require('mongoose')
// const Schema = mongoose.Schema;

const cnnvSchema = new mongoose.Schema({
    title: {},
    showinfo: {},
    uri: {},
    date: { type: Date, default: Date.now },
    flag: { type: Boolean, default: true },
    meta: {
        votes: Number,
        favs: Number
    }
})

// cnnvSchema.set('autoIndex', false)

const CnnvModel = mongoose.model('cnnvs', cnnvSchema)

function saveData(data) {
    const cnnv = new CnnvModel({
        title: data.title,
        showinfo: data.showinfo,
        uri: data.uri,
    })
    return cnnv.save();
}

module.exports = {saveData };