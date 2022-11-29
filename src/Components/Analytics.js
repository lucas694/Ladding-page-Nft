import "./Analytics.css"
import AnalyticImg from "../assets/img/AnalyticsImg.png";

const Analytics = () => {
  return (
    <div className={"AnalyticsContainer"}>
      <div className={"AnalyticContentLeft"}>
        <img src={AnalyticImg} className={"AnalyticImg"} alt={"AnalyticImg"}/>
      </div>
      <div className={"AnalyticContentRight"}>
        <h1 className={"AnalyticTittle"}>ANALYTICS</h1>
        <div>
          <p className={"AnalyticText"}>
            Built-In Analytics To Track Your NFTs
          </p>

          <p className={"AnalyticDescript"}>
            Use our built-in analytics dashboard to
            <p>pull valuable insights and monitor the value </p>
            <p>of your Krypto portfolio over time.</p>
          </p>
        <div className={"AnalyticButtonSection"}>
          <button className={"AnalyticButton"}>VIEW OUR PRICING</button>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Analytics