// import { useContext } from 'react'
// import { CounterContext } from '../components/context/CounterContext.jsx'
import ChangeCounter from '../components/ChangeCounter.jsx'

// 4 - refatorando hook
import { useCounterContext } from '../hooks/useCounterContext.jsx'

// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext.jsx'

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  // 5 - contexto mais complexo
  const {color, dispatch} = useTitleColorContext()

  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({type: color})
  }
  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador {counter}</p>
      {/* 3 - Alterando valor do contexto */}
      <ChangeCounter/>
      {/* 6 - criando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home