import React from 'react'

export default function Profile() {
  return (
    <div>
      <div style={{borderBottom:'1px solid #eee', paddingBottom:8, marginBottom:8}}>
        <div className="small-label" style={{fontWeight:600}}>Account Settings</div>
      </div>

      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <div className="profile-avatar" style={{background:'#eee', display:'grid', placeItems:'center'}}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="3.6" fill="#ffffff"></circle>
          </svg>
        </div>
        <div>
          <div style={{fontWeight:700}}>Marry Doe</div>
          <div className="small-label">marry@gmail.com</div>
        </div>
      </div>

      <div className="profile-card" style={{marginTop:12, paddingTop:10}}>
        <p className="small-label" style={{color:'#6b7280', lineHeight:1.5}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
      </div>
    </div>
  )
}
