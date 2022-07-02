export default function Navbar() {
    const slideHandler = (e) => {
        const sideBar     = document.querySelector('.side-bar');
        const appClass    = document.querySelector('body');
        const blackblur   = document.querySelector('#blackblur');
        

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