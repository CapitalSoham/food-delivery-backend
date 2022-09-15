const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  password: String,
  acceptTerms: Boolean
})

module.exports = mongoose.model('user', userSchema)