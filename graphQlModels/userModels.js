const graphql = require('graphql')
const UserSchema = require('../modelsMongo/userSchema')

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLString },
  }),
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(userType),
      resolve(req, res) {
        return UserSchema.find()
      },
    },
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: userType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLString },
      },
      resolve(req, res) {
        const newUser = new UserSchema({
          name: res.name,
          email: res.email,
          password: res.password,
        })
        return newUser.save()
      },
    },
    updateUser: {
      type: userType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(req, res) {
        return UserSchema.findByIdAndUpdate(
          res.id,
          {
            $set: { name: res.name, email: res.email, password: res.password },
          },
          { new: true }
        )
      },
    },
    deleteUser: {
      type: userType,
      args: { id: { type: GraphQLID } },
      resolve(req, res) {
        return UserSchema.findByIdAndRemove(res.id)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})
