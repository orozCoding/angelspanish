import ContactInfo from "../components/ContactInfo";
import Form from "../components/Form";

const ContactSection = (props) => {
  return (
    <section className="sct-contact d-flex col" ref={props.refe}>
      <h2 className="title">Contact</h2>
      <div className="sct-contact-ctn d-flex col">
        <div className="contact-group-1 d-flex col">
          <p>Have some questions? Reach me out!</p>
          <Form />
        </div>
        <div className="contact-group-2 d-flex col">
          <div className="contact-ws-ctn d-flex col">
            <div className="ws-text d-flex col">
              <p>If you have WhatsApp</p>
              <p>Send me a message!</p>
            </div>
            <div className="icon-ws ck">
              <a href="https://wa.me/584249682412?text=Hello+Angel!" target="_blank" rel="noreferrer">
                <img src="./img/icons/whatsapp.svg" alt="whatsapp-icon" />
              </a>
            </div>
          </div>
          <ContactInfo />

        </div>

      </div>
    </section>
  )
}

export default ContactSection;