import React from 'react'
import HookUseState from '../components/HookUseState.jsx'
import HookUseReducer from '../components/HookUseReducer.jsx'
import HookUseEffect from '../components/HookUseEffect.jsx'

const Home = () => {
  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
    </div>
  )
}

export default Home