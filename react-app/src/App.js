import './App.css'
import FormArea from './formArea/FormArea'
import BlockArea from './blockArea/BlockArea'

import AppoloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new AppoloClient({
  uri: 'http://localhost:3005/graphql',
})
function App() {
  return (
    <ApolloProvider client={client}>
      <FormArea />
      <BlockArea />
    </ApolloProvider>
  )
}

export default App
