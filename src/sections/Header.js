import Navbar from "../components/Navbar"

const Header = (props) => {
  return (
    <section className="sct-header d-flex col">
      <div className="sct-ctn sct-header-ctn d-flex col">
        <img className="logo" src="./logo.png" alt="logo" />
        <Navbar refes={props.refes} />
      </div>
    </section>
  )
}

export default Header;