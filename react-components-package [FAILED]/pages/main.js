function Navbar() {

    let sideBar;
    let appClass;
    let blackblur;
    if (typeof window !== 'undefined') {
        sideBar     = document.querySelector('.side-bar');
        appClass    = document.querySelector('body');
        blackblur   = document.querySelector('#blackblur');
    }

    const slideHandler = (e) => {
        e.preventDefault();
        sideBar.classList.toggle('slide');
        appClass.classList.toggle('block');
        blackblur.classList.toggle('black-blur');
    }
    return(
        <div className="navbar">
            <header className="upHeader">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque odit quisquam exercitationem a voluptas ex ratione veniam iste officia, corrupti aliquid repudiandae veritatis quae facilis?</p>
            </header>
            <nav>

                <div className="nav-header">
                    <div className="menu-toggle">
                        <input type="checkbox" onClick={slideHandler}/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    

                    <div className="logo" id="logo">
                        <img src="/assets/images/30x30.jpg" alt="logo" />
                    </div>

                    <div className="menu-button">
                        {/* <img src={VecLogo} alt="logo" /> */}
                        <p className="profile"><i className="fa-regular fa-user"></i></p>
                        <p><i className="fa-solid fa-cart-shopping"></i> 0</p>
                        <div className='question'>
                            <i className="fa-regular fa-circle-question fa-2xl"></i>
                        </div>
                    </div>
                </div>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#same-day-delivery">Same Day Delivery</a></li>
                    <li><a href="#preorder">1 Day Preorder</a></li>
                    <li><a href="#products">All Products</a></li>
                    <li><a href="#delivery">Delivery & Pickup</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ul>

                
            </nav>
            <hr className="line"/>
        </div>
    )
}
function footer(){
    return(
        <>
            <section id="footer">
                <div className="footer">
                    <div className="item">
                        <b>Lachér Patisserie</b>
                        <p>We serve quality French desserts in Malaysia. All our cakes are professionally made from scratch using only the finest halal ingredients. We provide same-day delivery to KL and Selangor (T&Cs apply).</p>
                    </div>
                    <div className="item-icons">
                        <b>Follow Our Socials</b>
                        <div className="icons">
                            <i className="fa-brands fa-facebook-square fa-lg"></i>
                            <i className="fa-brands fa-instagram fa-lg"></i>
                            <i className='fa-brands fa-tiktok fa-lg'></i>
                        </div>
                    </div>
                    <div className="item">
                        <b>Quick Links</b>
                        <div className="links">
                            <a href="#link">Same Day Delivery/Pickup</a>
                            <a href="#link">Delivery Fee</a>
                            <a href="#link">Pickup Information</a>
                            <a href="#link">Allergen and Diet Information</a>
                            <a href="#link">FAQs</a>
                            <a href="#link">Blogs</a>
                            <a href="#link">Join Our Team</a>
                            <a href="#link">Contact Us</a>
                            <a href="#link">Cancellation and Refund Policy</a>
                            <a href="#link">Terms of Service</a>
                            <a href="#link">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="item">
                        <b>Be In The Know</b>
                        <p>Join our mailing list for updates on new product launches and seasonal specials!</p>
                        <div className="email">
                            <input type="email" placeholder="Enter Email" />
                            <button>{'>'}</button>
                        </div>
                    </div>
                </div>
                    <div className="copyright">
                        <p>© 2022 Lacher Malaysia Sdn Bhd (1412523-D)</p>
                    </div>
            </section>
        </>
    )
}


export { Navbar, footer }