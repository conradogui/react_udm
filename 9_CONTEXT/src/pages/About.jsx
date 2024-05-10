import { useCounterContext } from "../hooks/useCounterContext.jsx";
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const About = () => {
  // 5 - contexto mais complexo
  const { color } = useTitleColorContext();
  
  const { counter } = useCounterContext();
  return (
    <div>
      <h1 style={{color: color}}>Sobre</h1>
      <p>Valor do contador {counter}</p>
    </div>
  );
};

export default About;
