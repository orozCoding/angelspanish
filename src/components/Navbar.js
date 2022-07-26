const Navbar = (props) => {

  const {sessionsRef, bookRef, contactRef} = props.refes;

  const executeScroll = (refe) => refe.current.scrollIntoView()   

  return (
    <div className="navbar-ctn">
      <ul className="navbar-list d-flex">
        <li className="navbar-item ck" onClick={() => executeScroll(sessionsRef)}>
          Sessions
        </li>
        <li className="navbar-item ck" onClick={() => executeScroll(bookRef)}>
          Book
        </li>
        <li className="navbar-item ck" onClick={() => executeScroll(contactRef)}>
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Navbar;