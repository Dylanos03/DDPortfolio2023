import * as React from "react";

function Contact() {
  return (
    <>
      <section className="Contact">
        <h3>Get in touch.</h3>
        <form action="https://formsubmit.co/your@email.com" method="POST">
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />
          <textarea name="message" placeholder="message" rows={5} />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default Contact;
