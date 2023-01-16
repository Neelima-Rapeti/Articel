import React from 'react'
 
export default function fetch() {
  return (
    <div>
      <h2>What is data fetching in React?</h2>
 
      <p>
         A modern full-stack app consists of two major modules: frontend and backend. We typically display interactive UI elements through the app’s frontends built with React. 
         On the other side, the backend persists and retrieves data in a remote server computer.
 
        Because of this, we often need to fetch data from the backend to display it in the frontend. 
        We can do this through various data transfer mechanisms, with the most popular mechanisms typically being RESTful interfaces, WebSockets, GraphQL interfaces, XML messages, and gRPC implementations.
 
        Nowadays, the RESTful approach is undoubtedly one of the most popular data transfer mechanisms for React apps. We’ll focus mainly on RESTful-based data fetching in this tutorial.
 
        The React RESTful data fetching flow is simple. 
        In a component, we typically call to ask a networking client to fetch data by mentioning the RESTful endpoint and letting the browser perform an HTTP call. 
        Once the browser receives data from the RESTful server for the particular endpoint, we can transform this data into React components or HTML elements and display them to the user.
      </p>
 
      <h2>Overview of how to fetch data in React</h2>
      <p>
        If you’re just starting out with React, you may have only worked on simple, beginner-level projects that don’t need to access or handle data. 
        As you go along your React journey and learn how to build more complex projects, your apps will almost certainly require this functionality. 
        In fact, data fetching is a core requirement of almost every React app.
 
        There is a variety of ways to fetch data in React, including using the inbuilt Fetch API, Axios, and more. We’ll go over all these methods in detail. 
        You can also fetch data in higher-order components and render props, from a GraphQL backend, and more. Keep reading to learn how.
      </p>
 
      <h2>How React components fetch data</h2>
      <p>
       React components can just fetch their own data. The big question is when to fetch the data. There are several options:
      </p>
      <ul>
        <li>Start with no data and fetch data based on user actions like clicking a button</li>
        <li>Load the data once</li>
        <li>Load the data periodically</li>
      </ul>
      <p>
        Since the component is totally autonomous, no other component can tell it that it’s time to load its data. In this case, 
        I chose to load the data for the first time in componentDidMount() and also set a timer that will fetch the data again every five seconds.
      </p>
 
      <h3>
        There are multiple ways to implement the fetchUsers() function. Here is three different ways in different components. 
        All three implementations accomplish the same task:
      </h3>
      <ul>
        <li>The inbuilt Fetch API</li>
        <li>Axios</li>
        <li>Async/await with Axios</li>
      </ul>
 
      <h2>Example using the Fetch API in React</h2>
      <p>
        The Fetch API is a modern replacement for the legacy XMLHttpRequest API.
         All modern browsers typically support the Fetch API nowadays, so we can use it for data fetching in React without adding another dependency to your package.json.
 
        I’ve used Fetch in the UserTableHOC component.
         I actually called the function fetchUsersWithFetchAPI() but assigned it to a variable called fetchUsers, so the component just calls fetchUsers().
 
        The function starts by setting the isFetching variable to true and then calls fetch.
        Fetch returns a promise, which resolves to a response. The response’s json() method returns a JavaScript object. It then sets the users in state and resets isFetching to false.
 
        If something goes wrong, the catch handler logs the error to the console and, with the fetch finished, resets the isFetching variable.
      </p>
 
    </div>
  )
}