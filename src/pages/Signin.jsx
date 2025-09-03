import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <div>
      <h2 className="text-lg font-semibold" style={{marginBottom:8}}>Signin to your PopX account</h2>
      <p className="small-label" style={{marginBottom:14}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      <div style={{display:'grid', gap:10}}>
        <div>
          <div className="label" style={{marginBottom:6}}>Email Address</div>
          <input className="input" placeholder="Enter email address" />
        </div>

        <div>
          <div className="label" style={{marginBottom:6}}>Password</div>
          <input className="input" placeholder="Enter password" type="password" />
        </div>

        <div style={{marginTop:6}}>
          <button className="btn-muted">Login</button>
        </div>

        <div style={{display:'flex', justifyContent:'center', marginTop:10}}>
          <Link to="/signup" className="text-sm" style={{color:'#6B21FF', fontWeight:600}}>Create an account</Link>
        </div>
      </div>
    </div>
  )
}
