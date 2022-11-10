import "./CardTestimonial.css"

const CardTestimonial = (props) =>{
  return(
    <div className={"CardContainer"}>
      <img className={"CardImg"} src={props.imagem} alt="CardImg"/>
      <div className={"CardFirstSec"}>
        <h1 className={"CardName"}> {props.Nome}</h1>
        <p className={"CardDesc"}>
          {props.desc}
        </p>
      </div>
    </div>
  )
}
export default CardTestimonial;