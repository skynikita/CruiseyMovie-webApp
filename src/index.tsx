import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "antd/dist/antd.css"
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache
} from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path }) => {
      alert(`Graphql Error ${message}`)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({
    uri:
      "https://112qaej5y9.execute-api.ap-southeast-2.amazonaws.com/dev/graphql"
  })
])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
)
