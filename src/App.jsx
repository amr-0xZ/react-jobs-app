import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/homePage';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={route} />;

    </>
  )
}

export default App