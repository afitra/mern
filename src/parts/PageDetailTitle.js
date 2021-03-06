import React from "react"
// eslint-disable-next-line
import Fade from "react-reveal/Fade"
import Breadcrumb from "elements/Breadcrumb/Breadcrumb"

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade button>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <div className="h2">{data.title}</div>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  )
}
