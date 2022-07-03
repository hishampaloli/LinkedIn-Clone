import React from 'react'
import Header from '../Header/Header'
import img1 from "../Login/img/logo.png";

function JoinNow() {
  return (
    <div>
       <div className="header" style={{width:'100%', display:'flex', justifyContent:'center'}}>
       <div class="logo">
          <img src={img1} alt="" />
        </div>
       </div>
    </div>
  )
}

export default JoinNow