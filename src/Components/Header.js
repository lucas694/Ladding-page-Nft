import "./Header.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className={"HeaderContainer"}>
      <h1 className={"TittleHeader"}>KRYPTO</h1>
      <button className={"ButtonHeader"} onClick={toggle}>
        <FaBars className={"ButtonHeader"}/>
      </button>

      <ul className={"Ul-Header"}>
        <li className={"HeaderItem"}>About</li>
        <li className={"HeaderItem"}>Pricing</li>
        <li className={"HeaderItem"}>Contact</li>
        <li className={"HeaderItem"}>Buy NFT</li>
      </ul>

      {/*UL MOBILE*/}
      <ul className={isOpen? "Ul-MobileShow" : "Ul-MobileHidden"}>
        <li className={"HeaderItemMobile"}>About</li>
        <li className={"HeaderItemMobile"}>Pricing</li>
        <li className={"HeaderItemMobile"}>Contact</li>
        <li className={"HeaderItemMobile"}>Buy NFT</li>
      </ul>
    </div>
  )
}
export default Header