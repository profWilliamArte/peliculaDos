import { useState, useEffect } from "react";
import Card from "./Card";
import useAPIFetch from "../hook/useAPIFetch";
import Paginar from "./Paginar";
const APIMCTMDBElTv='https://api.themoviedb.org/3/tv/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&sort_by=popularity.desc';  

const MainMejorValoradaTv = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { data, loading, error } = useAPIFetch(`${APIMCTMDBElTv}&page=${currentPage}`);
  const mejorValoradaTv = data?.results || [];
  
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
    <div className="bg-pag-tv">
      <div className="container py-4">
        <h3 className="text-center py-3 text-white">Programas de televisión mejor valorados</h3>
        <Paginar
           currentPage={currentPage}
           totalPages={totalPages}
           handlePageChange={handlePageChange}
        />
        <div className="row">
          {mejorValoradaTv && mejorValoradaTv.map((pelicula) => (
            <Card pelicula={pelicula} key={pelicula.id}/>
            ))} 
        </div>
      </div>
    </div>
  )
}

export default MainMejorValoradaTv