import React, { Component } from "react"

// import Breadcrumb from "elements/Breadcrumb"
// import InputDate from "elements/Form/InputDate/InputDate.js"
import { InputDate, InputNumber } from "elements/Form"
export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    // eslint-disable-next-line
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ]

    // return (
    //   <div className="container">
    //     <div
    //       className="row align-items-center justify-content-center"
    //       style={{ height: "100vh" }}
    //     >
    //       <div className="col-auto">
    //         <Breadcrumb data={breadcrumb} />
    //       </div>
    //     </div>
    //   </div>
    // )
    return (
      <div className="div container">
        <div
          className="div row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="div col-auto">
            <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
            <InputNumber />
          </div>
        </div>
      </div>
    )
  }
}
