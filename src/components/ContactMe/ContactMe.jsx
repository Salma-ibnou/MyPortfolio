import React from 'react'
import'./ContactMe.css'
import ContactMeCard from './ContactMeCard/ContactMeCard'
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
return (
<section className="contact-container">
    <h5>Contact Me</h5>
    <div className="contact-content">
        <div style={{flex:1}}>
        <ContactMeCard iconUrl={"../public/images/email.png"}
        text="sibnouabs@gmail.com"
        />
        <ContactMeCard iconUrl={"../public/images/github.png"}
        text="https://github.com/Salma-ibnou"
        />
        </div>
        <div style={{flex:1}}>
        <ContactForm/>
        </div>
    </div>
</section>
)
}
export default ContactMe
