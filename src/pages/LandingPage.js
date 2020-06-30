import React, { Component } from "react"
// import { connect } from "react-redux"
import Header from "parts/Header"
import LandingPageJson from "json/landingPage.json"
import Hero from "parts/Hero"
import MostPicked from "parts/MostPicked"
import Categories from "parts/Categories"
import Testimony from "parts/Testimony"
import Footer from "parts/Footer"
export default class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }
  componentDidMount() {
    window.title = "staycation | Home"
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero
          refMostPicked={this.refMostPicked}
          data={LandingPageJson.hero}
        ></Hero>
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={LandingPageJson.mostPicked}
        ></MostPicked>
        <Categories data={LandingPageJson.categories} />
        <Testimony data={LandingPageJson.testimonial} />
        <Footer />
      </>
    )
  }
}
