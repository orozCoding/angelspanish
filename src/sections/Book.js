const BookSection = (props) => {
  return (
    <section className="sct-book d-flex col" ref={props.refe}>
      <h2 className="bk-title title">Book a Session</h2>
      <p>
        My current rate is $12 / session.
        Each session is 50 min long.
      </p>
      <a target="_blank" rel="noreferrer"
        href="https://calendly.com/angelspanishcom/session"
        className="book-btn d-flex ck">
        <p>Book a session!</p>
      </a>
      <p className="bk-disclaimer">No advance payment is required. Pay after our first session!</p>
      <p className="title"> Some Reviews </p>
      <div className="bk-reviews-ctn">
        <div data-romw-token="xjlAeJMCE9K7Bhp3dhvoGWH5Bpst9BkjUclVengHgPKUQmvB6h"></div>
      </div>
    </section>
  )
}

export default BookSection;