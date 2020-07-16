import React from "react"
import Button from "elements/Button/Button"
import ImageHero from "assets/images/img-hero.jpg"
import ImageHero_ from "assets/images/img-hero-frame.jpg"
import IconCities from "assets/images/icons/icon-cities.svg"
// import IconTraveler from "assets/images/icons/icon-traveler.svg"
import IconTreasure from "assets/images/icons/icon-treasure.svg"
import CostomFormat from "helpers/formatNumber"
import Fade from "react-reveal/Fade"
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    })
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5 mb-5" style={{ width: 530 }}>
            <h1 className="  font-weight-bold line-height-1 mb-3">
              forget bussy work, <br /> Start next vacation
            </h1>
            <p className="mb-4 font-weight-light text-gray-500 w-75">
              we provide what you need to enjoy your holiday with family. time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              show me
            </Button>
            <div className="row  " style={{ marginTop: 88 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <center>
                  <img
                    src="/assets/images/icon-traveler.svg"
                    alt={`${props.data.travelers} Travelers`}
                  />
                </center>
                <h6 className="mt-3">
                  {CostomFormat(props.data.travelers)}
                  <span className="text-gray-500 font-weight-light">
                    {" "}
                    travelers
                  </span>
                </h6>
              </div>

              {/* ==================== */}
              <div className="col-auto" style={{ marginRight: 35 }}>
                <center>
                  <img
                    src={IconTreasure}
                    alt={`${props.data.travelers} Treasures`}
                  />
                </center>
                <h6 className="mt-3">
                  {CostomFormat(props.data.treasures)}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              {/* ======================== */}

              <div className="col-auto">
                <center>
                  <img
                    src={IconCities}
                    alt={`${props.data.travelers} Cities`}
                  />
                </center>
                <h6 className="mt-3">
                  {CostomFormat(props.data.cities)}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
