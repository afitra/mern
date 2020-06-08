import React, { Component } from "react";
import Header from "parts/Header";
import LandingPageJson from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    console.log(LandingPageJson);

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
      </>
    );
  }
}
