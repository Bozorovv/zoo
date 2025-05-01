import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import AboutPage from './page/AboutPage';
import MapPage from './page/MapPage';
import PandaPage from './page/PandaPage';
import EaglePage from './page/EaglePage';
import GorillaPage from './page/GorillaPage';
import AligatorPage from './page/AligatorPage';
import ZooPage from './page/ZooPage';
import ContactPage from './page/ContactPage';
import DesignPage from './page/DesignPage';
import MyAccountPage from './page/MyAccountPage';


const myRouter = createBrowserRouter([{
  errorElement: <ErrorPage />,
  element: <App />,
  path: "/",
  children: [
    {
      path: "/",
      element: <AboutPage />,
    },
    {
      path: "/map",
      element: <MapPage />,
    },
    {
      path: "/zoo",
      element: <ZooPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/design",
      element: <DesignPage />,
    },
    {
      path: "/myaccount",
      element: <MyAccountPage />,
    },
    {
      path: "/panda",
      element: <PandaPage />,
    },
    {
      path: "/eagle",
      element: <EaglePage />,
    },
    {
      path: "/gorilla",
      element: <GorillaPage />,
    },
    {
      path: "/aligator",
      element: <AligatorPage />,
    }

  ]
}]);






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);

