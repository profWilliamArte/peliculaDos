import { useState, useEffect } from "react";
import Card from "./Card";
import { useLocation } from 'react-router-dom';
const APIBuscar='https://api.themoviedb.org/3/search/multi?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&page=1&include_adult=false&query='

const MainBuscar = () => {

  const location = useLocation();
  const valueSearch = location.state;
  const [reciente, setReciente] = useState([])

	const getreciente = async () =>{
	try {
				const response = await fetch(APIBuscar+valueSearch);
				const data = await response.json();
				setReciente(data.results);
			} catch (error) {
				console.error(error)
			}
		};

	useEffect(()=>{
			getreciente();
	},[valueSearch]);

  return (
    <div className="bg-pag-peliculas">
      <div className="container py-4">
        <h3 className="text-center py-3 text-white">Busquedas {valueSearch}</h3>
        <div className="row">
          {reciente && reciente.map((pelicula) => (
            <Card pelicula={pelicula} key={pelicula.id}/>
            ))} 
        </div>

      </div>

    </div>
  )
}

export default MainBuscar