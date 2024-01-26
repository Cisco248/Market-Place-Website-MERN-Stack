import Style from "./ElectronicPage.module.css"
import NavigationBar from "../component/NavigationBar"
import Footer from "../component/Footer"
import SearchBar from "../component/SearchBarComponent.jsx";

function ElectronicPage() {
  return (
    <div>
        <NavigationBar />
        <SearchBar />
        <div>
            <div className={Style.page_title}>
                <h1 className={Style.page_text}>Electronics</h1>
            </div>

            <div className={Style.container}>
                <div className={Style.line1}>
                    <div className={Style.box1}>
                        <h2 className={Style.item_name}>Sony 32 inch Television</h2>
                        <img className={Style.item_img} src="./electronics/9.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 23 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                    <div className={Style.box2}>
                        <h2 className={Style.item_name}>Samsung 32 inch Television</h2>
                        <img className={Style.item_img} src="./electronics/10.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 29 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                    <div className={Style.box3}>
                        <h2 className={Style.item_name}>Black & Decker Fan</h2>
                        <img className={Style.item_img} src="./electronics/13.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 4 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                    <div className={Style.box4}>
                        <h2 className={Style.item_name}>Samsung Washing Machine</h2>
                        <img className={Style.item_img} src="./electronics/15.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 50 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                </div>

                <div className={Style.line2}>
                    <div className={Style.box1}>
                        <h2 className={Style.item_name}>Hitachi Vaccum Cleaner</h2>
                        <img className={Style.item_img} src="./electronics/14.jpg" alt="" />
                        <h2 className={Style.price_text}> LKR 13 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                    <div className={Style.box2}>
                        <h2 className={Style.item_name}>Sony Subwoofer</h2>
                        <img className={Style.item_img} src="./electronics/2.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 10 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                    <div className={Style.box3}>
                        <h2 className={Style.item_name}>Japan Oven</h2>
                        <img className={Style.item_img} src="./electronics/3.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 70 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                    <div className={Style.box4}>
                        <h2 className={Style.item_name}>BluRay Player</h2>
                        <img className={Style.item_img} src="./electronics/4.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 8 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                </div>

                <div className={Style.line3}>
                    <div className={Style.box1}>
                        <h2 className={Style.item_name}>Singer Washing Machine</h2>
                        <img className={Style.item_img} src="./electronics/5.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 47 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                    <div className={Style.box2}>
                        <h2 className={Style.item_name}>Abans TV 32 inch</h2>
                        <img className={Style.item_img} src="./electronics/6.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 20 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                    <div className={Style.box3}>
                        <h2 className={Style.item_name}>Huawei 320MBps Router</h2>
                        <img className={Style.item_img} src="./electronics/7.jpeg" alt="" />
                        <h2 className={Style.price_text}> LKR 9 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                    <div className={Style.box4}>
                        <h2 className={Style.item_name}>Epson Projector</h2>
                        <img className={Style.item_img} src="./electronics/1.jpg" alt="" />
                        <h2 className={Style.price_text}> LKR 120 000</h2>
                        <button className={Style.button_info}><a className={Style.info_link} href="#">View More</a></button>
                    </div>
                </div>
            </div>
            
        </div>

        <Footer />
    </div>
  )
}

export default ElectronicPage