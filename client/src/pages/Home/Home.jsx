import React from 'react'

import './Home.css'
import NewListing from '../../components/newlisting/NewListing'
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


<div className="coin">

<NewListing/>







</div>
<div className="coin">
  <div className="hs">
 
  <h2>News</h2>
  <h3>View All News</h3>


  </div>
  <p>Grayscale Announces Job Openings For Key Positions</p>
  <p>Ethereum Name Service Sees Surge In January Registrations</p>
  <p>CleanSpark Reports January Bitcoin Mining Output</p>
  <p>Kentucky's Bitcoin Reserve Proposal Sparks Global <br /> Accumulation Speculation</p>
</div>

            </div>

          </div>




        </div>







      </div>
    </>
  )
}

export default Home
