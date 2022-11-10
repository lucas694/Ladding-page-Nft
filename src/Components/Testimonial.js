import "./Testimonial.css";
import CardTestimonial from "./CardTestimonial";
import LucasImg from "../assets/img/CardImg/lucas.jfif"
import GustavoImg from "../assets/img/CardImg/gustavo.jpg"
import KleberImg from "../assets/img/CardImg/kleber.png"
// Klebin e Gustavo Meus Amigoes <3


const Testimonial = () => {
  const TestimonialData = [
    {id: 1,name: "Lucas Cardoso", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.", img: LucasImg,},
    {id: 2,name: "Kleber Canedo", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.", img: KleberImg,},
    {id: 3,name: "Gustavo Carvalho", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.", img: GustavoImg,},
  ]
  return(
    <div className={"TestimonialContainer"}>
      <div className={"TestimonialFirstSec"}>
        <h1 className={"TestimonialTittle"}>TESTIMONIAL</h1>
        <p className={"TestimonialText"}>
          Read What Others <p>Have To Say</p>
        </p>
      </div>

    <div className={"TestimonialSecoundSec"}>
      {TestimonialData.map((item) =>{
        return(
          <CardTestimonial key={item.id} Nome={item.name} desc={item.desc} imagem={item.img}/>
        )
      })}
    </div>
    </div>
  )
}
export default Testimonial;