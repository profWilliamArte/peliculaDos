import React from 'react';

const CardPersonas = ({persona}) => {
let titulo  = persona.title;
let foto    = persona.poster_path
if(titulo==undefined)   titulo=persona.name;

let conocidopor = persona.known_for.map((element,index) => (
    <React.Fragment key={element.id}>
      <span>{index+1}.- {element.title}<br /></span>
    </React.Fragment>
  ));

let peliculasFamosas = persona.known_for.map((element,index) => (
    <React.Fragment key={element.id}>
    
      <h5><br />{index+1}.- {element.title} <br /><br /> <span className='small'>{element.overview}</span></h5>
    
    </React.Fragment>
  ));
    
    return (
    <div className="col-md-4 col-lg-3 mb-4 animaImagen"  id="contenedorCard" >
        <div className="card text-center h-100 swing-in-left-bck " data-bs-theme="dark">
            <div className="card-header p-0">
                <img src={`https://image.tmdb.org/t/p/w500${persona.profile_path}`} alt="" className="img-fluid" />
            </div>
            <div className="card-body"> 
                <h5>{titulo}</h5>
                <div className=" d-flex justify-content-evenly">
                    <p><span className="badge text-bg-warning">{persona.popularity}</span></p>
                </div>
                <div className='bg-peliculas '>
                    <p> PELICULAS FAMOSAS <br/>
                      <span className='small'>{conocidopor}</span>
                    </p>
                </div>
            </div>
            <div className='card-footer'>
          <span>Detalle</span>
          <div className="card--hover slide-in-elliptic-top-fwd">
            <div className="p-2">
              {peliculasFamosas}
            </div>
          </div>
        </div>
        </div>
  </div>
  )
}

export default CardPersonas

