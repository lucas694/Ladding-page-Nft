import "./MobileSec.css"
import MobileSecImg from "../assets/img/MobileSec.png";

const MobileSec = () => {
  return(
    <div className={"MobileSecContainer"}>
      <div className={"MobileSecContentLeft"}>
        <h1 className={"MobileSecTittle"}>GET OUR APP</h1>
          <p className={"MobileSecText"}>
            Browse NFTs From <p>Your Smartphone</p>
          </p>
          <p className={"MobileSecDescript"}>
            Our Krypto App Is The Easiest Way to Keep
            <p>Track Of Your Assets When You´re On The Go. </p>
          </p>
          <button className={"MobileSecButton"}>DOWNLOAD ON IOS</button>
        </div>
      <div className={"MobileSecContentRight"}>
        <img src={MobileSecImg} className={"MobileSecImg"} alt={"MobileSecImg"}/>
        </div>
      </div>
  )
}
export default MobileSec