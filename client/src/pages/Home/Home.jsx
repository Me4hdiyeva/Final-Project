import React from 'react'

import './Home.css'
// import QRScanner from '../../components/QRScanner.JSX'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
    <h1><span>333,333,333</span>
    <br /> USERS <br />TRUST  US</h1>
    <div className="email-phone-num-add-input">
    <input className='phone-email-add' placeholder='Email/phone number' type="text" />
    <button>Sign up</button>
    </div>

    <div className="footer-section">
      <div className="row">

        <div className="col-6">
<p>Or Continue  With</p>
<div className="icons-google">
<i class="fa-brands fa-google"></i>
<i class="fa-brands fa-apple"></i>
</div>
        </div>

        <div className="col-6">
<p>Download App</p>
<div className="icons-google">

<i class="fa-solid fa-qrcode"></i>
</div>
{/* <QRScanner /> */}

        </div>
      </div>
    </div>

            
</div>
          <div className="col-6">
<div className="coins">
  

s



</div>

          </div>




        </div>







      </div>
    </>
  )
}

export default Home
