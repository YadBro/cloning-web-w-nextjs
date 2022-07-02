export default function footer(){
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