import Navbar from "../components/Navbar"

const Header = (props) => {
  return (
    <section className="sct-header d-flex">
      <img className="logo" src="./logo.png" alt="logo" />
      <Navbar refes={props.refes} />
    </section>
  )
}

export default Header;