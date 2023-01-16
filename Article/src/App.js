import './App.css';
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Bootstrap from './components/Bootstrap';
import MaterialUi from './components/MaterialUi';
import ReactRouter from './components/ReactRouter';
import Axios from './components/Axios';
import Main from './components/Main';
import Fetch from './components/Fetch';

const routes = createBrowserRouter([{
  path: '/',
  element: <Main />,
  children: [{
    index: true,
    element: <HomePage />
  }, {
    path: "bootstrap",
    element: <Bootstrap />
  }, {
    path: "mui",
    element: <MaterialUi />
  }, {
    path: "router",
    element: <ReactRouter />
  }, {
    path: "axios",
    element: <Axios />
  }, {
    path: "fetch",
    element: <Fetch />
  }]
}])

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <footer></footer>
    </>
  );
}

export default App;
