import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/homePage';

const route = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage/>} />)
)

function App() {
  return (
    <>
      <RouterProvider router={route} />;

    </>
  )
}

export default App