import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import helloApi from 'apis/hello/hello'

const HelloContext = React.createContext()

const HelloContexte = ({ children }) => {
  const [hello, setHello] = useState('')
  useEffect(() => {
    helloApi.hello().then(setHello)
  }, [])

  return <HelloContext.Provider value={{ hello }}>{children}</HelloContext.Provider>
}

HelloContexte.ctx = HelloContext

HelloContexte.propTypes = {
  children: PropTypes.node.isRequired
}
export default HelloContexte
