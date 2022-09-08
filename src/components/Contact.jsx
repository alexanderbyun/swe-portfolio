import React from 'react'
import Phone from "../img/phone.png"
import Email from "../img/email.png"
import Address from "../img/address.png"

const Contact = () => {
  return (
    <div className="c">
        
        <div className="c-bg"></div>
        
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Get in touch!</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +1 404 735 1070
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        contact@alexanderbyun.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Atlanta, GA
                    </div>
                </div>
            </div>
            
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b>
                    <p>Get in touch. Always available for freelancing if the right project comes along.</p>
                </p>
                <form>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact
