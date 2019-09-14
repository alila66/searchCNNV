const Dbpromise = require('./db')
const CnnvModel = require('./models/CnnvModel')

module.exports = async function saveCnnv(data) {
    // body...
    // db = await Dbpromise
    const cnnv = new CnnvModel({
        rows: data.rowa,
        level: data.rowspan
    })
    // console.log('going to cnnv.save ...\n' + cnnv)
    // db.then(cnnv.save());
    cnnv.save()

    // var savePromise = CnnvModel.create(cnnv);
    // savePromise.then((e) => console.log(e))

    // console.log('cnnv.save function done!\n' + cnnv)

}
