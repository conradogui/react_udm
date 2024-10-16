import React, {useContext} from 'react'

import { AppContext } from '../App'


const Context = () => {

    const details = useContext(AppContext)
  return (
    <>
    {details && (
        <div>
            <h1>Linguegem: {details.language}</h1>
            <h1>FW: {details.framework}</h1>
            <h1>QTD: {details.projects}</h1>
        </div>
    )}
    </>
  )
}

export default Context