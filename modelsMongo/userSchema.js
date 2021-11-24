const { Schema, model } = require('mongoose')

const userShema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: String,
})

module.exports = model('users', userShema)
