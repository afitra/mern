import { CHECKOUT_BOOKING } from "../types"
// import axios from "configs/axios";
import axios from "axios"

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  })
}

export const submitBooking = (payload) => () => {
  // return axios.post(`/booking-page`, payload, {
  //   headers: { contentType: "multipart/form-data" },
  // });

  return axios.post(
    "http://localhost:4000/api/v1/member/booking-page",
    payload,
    {
      headers: { contentType: "multipart/form-data" },
    }
  )
}
