const express = require('express')
const app = express()

const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const keys = require('../keys')
const schema = require('../graphQLModels/userModels')

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

const startServer = async () => {
  await mongoose
    .connect(keys.MongoDB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => console.log('Connected mongodb...'))
    .catch((err) => console.error('Could not connect ...', err))

  const PORT = 3005
  app.listen(PORT, (err) => {
    err ? console.log(error) : console.log(`Server started on ${PORT} port`)
  })
}

startServer()
