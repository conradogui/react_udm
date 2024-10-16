import "./App.css";

// importando componente
import FirstComponent from "./components/FirstComponent";

// desestruturando props
import SecondComponent from "./components/SecondComponent";

//import destructuring
import Destructuring, { Category } from "./components/Destructuring";

// usestate ts
import State from "./components/State";
import { createContext } from "react";
import Context from "./components/Context";

// types
type textOrNull = string | null;

type fixed = "Isso" | "ou" | "Aquilo";

//context
interface IAppContext {
  language: String;
  framework: String;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Guilherme";
  const age: number = 22;
  const isDeveloper: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "Tudo bom?";

  const testandoFixed: fixed = "Isso";

  //testando
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <h1>TypeScript com react</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isDeveloper && <p>É desenvolvedor</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteudo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.JS}
        />
        <Destructuring
          title="Segundo post"
          content="Algum conteudo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {myText && <p>Tem texto na variavel</p>}
        <Context/>
      </AppContext.Provider>
    </>
  );
}

export default App;
