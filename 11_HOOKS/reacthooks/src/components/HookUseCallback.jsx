import {useCallback, useState} from 'react'

import List from './List.jsx'

const HookUseCallback = () => {

    const [counter, setCounter] = useState(0)

    const getItensFromDb = useCallback(() => {
        return["a", "b", "c"]
    },[])
  return (
    <div>
        <h2>useCallback</h2>
        <List getItens={getItensFromDb}/>
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
        <p>{counter}</p>
        <hr />
    </div>
  )
}

export default HookUseCallback