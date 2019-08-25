const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//db string connection must contain the service name of mongo. 'db' is from docker-compose. Not use localhost.
const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://db:27017/mymoney'
module.exports = mongoose.connect(url, { useMongoClient: true })