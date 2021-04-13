import React from "react";
import "./app.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
//import { onError } from "@apollo/client/link/error";
import Clients from "./../clients";
import Form from "./../form";

/*
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});*/

const link = from([
  /*errorLink,*/
  new HttpLink({ uri: "https://test-task.expane.pro/api/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>It's alive..</h1>
        <Form />
        <Clients />
      </div>
    </ApolloProvider>
  );
}

export default App;
