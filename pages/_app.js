import '../public/assets/css/style.css'
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';


function MyApp({ Component, pageProps }) {
  let sideBar;
  let appClass;
  let blackblur;
  if (typeof window !== 'undefined') {
    sideBar     = document.querySelector('.side-bar');
    appClass    = document.querySelector('body');
    blackblur   = document.querySelector('#blackblur');
    AOS.init();
  }

  const slideHandler = (e) => {
      e.preventDefault();
      sideBar.classList.remove('slide');
      appClass.classList.remove('block');
      blackblur.classList.remove('black-blur');
  }


  return (
    <>
      <Script src='https://kit.fontawesome.com/f4074077c5.js' crossOrigin='anonymous' />
        <div className='app'>
          <div className="side-bar" id='sidebar'>


            <div className="scroll">

                <div className="side-bar-menu">

                  <div className="menu-toggle">
                      <input type="checkbox" onClick={slideHandler}/>
                      <span></span>
                      <span></span>
                  </div>
                  
                  <div className="list-menu">
                    <a href="#direction">Home</a>
                    <a href="#direction">Same Day Delivery</a>
                    <a href="#direction">1 Day Preorder</a>
                    <div className="multiple-link">
                      <a href="#direction">All Products</a>
                      <button>{'>'}</button>
                    </div>
                    <div className="multiple-link">
                      <a href="#direction">Delivery & Pickup</a>
                      <button>{'>'}</button>
                    </div>
                    <div className="multiple-link">
                      <a href="#direction">FAQs</a>
                      <button>{'>'}</button>
                    </div>
                    <a href="#direction">About Us</a>
                    <a href="#direction">Contact Us</a>
                    <a href="#direction">Login</a>
                    <a href="#direction">Create Account</a>
                  </div>

                  <div className="social-media">
                    <div className="icons">
                      <i className="fa-brands fa-facebook-square"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className='fa-brands fa-tiktok'></i>
                    </div>
                  </div>
                </div>

              </div>

          </div>

          <div id='content'  style={{ position: 'relative' }}>
            <div id="blackblur"></div>
              <Navbar/>
              <Component {...pageProps} />
              <Footer />
            </div>
      </div>
    </>
  );
}

export default MyApp
