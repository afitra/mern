import React, { Component } from "react";
import Header from "parts/Header";
import LandingPageJson from "json/landingPage";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
export default class LandingPage extends Component {
  render() {
    console.log(LandingPageJson.hero);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={LandingPageJson.hero}></Hero>
        <MostPicked data={LandingPageJson.mostPicked}></MostPicked>
      </>
    );
  }
}
