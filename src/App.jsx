import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div className="app-wrap">
      <div className="phone" role="application" aria-label="Mobile mock">
        <div className="topbar"><div className="text-sm font-medium">devtask</div></div>
        <div className="screen">
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <div style={{borderTop:'1px solid #f3f3f3', padding:'10px', background:'#fafafa'}}>
          <div style={{display:'flex', justifyContent:'space-around'}}>
            <NavLink to="/" className={({isActive}) => isActive ? 'text-purple-600 font-medium' : 'text-gray-500 text-sm'}>Home</NavLink>
            <NavLink to="/signup" className={({isActive}) => isActive ? 'text-purple-600 font-medium' : 'text-gray-500 text-sm'}>Signup</NavLink>
            <NavLink to="/profile" className={({isActive}) => isActive ? 'text-purple-600 font-medium' : 'text-gray-500 text-sm'}>Profile</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
