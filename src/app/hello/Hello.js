import React from 'react'
import PropTypes from 'prop-types'

const Hello = ({ message }) => {
  return <div>{message}</div>
}

export default Hello

Hello.propTypes = {
  message: PropTypes.string
}
