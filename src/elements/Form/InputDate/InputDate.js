import React, { useState, useRef, useEffect } from "react"
import propTypes from "prop-types"

// import { DateRange } from "react-date-range";

import "./index.scss"
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file

import formatDate from "utils/formatDate"
import iconCalendar from "assets/images/icons/icon-calendar.svg"

export default function Number(props) {
  const { value, placeholder, namemin, max, prefix, suffix } = props
  const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`)

  const onChange = (e) => {
    let value = String(e.target.value)
    if (prefix) value = value.replace(prefix)
    if (suffix) value = value.replace(suffix)

    const patternNumeric = new RegExp("[0-9]*")
    const isNumeric = patternNumeric.test.value
    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: { name: name, value: +value },
      })
      setInputValue(`${prefix}${value}${suffix}`)
    }
  }
  const minus = () => {
    value > minus && onChange({ target: { name: name, value: +value - 1 } })
  }
  const plus = () => {
    value > minus && onChange({ target: { name: name, value: +value + 1 } })
  }

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={iconCalendar} alt="icon calendar" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />

        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  )
}

Number.defaultProps = {
  min: 1,
  max: 2,
  prefix: "",
  suffix: "",
}
Number.prototype = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
}
