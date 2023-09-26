import React from 'react'
import Toast from 'react-bootstrap/Toast';

const Error = (props) => {
  return (
    <div>
    <Toast className="d-inline-block m-1 bg-danger show">
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">Warning</strong>
    </Toast.Header>
    <Toast.Body>{props.val}</Toast.Body>
  </Toast>
    
    </div>
  )
}

export default Error