import React from 'react';
import '@styles/layout/contactMe.scss';

const ContactMe = () => (
  <>
    <section>
      <article className="form">
        <h3>Contact Me</h3>
        <form>
          <input type="text" name="first_name" className="input-text" id="first_name" placeholder="Name" required="" />
          <input type="email" className="input-text" name="email" id="email" placeholder="Email" required="" />
          <input type="tel" className="input-text" name="telephone" id="telephone" placeholder="Phone" />
          <textarea className="input-text text-area" name="comments" id="message" rows="5" placeholder="Message"></textarea>
          <div className="text-center"><button type="submit" className="input-btn">Send Message</button></div>
        </form>
      </article>
    </section>
  </>
);

export default ContactMe;
