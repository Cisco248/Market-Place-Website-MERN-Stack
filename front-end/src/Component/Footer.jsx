import React from "react";
import Style from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <section className={Style.info_section}>

        <div className={Style.container}>
          
          <div className={Style.row}>

            <div className={Style.info_contact}>
                <h5 classNameName={Style.text}><a href="" className={Style.p_name}>EasyDealz.lk</a></h5>
                <p><i className={Style.info_contact_icon} class="fa fa-map-marker" aria-hidden="true"></i> N0 - 153 School Lane Maharagama , Sri Lanka.</p>
                <p><i className={Style.info_contact_icon} class="fa fa-phone" aria-hidden="true"></i> +94 756752054</p>
                <p><i className={Style.info_contact_icon} class="fa fa-envelope" aria-hidden="true"></i> easydealz@gmail.com</p>
            </div>

            <div className={Style.information_section}>
                <h5 className={Style.text}>Information</h5>
                <p>At Easy Dealz, we've created a user-friendly platform where
                    you can easily list and discover a wide range of used items.
                    Whether you're looking to declutter your space or find hidden
                    gems at unbeatable prices, Easy Dealz has you covered.</p>
            </div>
            
            <div className={Style.link_section}>
                <h5 className={Style.text}>Useful Link</h5>
                <ul className={Style.link_list}>
                  <li><a  className={Style.link_text} href="/">Home</a></li>
                  <li><a  className={Style.link_text} href="/user">User</a></li>
                  <li><a  className={Style.link_text} href="/shopping cart">Shopping Cart</a></li>
                  <li><a  className={Style.link_text} href="/bid page">Bid</a></li>
                </ul>
            </div>

            <div className={Style.social_box}>
                <h5 className={Style.text}>Social Media</h5>
                <div className={Style.social_icon}>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" color="black"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" color="black"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true" color="black"></i></a>
                    <a href="#"><i className="fa fa-youtube" aria-hidden="true" color="black"></i></a>
                </div>
                
            </div>

          </div>

        </div>

      </section>

      <footer className={Style.footer_section}>
          <p className={Style.footer_text}>&copy; <span id="displayYear"></span> All Rights Reserved By <a className={Style.footer_link} href="#">Easy Dealz Group</a></p>
      </footer>
    </div>
  );
}

export default Footer;
