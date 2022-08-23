import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { PrivateRoute } from './PrivateRoute'

export const MainRoute = () => {
  return (
    <div>
        
        <Routes>
            <Route path='/' element={ <PrivateRoute><Home/></PrivateRoute>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}
