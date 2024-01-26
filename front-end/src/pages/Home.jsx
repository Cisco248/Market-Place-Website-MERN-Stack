import React from 'react'
import Style from './Home.module.css'
import NavigationBar from "../component/NavigationBar"
import Footer from "../component/Footer"


function Home() {

  return (
   <div>
        <NavigationBar />
        <h1 className={Style.title_text}>Sri Lanka No: 1 Market Place</h1>
        <p className={Style.text}>Buy and sell everything from used Items now in one place</p>
        <form className={Style.search_bar} role="search">
            <input
              className={Style.box}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={Style.search_btn} type="submit">Search</button>
          </form>

        <div className={Style.category_bar}>
            <h3 className={Style.category_bar_text}>Categories</h3>
        </div>
        <div className={Style.icon}>
            <div className={Style.category_icon1}>
                <div className={Style.box1}>
                    <p className={Style.category_text}><a className={Style.category_text_link} href="/electronic">Electronics</a></p>
                    <img src="./images/tv.png" />
                </div>
                <div className={Style.box2}>
                    <p className={Style.category_text}><a className={Style.category_text_link} href="#">Laptops</a></p>
                    <img src="./images/laptop.png" alt='' />
                </div>
            </div>

            <div className={Style.category_icon2}>
                <div className={Style.box3}>
                    <p className={Style.category_text}><a className={Style.category_text_link} href="#">Furnitures</a></p>
                    <img src="./images/furniture.png" alt='' />
                </div>
                <div className={Style.box4}>
                    <p className={Style.category_text}><a className={Style.category_text_link} href="#">Vehicles</a></p>
                    <img src="./images/car.svg" alt='' />
                </div>
            </div>

            <div className={Style.category_icon3}>
                <div className={Style.box5}>
                    <p className={Style.category_text}><a className={Style.category_text_link} href="#">Mobile Phones</a></p>
                    <img src="./images/phone.svg" alt='' />
                </div>
                <div className={Style.box6}>
                    <p className={Style.category_text}><a className={Style.category_text_link} href="#">Sports Goods</a></p><img src="./images/sports.png" alt='' />
                </div>
            </div>
        </div>

        <div className={Style.category_bar}>
            <h3 className={Style.category_bar_text}>About US</h3>
        </div>

        <div className={Style.about_box}>
            <div className={Style.about_section}>
                <h2 className={Style.about_title}>We Provide Best For You</h2>
                <p className={Style.about_text}>I recently purchased a laptop from easydealz.lk, and I must say I'm quite pleased with both the product and the overall shopping experience.The laptop itself is fantastic—exactly as described on the website. It runs smoothly, has a sleek design, and the performance is impressive. The specifications match the product listing, and I've had no issues so far.The ordering process was straightforward, and I appreciated the user-friendly interface of the website. Navigating through the various options was a breeze, and I found all the information I needed about the laptop I was interested in</p>
            </div>
            <div className={Style.about_img}>
                <img src="./images/about.jpg" />
            </div>
        </div>

        <div className={Style.category_bar}>
            <h3 className={Style.category_bar_text}>Service</h3>
        </div>
        
        <div className={Style.service_box}>
            <div className={Style.service_title}>
                <h2>Why Choose Us</h2>
            </div>

            <div className={Style.service_tab}>
                <div className={Style.service_box1}>
                    <img className={Style.service_icon} src="images/w1.png" alt=""/>
                    <h5 className={Style.service_text}>Fast Delivery</h5>
                    <p>variations of passages of Lorem Ipsum available</p>
                </div>

                <div className={Style.service_box2}>
                    <img className={Style.service_icon} src="images/w2.png" alt=""/>
                    <h5 className={Style.service_text}>Free Shiping</h5>
                    <p>variations of passages of Lorem Ipsum available</p>
                </div>

                <div className={Style.service_box3}>
                    <img className={Style.service_icon} src="images/w3.png" alt=""/>
                    <h5 className={Style.service_text}>Best Quality</h5>
                    <p>variations of passages of Lorem Ipsum available</p>
                </div>
            </div>
        </div>
        <Footer />
   </div>
  )
}

export default Home