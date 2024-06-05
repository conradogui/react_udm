import React from 'react'
import HookUseState from '../components/HookUseState.jsx'
import HookUseReducer from '../components/HookUseReducer.jsx'
import HookUseEffect from '../components/HookUseEffect.jsx'
import HookUseRef from '../components/HookUseRef.jsx'

// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext.jsx'
import HookUseCallback from '../components/HookUseCallback.jsx'
import HookUseMemo from '../components/HookUseMemo.jsx'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect.jsx'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle.jsx'
import HookCustom from '../components/HookCustom.jsx'

const Home = () => {
  const {contextValue} = useContext(SomeContext)
  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>useContext</h2>
        <p>Valor do context: {contextValue}</p>
        <hr />
        <HookUseRef/>
        <HookUseCallback/>
        <HookUseMemo/>
        <HookUseLayoutEffect/>
        <HookUseImperativeHandle/>
        <HookCustom/>
    </div>
  )
}

export default Home