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
      <div className="container mx-auto px-4">
        <div className="flex px-4 py-4">
          <p className="text-3xl text-purple-700 mr-80">Clients list</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            {" "}
            + Add
          </button>
        </div>
        <Clients />
      </div>
      <Form />
    </ApolloProvider>
  );
}

export default App;
