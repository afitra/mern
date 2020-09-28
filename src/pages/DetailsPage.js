import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import { connect } from "react-redux"

import Header from "parts/Header"
import PageDetailTitle from "parts/PageDetailTitle"
import FeaturedImage from "parts/FeaturedImage"
import PageDetailDescription from "parts/PageDetailDescription"
import BookingForm from "parts/BookingForm"
import Categories from "parts/Categories"
import Testimony from "parts/Testimony"
import Footer from "parts/Footer"

import ItemDetails from "json/itemDetails.json"
import { checkoutBooking } from "store/actions/checkout"

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page"
    window.scrollTo(0, 0)

    // if (!this.props.page[this.props.match.params.id])
    //   this.props.fetchPage(
    //     `/detail-page/${this.props.match.params.id}`,
    //     this.props.match.params.id
    //   )
  }
  render() {
    const { page, match } = this.props
    console.log("1111", this.props)
    // if (!page[match.params.id]) return null
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ]
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Fade bottom>
          <Testimony data={ItemDetails.testimonial} />
        </Fade>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  // mengambil state di redux di jadikan props
  page: state.page,
})

export default connect(mapStateToProps, { checkoutBooking })(DetailsPage) // checkoutBooking di taruh situ agar bisa diakses lewat props
