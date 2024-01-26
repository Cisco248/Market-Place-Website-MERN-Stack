/* eslint-disable jsx-a11y/anchor-has-content */
import Style from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div>
      <nav className={Style.navbar}>
        <div className={Style.container}>
          <a className={Style.logo} href="/">
            Easy <b>:</b>Dealz
          </a>
          <ul className={Style.nav_bar}>
            <li>
              <a className={Style.nav_link}aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li>
              <a className={Style.nav_link} href="/category">
                CATEGORIES
              </a>
            </li>
            <li>
              <a className={Style.nav_link} href="/about">
                ABOUT US
              </a>
            </li>
            <li>
              <a className={Style.nav_link} href="/product">
                BID
              </a>
            </li>
          </ul>

          <div className={Style.contact_section}>
            <a className={Style.contact_icon_link} href="/contact us"><i className="fa fa-phone" aria-hidden="true"></i></a>
            <a className={Style.contact_icon_link} href="/user"><i className="fa fa-user" aria-hidden="true"></i></a>
            <a className={Style.contact_icon_link} href="/shopping cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
            <a href="/postad" className={Style.post_ad_button_style}><button className={Style.post_ad_button}>Post Your Ad</button></a>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar; 
