
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './Store/store.js';
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import HomePage from './components/HomePage.jsx';

import './index.css';
const router=createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  
  {
    path:'/home',
    element:<HomePage/>
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


