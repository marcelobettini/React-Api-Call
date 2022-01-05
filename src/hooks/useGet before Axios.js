// cuando el componente se monte, este CH va a realizar una petición HTTP a
//un endpoint (variable) y retornará la información de dicha petición, si la
//petición está en progreso (spinner) y si hubo un error
//esto es un servicio base que devuelve información, luego, cada componente debe
//manejar esa información de acuerdo a lo que se debe renderizar

import { useEffect, useState } from "react";
const BASE_URL = "https://rickandmortyapi.com/api/";

export const useGet = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async (endpoint) => {
    try {
      const res = await fetch(`${BASE_URL}/${endpoint}`);
      const json = await res.json();
      console.log(json);
      setData(json);
      setTimeout(() => {
        setLoading(false); //simulo una carga un poco más notoria
      }, 2000);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);
  //retornamos un array porque los hooks de React retornan arreglos, podríamos retornar
  //un objeto también pero seguimos la estructura usual de React para los hooks
  return [data, loading, error];
};
