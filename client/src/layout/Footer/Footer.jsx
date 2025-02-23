import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="row flex !justify-between">
            <div className="col-3">
              <h1>Community</h1>
              <div className="icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-facebook-messenger"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="flex flex-wrap !items-start !gap-10">
              <div className="col-3">
                <h1>About Us</h1>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/announcements">Announcements</Link>
                  </li>
                  <li>
                    <Link to="/news">News</Link>
                  </li>
                  <li>
                    <Link to="/press">Press</Link>
                  </li>
                  <li>
                    <Link to="/legal">Legal</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy</Link>
                  </li>
                  <li>
                    <Link to="/building-trust">Building Trust</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/community">Community</Link>
                  </li>
                  <li>
                    <Link to="/risk-warning">Risk Warning</Link>
                  </li>
                  <li>
                    <Link to="/notices">Notices</Link>
                  </li>
                  <li>
                    <Link to="/downloads">Downloads</Link>
                  </li>
                  <li>
                    <Link to="/desktop-application">Desktop Application</Link>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <h1>Products</h1>
                <ul>
                  <li>
                    <Link to="/about">Exchange</Link>
                  </li>
                  <li>
                    <Link to="/careers">Buy Crypto</Link>
                  </li>
                  <li>
                    <Link to="/announcements">Pay</Link>
                  </li>
                  <li>
                    <Link to="/news">Academy</Link>
                  </li>
                  <li>
                    <Link to="/press">Live</Link>
                  </li>
                  <li>
                    <Link to="/legal">Tax</Link>
                  </li>
                  <li>
                    <Link to="/terms">Gift Card</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Launchpool</Link>
                  </li>
                  <li>
                    <Link to="/building-trust">Auto-Invest</Link>
                  </li>
                  <li>
                    <Link to="/blog">ETH Staking</Link>
                  </li>
                  <li>
                    <Link to="/community">NFT</Link>
                  </li>
                  <li>
                    <Link to="/risk-warning">BABT</Link>
                  </li>
                  <li>
                    <Link to="/notices">Research </Link>
                  </li>
                  <li>
                    <Link to="/downloads">Charity</Link>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <h1>Learn</h1>
                <ul>
                  <li>
                    <Link to="/about">Learn & Earn</Link>
                  </li>
                  <li>
                    <Link to="/careers">Browse Crypto Prices</Link>
                  </li>
                  <li>
                    <Link to="/announcements">Bitcoin Price</Link>
                  </li>
                  <li>
                    <Link to="/news">Ethereum Price</Link>
                  </li>
                  <li>
                    <Link to="/press">Browse Crypto Price Predictions</Link>
                  </li>
                  <li>
                    <Link to="/legal">Bitcoin Price Prediction</Link>
                  </li>
                  <li>
                    <Link to="/terms">Ethereum Price Prediction</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Ethereum Upgrade (Pectra)</Link>
                  </li>
                  <li>
                    <Link to="/building-trust">Buy Bitcoin</Link>
                  </li>
                  <li>
                    <Link to="/blog">Buy BNB</Link>
                  </li>
                  <li>
                    <Link to="/community">Buy XRP</Link>
                  </li>
                  <li>
                    <Link to="/risk-warning">Buy Dogecoin</Link>
                  </li>
                  <li>
                    <Link to="/notices">Buy Ethereum</Link>
                  </li>
                  <li>
                    <Link to="/downloads">Buy Tradable Altcoins</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>

      <hr />

      <p className="binancess">Binance© 2025Cookie Preferences </p>
    </>
  );
};

export default Footer;
