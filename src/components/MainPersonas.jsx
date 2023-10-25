import { useState, useEffect } from "react";
import CardPersonas from "./CardPersonas";
import useAPIFetch from "../hook/useAPIFetch";
import Paginar from "./Paginar";
const API='https://api.themoviedb.org/3/person/popular?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&sort_by=popularity.desc';  

const Mainpersonas = () => {

  
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);

const { data, loading, error } = useAPIFetch(`${API}&page=${currentPage}`);
const personas = data?.results || [];


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

/*
const [personas, setPersonas] = useState([])
    const getPersonas = async () =>{
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data)
      setPersonas(data.results);
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(()=>{
    getPersonas();
  },[]);

*/








        return (
          <div className="bg-pag-personas">
            <div className="container py-4">
              <h3 className="text-center py-3 text-white">Personas Populares</h3>
              <Paginar
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
              <div className="row">
                {personas && personas.map((persona) => (
                  <CardPersonas persona={persona} key={persona.id}/>
                  ))} 
              </div>
            </div>
          </div>
        )
      }

export default Mainpersonas