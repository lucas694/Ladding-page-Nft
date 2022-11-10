import "./Header.css";

const Header = () => {
  return (
    <div className={"HeaderContainer"}>
      <h1 className={"TittleHeader"}>KRYPTO</h1>

      <ul className={"Ul-Header"}>
        <li className={"HeaderItem"}>About</li>
        <li className={"HeaderItem"}>Pricing</li>
        <li className={"HeaderItem"}>Contact</li>
        <li className={"HeaderItem"}>Buy NFT</li>
      </ul>
    </div>
  )
}
export default Header