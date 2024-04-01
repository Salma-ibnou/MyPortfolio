import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_27qemp9', 'template_y7ge01c', form.current, {
        publicKey: 'WmFT5YuSbSrIqRSU1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
      <div className="contact-form-content">
       <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
                <input type="text" name='firstName' placeholder='First Name'/>
                <input type="text"name='lastName' placeholder='Last Name' />
            </div>
                <input type="text" name='email' placeholder='Email' />
                <textarea name="text" placeholder='Message' rows={3}/>
                <button>SEND</button>
            
            
        </form>
    </div>
  );
};
export default ContactForm
