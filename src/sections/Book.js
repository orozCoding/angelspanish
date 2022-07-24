import Calendly from "../components/Calendly";

const BookSection = () => {
  return (
    <section className="sct-book d-flex col">
      <h2 className="bk-title title">Book a Session</h2>
      <p>
      My current rate is $12 / session.
Each session is 50 min long.
      </p>
      <Calendly />
      <p className="bk-disclaimer">No advance payment is required. Pay after our first session!</p>
      <div>VIDEO</div>
    </section>
  )
}

export default BookSection;