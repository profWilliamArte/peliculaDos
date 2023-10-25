import { useState, useEffect } from "react";
import Card from "./Card";
import useAPIFetch from "../hook/useAPIFetch";
import Paginar from "./Paginar";

const APIRecientes='https://api.themoviedb.org/3/movie/now_playing?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&sort_by=popularity.desc';   //reciente
                  
const MainRecientes = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  

  const { data, loading, error } = useAPIFetch(`${APIRecientes}&page=${currentPage}`);
  const reciente = data?.results || [];



  useEffect(() => {
    if (data && data.page) {
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    }
  }, [data]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div className="bg-pag-peliculas">
      <div className="container py-4">
        <h3 className="text-center py-3 text-white">Peliculas Recientes</h3>
        <Paginar
           currentPage={currentPage}
           totalPages={totalPages}
           handlePageChange={handlePageChange}
        />
        <div className="row">
          {reciente && reciente.map((pelicula) => (
            <Card pelicula={pelicula} key={pelicula.id}/>
            ))} 
        </div>
      </div>
    </div>
  )
}

export default MainRecientes

/*

En todos los componentes main, importamos el hook useAPIFetch y lo utilizamos para obtener los datos de la API. 
Luego, verificamos el estado de carga y cualquier error antes de renderizar los resultados en el componente Card.

De esta manera, has separado la lógica de obtener los datos de la API en un hook reutilizable, 
lo que te permite mantener tus componentes más limpios y organizados.


*/