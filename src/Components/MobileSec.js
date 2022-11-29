import "./MobileSec.css"
import MobileSecImg from "../assets/img/MobileSec.png";

const MobileSec = () => {
  return(
    <div className={"MobileSecContainer"}>
      <div className={"MobileSecContentLeft"}>
        <h1 className={"MobileSecTittle"}>GET OUR APP</h1>
          <p className={"MobileSecText"}>
            Browse NFTs From Your Smartphone
          </p>
          <p className={"MobileSecDescript"}>
            Our Krypto App Is The Easiest Way to Keep
            Track Of Your Assets When You´re On The Go.
          </p>
        <div className={"MobileSecButton"}>
          <button className={"MobileButton"}>DOWNLOAD ON IOS</button>
        </div>
        </div>
      <div className={"MobileSecContentRight"}>
        <img src={MobileSecImg} className={"MobileSecImg"} alt={"MobileSecImg"}/>
        </div>
      </div>
  )
}
export default MobileSec