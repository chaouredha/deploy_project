import PropTypes from 'prop-types'

class Hello {
  constructor(message) {
    this.message = message
  }
}

Hello.propTypes = PropTypes.shape({
  message: PropTypes.string.isRequired
})

export default Hello
