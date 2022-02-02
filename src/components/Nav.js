import globe from "../globe.svg"

export default function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img className="globe" src={globe} alt="globe logo" />
        <h3 className="logo">My travel journal.</h3>
      </div>
    </nav>
  )
}
