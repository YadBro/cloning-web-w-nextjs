export default function Home() {
  return (
    <>
      {/* BRAND <START> */}
        <div className="content-header" style={{ position: 'relative' }}>
            <img src="/assets/images/1280x720.jpg" alt="topimg" className="header-image" data-aos="fade-in" data-aos-delay="600" data-aos-once="true" />
            <div className="card-header" style={{ position: 'absolute' }} data-aos="fade" data-aos-delay="500" data-aos-once="true">
                <h4 data-aos="fade-up" data-aos-delay="200" data-aos-mirror="false" data-aos-once="true">NEW FLAVOUR</h4>
                <p data-aos="fade-up" data-aos-delay="500" data-aos-mirror="false" data-aos-once="true">Uji Matcha Tart</p>
                <p data-aos="fade-up" data-aos-delay="700" data-aos-mirror="false" data-aos-once="true">Uji Matcha ▪ Azuki ▪ Entremet Tart</p>
                <button type="button" data-aos="fade-up" data-aos-delay="900" data-aos-mirror="false" data-aos-once="true">1 Day Pre-order</button>
            </div>
        </div>
        <div className="superiority">
            <div className="superiority-main">
                {/* {number &&(
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="500">
                    <i className={logo.class}></i>
                    <p>{logo.text}</p>
                </div>
                )} */}
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="500">
                    <i className="fa-solid fa-truck fa-xl"></i>
                    <p>Delivery to PJ/KL (within 50km) Free delivery available*</p>
                </div>
                <div className="barrier" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="500"></div>
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="800">
                    <i className="fa-regular fa-face-smile fa-xl"></i>
                    <p>Preorder Basis Freshness Guaranteed</p>
                </div>
                <div className="barrier" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="800"></div>
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="1000">
                    <i className="fa-regular fa-heart fa-xl"></i>
                    <p>Finest Ingredients 100% Halal, No Alcohol</p>
                </div>
                <div className="barrier" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="1000"></div>
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="1100">
                    <i className="fa-solid fa-medal fa-xl"></i>
                    <p>Award Winning Chef Champion of 2016 Asian Pastry Cup</p>
                </div>
                {/* <div className="barrier"></div> */}
            </div>
        </div>


        <section className="product-section">
            <div className="products">
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="500">
                    <img src="/assets/images/300x300.jpg" alt="pdc" />
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="700">
                    <img src="/assets/images/300x300.jpg" alt="pdc" />
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="900">
                    <img src="/assets/images/300x300.jpg" alt="pdc" />
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="1100">
                    <img src="/assets/images/300x300.jpg" alt="pdc" />
                </div>
            </div>

            <h1>Monthly Bestsellers</h1>

            <div className="products" id="brand2">
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="500">
                    <img src="/assets/images/300x300.jpg" alt="pdc" />
                    <h4>Valrhona Caraibe Hazelnut Praline from RM115.00</h4>
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="700">
                    <img src="/assets/images/300x300.jpg" alt="pdc" />
                    <p className="info">1 day pre-order</p>
                    <h4>Uji Matcha Tart RM105.00</h4>
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="900">
                    <img src="/assets/images/300x300.jpg" alt="pdc" />
                    <h4>Citron Tart RM82.00</h4>
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="1100">
                    <img src="/assets/images/300x300.jpg" alt="pdc" />
                    <h4>Kochi Yuzu Mango Tart RM120.00</h4>
                </div>
            </div>
        </section>
        {/* BRAND <END> */}

        {/* LOCATION <START> */}
        <section id="location" style={{ position: 'relative' }}>
            <img src="/assets/images/1280x480.jpg" alt="lctimg" className="lct-img" />
            <div className="card-lct">
                <h3 className="card-lct-title">Our Location</h3>
                <p className="card-lct-desc">
                <b>Lachér Patisserie</b><br />
                A-1-11, Eve Suite,<br />
                Jalan PJU 1A/41, Ara<br />
                Damansara,<br />
                47301,<br />
                Petaling Jaya, Selangor.<br /><br />

                <b>Delivery & Pickup ONLY</b><br />
                (No dine-in/walk-in)<br />
                Mon - Sun, 11am - 6pm<br /></p>
                <button type="button">Pickup Location</button>
            </div>
        </section>
        {/* LOCATION <END> */}


        {/* TESTIMONIAL <START> */}
        <section id="testimonial">
            <h1 className="section-title">Testimonials</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi itaque recusandae, officiis vero, quaerat animi tempore, maiores autem temporibus blanditiis laudantium quos molestiae sequi rem earum ex nihil fugiat pariatur!"</p>
            <b>Man & Woman</b>
            <div className="circle-icons">
                <i className="fa-regular fa-circle fa-sm"></i>
                <i className="fa-regular fa-circle fa-sm"></i>
                <i className="fa-regular fa-circle fa-sm"></i>
                <i className="fa-solid fa-circle fa-sm"></i>
                <i className="fa-regular fa-circle fa-sm"></i>
                <i className="fa-regular fa-circle fa-sm"></i>
            </div>
        </section>
        {/* TESTIMONIAL <END> */}

        {/* BLOG <START> */}
        <section id="blog">
            <div className="blog-content">
                <h1 className="section-title">From The Blog</h1>
                <div className="brand-img">
                    <div className="left">
                        <img src="/assets/images/1280x720.jpg" alt="tpmg" />
                        <b className="blog-title">25 Chinese New Year Wishes in Chinese & English for CNY 2022!</b>
                        <p>One of the best ways to send your family and friends your good blessings for the year 2022 is of course, through words of encouragement,...</p>
                        <a href="#read-more">Read more</a>
                    </div>
                    <div className="right">
                        <img src="/assets/images/1280x720.jpg" alt="tpmg" />
                        <b className="blog-title">2 captivating 2021 Christmas cakes that will WOW your friends and family!</b>
                        <p>Don't you think it's time to spice up your Christmas dessert table with something new, fresh, and jaw-dropping all at the same time? We do!...</p>
                        <a href="#read-more">Read more</a>
                    </div>
                </div>
                <button>View all</button>
            </div>
        </section>
        {/* BLOG <END> */}
        </>
  )
}
