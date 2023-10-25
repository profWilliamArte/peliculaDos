import { useState, useEffect } from "react";
import Card from "./Card";
import useAPIFetch from "../hook/useAPIFetch";
import Paginar from "./Paginar";

const APIMCTMDBEl='https://api.themoviedb.org/3/movie/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&sort_by=vote_count.desc&language=es-VE';

const MainMejorValoradasCine = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  const { data, loading, error } = useAPIFetch(`${APIMCTMDBEl}&page=${currentPage}`);
  const mejorValoradasCine = data?.results || [];

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
        <h3 className="text-center py-3 text-white">Peliculas mejor valoradas en el Cine</h3>
        <Paginar
           currentPage={currentPage}
           totalPages={totalPages}
           handlePageChange={handlePageChange}
        />
        <div className="row">
          {mejorValoradasCine && mejorValoradasCine.map((pelicula) => (
            <Card pelicula={pelicula} key={pelicula.id}/>
            ))} 
        </div>
      </div>
    </div>
  )
}
export default MainMejorValoradasCine