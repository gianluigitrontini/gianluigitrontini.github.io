import React from 'react'

function ContactForm() {
    return (
        <form
        action="https://formspree.io/f/xzbbqvry"
        method="POST"
        id="contact_form"
      >
        <div className="form--row">
          <div className="input--group">
            <label htmlFor="contact_name">Name</label>
            <input
              id="contact_name"
              type="text"
              name="Name"
              placeholder="Your Name (optional)"
            />
          </div>
          <div className="input--group">
            <label htmlFor="contact_email">Email</label>
            <input
              id="contact_email"
              type="email"
              required
              name="Email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="form--row">
          <div className="input--group">
            <label htmlFor="contact_message">Message</label>
            <textarea
              id="contact_message"
              type="text"
              name="Message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" id="contact_send">Send→</button>
      </form>
    )
}

export default ContactForm