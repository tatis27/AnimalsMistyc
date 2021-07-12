
import './App.css';
import './CSS/body.css';
import './CSS/button.css';
import './CSS/footer.css';
import './CSS/galeria.css';
import './CSS/header.css';
import './CSS/section.css';
import * as Icon from 'react-bootstrap-icons';
import imagenes from './img/imagenes';
// Integración con API de firebase
import firebase from "firebase/app";
import 'firebase/firestore';
import {
  FirestoreProvider,
  FirestoreCollection
} from "@react-firebase/firestore";
import { config } from "./config/firebase-config";
// Integración con API de firebase

function App() {
  // objeto para configuarar consultas a firebase 


  return (
  <FirestoreProvider {...config} firebase={firebase}>
    <div className="App">
        <header className="header" id="inicio">
        <img src="img/menu.svg" alt="" className="hamburguer" />
        <nav className="menu-navegacion">
          <a href="#inicio">Inicio</a>
          <a href="#Galeria">Galeria</a>
          <a href="#angry">nuestros adorables amigos</a>
          <a href="#Expertos en">Expertos en</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="contenedor head">
          <h1 className="titulo">Quieres Adoptar uno de Nuestros Adorables Mistyc</h1>
          <p className="copy">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            impedit autem quas exercitationem magni doloribus, facilis, illo
            cupiditate accusamus, cum nesciunt blanditiis excepturi velit!
            Explicabo commodi necessitatibus velit vero sed.
          </p>
        </div>
      </header>
      <main>
      <section className="services-contenedor" id="servicio">
        <h2 className="subtitulo">nuestros adorables amigos</h2>
        <div className="contenedor-servicio">
          <img src={imagenes.Mistyc} alt="" />
          <div className="checklist-servicio">
            <div className="service">
              <h3 className="n-service"><span className="number">1</span>Diseño Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi perspiciatis repudiandae beatae id expedita optio ad
                ut voluptates incidunt voluptatem?
              </p>
            </div>
            <div className="service">
              <h3 className="n-service"><span className="number">2</span>Diseño Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi perspiciatis repudiandae beatae id expedita optio ad
                ut voluptates incidunt voluptatem?
              </p>
            </div>
            <div className="service">
              <h3 className="n-service"><span className="number">3</span>Diseño Web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi perspiciatis repudiandae beatae id expedita optio ad
                ut voluptates incidunt voluptatem?
              </p>
            </div>
          </div>
        </div> 
      </section>
    </main> 
    <section className="gallery" id="portafolio">
        <div className="contenedor">
          <h2 className="subtitulo">Galeria</h2>
          
          
          <FirestoreCollection path="/moustros/" limit={10}>
            {moustros => {
              return moustros.isLoading ? 
                          <span> Cargando </span> : 
                          <div className="contenedor-galeria">
                            { moustros.value.map((monstruo, i) => {
                              
                                    if(monstruo.nombre === "fuego"){
                                      return <div key="box-1-{monstruo.id}" className="contenedor-galeria-item"> 
                                              <div key="div-1-{monstruo.id}">
                                              <img key="img-1-{monstruo.id}" src={imagenes.fuego}  alt="" className="img-galeria" />
                                              <button key="btn-1-{monstruo.id}" className="button" type="submit">Adoptame, soy {monstruo.nombre}</button>
                                            </div>
                                            </div>
                                    }
                                    else if(monstruo.nombre === "dragon Albino"){
                                      return <div key="box-1-{monstruo.id}" className="contenedor-galeria-item"> 
                                              <div key="div-1-{monstruo.id}">
                                              <img key="img-1-{monstruo.id}" src={imagenes.Dragon}  alt="" className="img-galeria" />
                                              <button key="btn-1-{monstruo.id}" className="button" type="submit">Adoptame, soy {monstruo.nombre}</button>
                                            </div>
                                            </div>
                                    }
                                    else if(monstruo.nombre === "colmi"){
                                      return <div key="box-1-{monstruo.id}" className="contenedor-galeria-item"> 
                                              <div key="div-1-{monstruo.id}">
                                              <img key="img-1-{monstruo.id}" src={imagenes.Colmi}  alt="" className="img-galeria" />
                                              <button key="btn-1-{monstruo.id}" className="button" type="submit">Adoptame, soy {monstruo.nombre}</button>
                                            </div>
                                            </div>
                                    }
                                    else if(monstruo.nombre === "cachos"){
                                      return <div key="box-1-{monstruo.id}" className="contenedor-galeria-item"> 
                                              <div key="div-1-{monstruo.id}">
                                              <img key="img-1-{monstruo.id}" src={imagenes.despeinado}  alt="" className="img-galeria" />
                                              <button key="btn-1-{monstruo.id}" className="button" type="submit">Adoptame, soy {monstruo.nombre}</button>
                                            </div>
                                            </div>
                                    }
                                    else{
                                      return <div key="box-1-{monstruo.id}" className="contenedor-galeria-item">  
                                                <div key="div-1-{monstruo.id}">
                                                  <img key="img-1-{monstruo.id}" src={imagenes.helado}  alt="" className="img-galeria" />
                                                  <button key="btn-1-{monstruo.id}" className="button" type="submit">Adoptame, soy {monstruo.nombre}</button>
                                                </div>
                                             </div>
                                    }

                                  }
                                
                              
                            )}
                          </div>
                          ;
            }}
          </FirestoreCollection>
       </div> 
    </section>
      <section className="imagen-light">
        <img src="img/close.svg" alt="" className="close" />
        <img src="img/jason.jpg" alt="" className="agregar-imagen" />
      </section>
      <section className="contenedor-expert" id="expertos">
        <h2 className="subtitulo">Expertos en:</h2>
        <section className="experts"></section>
        <div className="cont-expert">
          <img src="" alt="" />
          <h3 className="n-expert">Devil</h3>
        </div>
        <div className="cont-expert">
          <img src="" alt="" />
          <h3 className="n-expert">Angry</h3>
        </div>
        <div className="cont-expert">
          <img src="" alt="" />
          <h3 className="n-expert">Noble</h3>
        </div>
      </section>
      <footer id="contacto">
      <div className="contenedor footer-content">
        <div className="contact-us">
          <h2 className="brand">Design</h2>
          <p>
            Somos creadores de nuevas experiencias referencia tomada de Amazon
            Copyright © 2021
          </p>
        </div>
        <div className="social-media">
          <a href="./" className="social-media-icon">
            <Icon.Facebook/>
          </a>
          <a href="./" className="social-media-icon">
            <Icon.Instagram/>
          </a>
          <a href="./" className="social-media-icon">
            <Icon.Twitter/>
          </a>
        </div>
      </div>
      <div className="line"></div>
    </footer>
    </div>
  </FirestoreProvider>
  );
}

export default App;
