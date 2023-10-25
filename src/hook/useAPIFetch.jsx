
import { useState, useEffect } from "react";
const useAPIFetch = (APIUrl) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(APIUrl);
            const data = await response.json();
            setData(data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, [APIUrl]);

      return { data, loading, error };
  
}
export default useAPIFetch;
/*
En este ejemplo, creamos un hook personalizado llamado useAPIFetch que acepta la URL de la API como parámetro. 
Dentro del hook, utilizamos el estado y el efecto de useState y useEffect 
respectivamente para realizar la solicitud a la API y almacenar los resultados en el estado data. 
También tenemos estados para controlar el estado de carga (loading) y cualquier error que pueda ocurrir (error).
Luego, puedes utilizar este hook en tus componentes MainRecientes y MainProximamente de la siguiente manera:

*/