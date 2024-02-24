import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dbd6373a-bffb-4234-99f4-6432d9af9a52");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset()
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse odit impedit sint at numquam harum a deserunt corrupti maxime quaerat ab ratione, laborum quia ipsum quod odio quam ad voluptatem?</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> Contact@gmal.com</li>
                <li> <img src={phone_icon} alt="" /> +91 0000000000</li>
                <li> <img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form  onSubmit={onSubmit} action="">
                <label htmlFor="">Your Name:</label>
                <input type="text" name='name' id='' required placeholder='Enter your name' />

                <label htmlFor="">Phone Number:</label>
                <input type="tel" name='phone' required placeholder='Enter your mobile number'  />

                <label htmlFor="">Write your messages here:</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact