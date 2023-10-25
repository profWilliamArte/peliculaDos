import { useState, useEffect } from "react";
import Card from "./Card";
import useAPIFetch from "../hook/useAPIFetch";
import Paginar from "./Paginar";

const APITendencias='https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&sort_by=popularity.desc'; //tendencias

const MainTendenciasCine = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  

  const { data, loading, error } = useAPIFetch(`${APITendencias}&page=${currentPage}`);
  const tendenciaCine = data?.results || [];
  
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
            <h3 className="text-center py-3 text-white">Peliculas que son Tendencias en el Cine</h3>
            <Paginar
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
            <div className="row">
              {tendenciaCine && tendenciaCine.map((pelicula) => (
                <Card pelicula={pelicula} key={pelicula.id}/>
                ))} 
            </div>
          </div>
        </div>
      )
    }

export default MainTendenciasCine