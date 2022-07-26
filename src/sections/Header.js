import Navbar from "../components/Navbar"

const Header = (props) => {
  return (
    <section className="sct-header d-flex">
      <img className="logo" src="./logo.png" alt="logo" />
      <Navbar refe={props.refe} />
    </section>
  )
}

export default Header;