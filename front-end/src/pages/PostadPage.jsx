import NavigationBar from '../component/NavigationBar'
import Footer from '../component/Footer'

import Style from './PostadPage.module.css'

function PostadPage() {
  return (
    <div>
      <NavigationBar />
      <div className={Style.postad_page}>
        <div className={Style.headeer}>
            <h1 className={Style.text}>Post your Ad</h1>
        </div>
         <div className={Style.postad_section}>
            <div className={Style.postad_box}>
              <h2 className={Style.postad_text_1}>+</h2>
              <p className={Style.postad_text_2}>Upload the Your Item or Property Images Here...</p>
              <button className={Style.upload_button}>Upload</button>
            </div>
            <div className={Style.postad_form}>
              <form className={Style.from} action="post">
                <input className={Style.input_box} type="text" placeholder='Category' />
                <input className={Style.input_box} type="text" placeholder='Price' />
                <input className={Style.input_box} type="text" placeholder='Description' />
                <input className={Style.input_box} type="text" placeholder='Tag Name' />
                <input className={Style.input_box} type="text" placeholder='First Name' />
                <input className={Style.input_box} type="text" placeholder='Last Name' />
                <input className={Style.input_box} type="text" placeholder='Contact Number' />
                <input className={Style.input_box} type="text" placeholder='Email' />
                <button className={Style.postad_button}>Post Ad</button>
              </form>
            </div>
         </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostadPage