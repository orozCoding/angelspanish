const BookSection = (props) => {
  return (
    <section className="sct-book d-flex col" ref={props.refe}>
      <div className="book-group-1 d-flex col">
        <h2 className="bk-title title">Book a Session</h2>
        <div><p>
          My current rate is $12 / session.
        </p>
          <p>
            Each session is 50 min long.
          </p>
        </div>
        <a target="_blank" rel="noreferrer"
          href="https://calendly.com/angelspanishcom/session"
          className="book-btn d-flex ck">
          <p>Book a session!</p>
        </a>
        <div className="bk-disclaimer">
          <p>No advance payment is required.</p>
          <p>Pay after our first session!</p>
        </div>
      </div>
      <div className="book-group-2 d-flex col">
        <p className="title reviews-title"> Some Reviews </p>
        <div className="bk-reviews-ctn">
          <div data-romw-token="xjlAeJMCE9K7Bhp3dhvoGWH5Bpst9BkjUclVengHgPKUQmvB6h"></div>
        </div>
      </div>


    </section>
  )
}

export default BookSection;