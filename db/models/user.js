const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  address:Object,
  phone: String,
  website: String,
  company: Object
})

module.exports = mongoose.model('user', userSchema)