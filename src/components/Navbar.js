const Navbar = (props) => {

  // const [sessionsRef] = props.ref;

  const executeScroll = (refe) => refe.current.scrollIntoView()   

  return (
    <div className="navbar-ctn">
      <ul className="navbar-list d-flex">
        <li className="navbar-item ck" onClick={() => executeScroll(props.refe)}>
          Sessions
        </li>
        <li className="navbar-item ck">
          Book
        </li>
        <li className="navbar-item ck">
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Navbar;