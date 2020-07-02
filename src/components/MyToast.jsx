import Toast from "react-bootstrap/Toast";
import React from "react";

const MyToast = (props) => {
  return(
  <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Update message</strong>
      <small>Just Now</small>
    </Toast.Header>
    <Toast.Body>{props.message}</Toast.Body>
  </Toast>)
};

export default MyToast;
