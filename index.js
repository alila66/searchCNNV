const {dbOpen, dbClose} = require('./db')
const {saveData} = require('./models/CnnvModel');
const parseHtml = require('./parseHTML');

!(async () => {
    try {
        let data = await parseHtml();
        console.log(data)
        await dbOpen();
        await saveData(data);
        dbClose();
    } catch (err) {
        console.log(err)
    }
})()
