import React, { useEffect, useState } from 'react'

import './Home.css'
import NewListing from '../../components/newlisting/NewListing'
import PhotoChoose from '../../components/fotochoose/PhotoChoose'
// import QRScanner from '../../components/QRScanner.JSX'
import Qrcode from '../../img/qrcode.png'
import List from '../../components/list/List'
import axios from 'axios';

const Home = () => {

  const [userr, setUsers] = useState([])

  const getQuantifyUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/auth/register');
      
      // Cavabın strukturunu yoxlayın
      if (response && response.data) {
        const users = response.data;
        console.log(users); // Cavabı yoxlayın
      } else {
        console.log('No users data found');
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
  useEffect(() => {
    getQuantifyUsers();
  }, []);
  



  return (
    <>
      <div className="container">
        <div className="sections">

          <div className="first-sec">
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

                    <NewListing />







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






























 
          { <div className="second-sec">
          <div className="about-binance">
        <div className="row">


          <div className="col-6">
            <PhotoChoose/>


          </div>
          <div className="col-6">
            <h1>Trade on the go. Anywhere, anytime.</h1>
            <div className="qr">

            <img src={Qrcode} alt="code" />
            <p>Scan to Download App <br /><h1 style={{
              color:"white"
            }}>iOS and Android</h1></p>

            </div>
            <div className="icons-about">
              <div className="icons-p">
            <i class="fa-brands fa-apple"></i>
            <p>MacOS</p>

              </div>
              <div className="icons-p">
            <i class="fa-brands fa-windows"></i>
            <p>Windows</p>
            
              </div>
              <div className="icons-p">
            <i class="fa-brands fa-linux"></i>
            <p>Linux</p>
            </div>

                
            </div>
            <h4>More Download Options</h4>
          </div>

          </div>



        </div>

</div> }

          { <div className="three-sec">


<List/>
</div> }


        </div>







      </div>
    </>
  )
}

export default Home
