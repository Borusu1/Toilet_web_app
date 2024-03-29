import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sign_in from './pages/sign_in/sign_in'
import Sign_up from './pages/sign_up/sign_up'
import Main_page from './pages/main_page/main_page'
import Search from './pages/search/search'
import Add_marker from './pages/add_marker/add_marker'
import NotFound from './pages/notfound/notfound'
import Loading from './pages/loading'
import Review from './pages/add_review/add_review'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main_page />,
    errorElement: <NotFound/>,
  },
  {
    path: '/sign_up',
    element: <Sign_up/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/sign_in',
    element: <Sign_in/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/search',
    element: <Search/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/add_marker',
    element: <Add_marker/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/add_review',
    element: <Review/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/loading',
    element: <Loading/>,
    errorElement: <NotFound/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
