import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/homePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader} />
      <Route path='/add-job' element={<AddJobPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={route} />

    </>
  )
}

export default App