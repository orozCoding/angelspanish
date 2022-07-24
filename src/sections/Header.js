import Navbar from "../components/Navbar"

const Header = () => {
  return (
    <section className="sct-header d-flex">
      <img className="logo" src="./logo.png" alt="logo" />
      <Navbar />
    </section>
  )
}

export default Header;