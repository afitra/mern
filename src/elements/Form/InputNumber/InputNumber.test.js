import React from "react"
import { render, fireEvent } from "@testing-library/react"
import InputNumber from "./InputNumber.js"

class TestInput extends React.Component {
  state = {
    value: "",
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <InputNumber
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    )
  }
}

const setup = () => {
  const { container } = render(<TestInput />)
  const input = container.querySelector(`input.form-control[name='value']`)

  return {
    input,
  }
}

test("input harus jadi string", () => {
  const { input } = setup()

  // console.log(" ini type input", typeof input.value)

  fireEvent.change(input, { target: { value: 23 } })
  expect(input.value).toBe("23")
})

test("jika input lebih dari 30 harus jadi string kosong", () => {
  const { input } = setup()

  fireEvent.change(input, { target: { value: 33 } })
  expect(input.value).toBe("")
})
