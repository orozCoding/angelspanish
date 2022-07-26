import Carousel from "../components/Swiper";

const SessionsSection = (props) => {

  return (
    <section className="sct-sessions d-flex col oh" ref={props.refe}>
      <h2 className="ses-title title">Our Sessions</h2>
      <p>
        I believe everyone is different so I offer 1-on-1 video meetings. This way I'm able to customize the sessions and the experience for each student. Our sessions will be unique, fulfilling your needs and finding the best path for you.
      </p>
      <div className="ses-carousel-ctn d-flex col"><Carousel /></div>
      <p>
        I have experience teaching total beginners as well as advanced students who just want to sharpen their Spanish skills. From guys wanting me to help them with Spanish pick-up lines, to doctors wanting to improve their communication with their patients, to people hiring me only to help them pass Spanish-related college exams.
      </p>
      <p>
        It doesn't matter how much Spanish you know (or if you literally just don't know any), I'm capable of help you achieve your goals.
      </p>
    </section>
  )
}

export default SessionsSection;