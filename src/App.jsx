import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/homePage';
import JobsPage from './pages/JobsPage';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage/>} />
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