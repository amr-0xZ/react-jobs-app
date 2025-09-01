import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/homePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
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