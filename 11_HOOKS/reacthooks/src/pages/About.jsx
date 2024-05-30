import React from 'react'

import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext.jsx'

const About = () => {
  const {contextValue} = useContext(SomeContext)
  return (
    <div>
      <p>Valor do context: {contextValue}</p>
    </div>
  )
}

export default About