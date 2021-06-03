import React, { useContext } from 'react'
import Hello from 'app/hello/Hello'
import HelloContexte from 'app/contexte/HelloContexte'

/**
 * Activité d'accueil du projet
 */
const Home = () => {
  const helloCtx = useContext(HelloContexte.ctx)
  return (
    <div>
      <h1>Bienvenue dans cette application</h1>
      <Hello message={helloCtx.hello.message} />
    </div>
  )
}

export default Home
