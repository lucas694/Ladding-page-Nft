import "./Reference.css"
import Img1 from "../assets/img/ReferenceImg/image-1.png";
import Img2 from "../assets/img/ReferenceImg/image-2.png";
import Img3 from "../assets/img/ReferenceImg/image-3.png";
import Img4 from "../assets/img/ReferenceImg/image-4.png";

const Reference = ( ) => {
  return (
    <div className="ReferenceContainer">
      <h1 className={"ReferenceTittle"}> FEATURED ON</h1>
      <div className="ReferenceContent">
        <div className={"ReferenceImgs"}>
          <img src={Img1} className={"ReferenceImg1"} alt={"ReferenceImgs"}/>
          <img src={Img2} className={"ReferenceImg2"} alt={"ReferenceImgs"}/>
          <img src={Img3} className={"ReferenceImg3"} alt={"ReferenceImgs"}/>
          <img src={Img4} className={"ReferenceImg4"} alt={"ReferenceImgs"}/>
        </div>
      </div>
    </div>
  )
}
export default Reference