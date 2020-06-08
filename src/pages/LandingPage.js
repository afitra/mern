import React, { Component } from "react";
import Header from "parts/Header";
import LandingPageJson from "json/landingPage";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    // console.log(LandingPageJson.hero);

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
      </>
    );
  }
}
