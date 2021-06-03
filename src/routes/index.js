import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

/* Composant de page NotFound */
/* Liste des Path à utiliser */
import SiteMap from './SiteMap'
import Home from 'components/Activite/Home'
import Menu from 'components/menu/Menu'
import HelloContexte from 'app/contexte/HelloContexte'

const Routing = () => (
  <>
    <HelloContexte>
      <Menu />
      <Switch>
        <Route path={SiteMap.ACCUEIL.path}>
          <Home />
        </Route>
        <Route path="*">
          <Redirect to={SiteMap.ACCUEIL.path} />
        </Route>
      </Switch>
    </HelloContexte>
  </>
)

export default Routing
