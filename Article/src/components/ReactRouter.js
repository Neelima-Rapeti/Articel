import React from "react";

export default function ReactRouter() {
  
  return (
    <div>
      <h3>How to Set Up Router and Route to Other Components</h3>
      <p>
        we'll talk about what React Router is and how to use it. Then we'll
        discuss its features and how to use them in your React app to navigate
        to and render multiple components.
      </p>
      <h5>Prerequisites</h5>
      <ul>
        <li>A React app</li>
        <li>A good understanding of what components are in React.</li>

        <li>Node.js installed.</li>
      </ul>
      <h4>React as a Single Page Application (SPA)</h4>
      <p>
        You need to understand how pages are rendered in a React app before
        diving into routing. This section is aimed at beginners – you can to
        skip it if you already understand what a SPA is and how it relates to
        React. In non-single page applications, when you click on a link in the
        browser, a request is sent to the server before the HTML page gets
        rendered. In React, the page contents are created from our components.
        So what React Router does is intercept the request being sent to the
        server and then injects the contents dynamically from the components we
        have created. This is the general idea behind SPAs which allows content
        to be rendered faster without the page being refreshed. When you create
        a new project, you'll always see an index.html file in the public
        folder. All the code you write in your App component which acts as the
        root component gets rendered to this HTML file. This means that there is
        only one HTML file where your code will be rendered to. What happens
        when you have a different component you would prefer to render as a
        different page? Do you create a new HTML file? The answer is no. React
        Router – like the name implies – helps you route to/navigate to and
        render your new component in the index.html file. So as a single page
        application, when you navigate to a new component using React Router,
        the index.html will be rewritten with the component's logic.
      </p>
      <h4>How to Install React Router</h4>
      <p>
        To install React Router, all you have to do is run npm install
        react-router-dom@6 in your project terminal and then wait for the
        installation to complete. If you are using yarn then use this command:
        yarn add react-router-dom@6.
      </p>
      <h4>How to Set Up React Router</h4>
      <p>
        he first thing to do after installation is complete is to make React
        Router available anywhere in your app. To do this, open the index.js
        file in the src folder and import BrowserRouter from react-router-dom
        and then wrap the root component (the App component) in it.
      </p>
      <p>
        All we did was replace React.StrictMode with BrowserRouter which was
        imported from react-router-dom. Now the router features are accessible
        from any part of your app.
      </p>
      <h4>How to Route to Other Components</h4>
      <h5>Step 1 - Create multiple components</h5>
      <p>We'll create the following Home, About, and Contact components</p>
      <h5>Step 2 - Define routes</h5>
      <p>
        Since the App component acts as the root component where our React code
        gets rendered from initially, we will be creating all our routes in it.
      </p>
      <p>Route is used to create a single route. It takes in two attributes:</p>
      <ul>
        <li>
          path, which specifies the URL path of the desired component. You can
          call this pathname whatever you want. Above, you'll notice that the
          first pathname is a backslash (/). Any component whose pathname is a
          backslash will get rendered first whenever the app loads for the first
          time. This implies that the Home component will be the first component
          to get rendered.
        </li>
        <li>element, which specifies the component the route should render.</li>
      </ul>
   
    </div>
  );
}
