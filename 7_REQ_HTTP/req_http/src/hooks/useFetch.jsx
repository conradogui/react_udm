import { useState, useEffect } from "react";

//4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null); //para trabalhar com os dados que recebemos da API

  //5 - refatorando post
  const [config, setConfig] = useState(null); //configura o metodo que vai ser utilizado (POST,GET, DELETE), configura os cabeçalhos tambem
  const [method, setMethod] = useState(null); //esse vai falar qual metodo que eu estaria utilizando na minha função (GET, POST, etc)
  const [callFetch, setCallFetch] = useState(false); // vou chamar o callfetch no meu useEffect para atualizar e trazer os dados atualizados

  //6 - loading
  const [loading, setLoading] = useState(false);

  // 7 - tratando erros
  const [error, setError] = useState(null);

  //8 - delete 
  const [itemId, setItemId] = useState(null)


  const httpConfig = (data, method) => { // faço essa função para não ter que configurar o config no componente que vou chamar ele
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if ( method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });
      setMethod(method)
      setItemId(data)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      //6 - loading
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message)

        setError("Houve algum erro ao carregar os dados!")
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  //5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {

      let json

      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        json = await res.json();

        setCallFetch(json);
      } else if(method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`

        const res = await fetch(deleteUrl, config)

        json = await res.json()
      }
      setCallFetch(json)
    };
    httpRequest();
  }, [config, method, url]);
  return { data, httpConfig, loading, error };
};
