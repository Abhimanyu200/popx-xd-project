import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [agency, setAgency] = useState('yes')
  const nav = useNavigate()
  return (
    <div>
      <h2 className="text-lg font-semibold" style={{marginBottom:8}}>Create your PopX account</h2>
      <div style={{display:'grid', gap:10}}>
        <div>
          <div className="small-label" style={{marginBottom:6, color:'#6b7280'}}>Full Name</div>
          <input className="input" placeholder="Marry Doe" />
        </div>

        <div>
          <div className="small-label" style={{marginBottom:6, color:'#6b7280'}}>Phone number</div>
          <input className="input" placeholder="Marry Doe" />
        </div>

        <div>
          <div className="small-label" style={{marginBottom:6, color:'#6b7280'}}>Email address</div>
          <input className="input" placeholder="Marry Doe" />
        </div>

        <div>
          <div className="small-label" style={{marginBottom:6, color:'#6b7280'}}>Password</div>
          <input className="input" placeholder="Marry Doe" />
        </div>

        <div>
          <div className="small-label" style={{marginBottom:6, color:'#6b7280'}}>Company name</div>
          <input className="input" placeholder="Marry Doe" />
        </div>

        <div style={{marginTop:6}}>
          <div className="small-label" style={{marginBottom:6}}>Are you an Agency?</div>
          <div className="radio-wrap">
            <button onClick={() => setAgency('yes')} className={`radio ${agency==='yes' ? 'checked':''}`} aria-pressed={agency==='yes'}> </button>
            <div className="small-label">Yes</div>

            <button onClick={() => setAgency('no')} className={`radio ${agency==='no' ? 'checked':''}`} aria-pressed={agency==='no'}> </button>
            <div className="small-label">No</div>
          </div>
        </div>

        <div style={{marginTop:8}}>
          <button onClick={() => nav('/profile')} className="btn-primary">Create Account</button>
        </div>

        <div style={{display:'flex', justifyContent:'center'}}>
          <Link to="/" className="text-sm" style={{color:'#6B21FF', fontWeight:600}}>Back to login</Link>
        </div>
      </div>
    </div>
  )
}
