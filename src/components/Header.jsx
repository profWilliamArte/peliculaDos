import { useState } from "react";
import {  Link,useNavigate } from "react-router-dom";

const Header = () => {
    const [valueSearch, setValueSearch]=useState("")
    const onSearchChange = (e) => {
        setValueSearch(e.target.value);
    };
    const navigate = useNavigate();
    const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/Busquedas', {
			state: valueSearch,
		});	
	};

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-menu fixed-top p-3" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="logo.svg" width={250} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Películas
                            </a>
                            <ul className="dropdown-menu">

                                <li><Link to="/" className="dropdown-item" href="#">Recientes</Link></li>
                                <li><Link to="/TendenciaCine" className="dropdown-item" href="#">Tendencia</Link></li>
                                <li><Link to="/Proximamente" className="dropdown-item" href="#">Próximamente</Link></li>
                                <li><Link to="/MejorValoradaCine" className="dropdown-item" href="#">Mejor valoradas</Link></li>
                            
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Programas de televisión
                            </a>
                            <ul className="dropdown-menu">

                                <li><Link to="/TendenciaTv" className="dropdown-item" href="#">Tendencias</Link></li>
                                <li><Link to="/SeEmitenHoy" className="dropdown-item" href="#">Se emiten hoy</Link></li>       
                                <li><Link to="/MejorValoradaTv" className="dropdown-item" href="#">Mejor valoradas</Link></li>
                            
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/Personas" className="nav-link" href="#">Personas</Link>
                        </li>
                    </ul>
                </div>
                 <form className="d-flex" role="search" onSubmit={onSearchSubmit}>
                        <input  value={valueSearch} onChange={onSearchChange} className="form-control me-2" type="search" placeholder="Buscar una Pelicula" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
            </div>
        </nav>
    </>
  )
}

export default Header