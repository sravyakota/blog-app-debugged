import {Link} from 'react-router-dom'

import './index.css'

// anni sub folders unay enti??ufffffffffffffff denni debug cheyyali already rasav emo kada code?? cp loha aypoindhi edi
// copy paste chesthunava git lo code ? ? ledu k cmplt antadi ea qsn enka solve cheyleda??ippati daaka stop watch debug chesa e
// di ippudey open chesa vg.. stop watch ipoindha?? aypoindhi  vg anto vadu bollu functions ichadu hahaha okachota this.timeintervak annadu danney ani chotla use chesadu
// adi error aavnu kadu thika maka vundi ah code ahahahhh.. k ipoindi ga.. vg.

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
        <Link className="route-link" to="/about">
          About
        </Link>
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
