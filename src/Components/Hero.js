import "./Hero.css"
import HeroImg from "../assets/img/HeroImg.png";
const Hero = () =>{
  return (
    <div className="HeroContainer">
      <div className={"HeroContentLeft"}>
        <h1 className={"HeroTittle"}>Discover <p>And Collect</p> Rare NFTs</h1>

        <p className={"HeroDescript"}>The Monst Secure Marketplace For Buying
          <p>And Selling Unique Crypto Assets.</p></p>

        <div>
          <button className={"HeroBuyButton"}>BUY NFTS</button>
          <button className={"HeroSellButton"}>SELL NFTS</button>
        </div>
      </div>

      <div className={"HeroContentRight"}>
        <img src={HeroImg} className={"HeroImg"} alt="HeroImg" />
      </div>

    </div>
  )
}

export default Hero