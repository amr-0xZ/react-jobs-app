import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/homePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


function App() {

  //Add job
  const postJob = async (job) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(job)
    })
    return
  }
  
  //Edit job
  const editJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(job)
    })
    return
  }

  //Delete job
  const deleteJob = async (id)=>{
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return
  }

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteFun={deleteJob} />} loader={jobLoader} />
        <Route path='/edit-job/:id' element={<EditJobPage editJobFun={editJob} />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobFun={postJob} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App