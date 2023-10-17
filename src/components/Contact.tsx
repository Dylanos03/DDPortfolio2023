function Contact() {
  return (
    <>
      <section className="Contact">
        <h3>Get in touch.</h3>
        <form
          action="https://formsubmit.co/b6e71a1d897ebc057a308fffc0966572"
          method="POST"
        >
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
