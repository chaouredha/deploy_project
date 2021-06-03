import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { object } from 'prop-types'
import Routing from '../routes'

const App = ({ history }) => (
  <Container>
    <BrowserRouter history={history}>
      <Routing />
    </BrowserRouter>
  </Container>
)

App.propTypes = {
  history: object
}

export default App
