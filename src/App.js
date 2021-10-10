import './styles/styles.css';
import logo from './media/logo.png';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';
import pitbull from './media/pitbull.jpg';
import dashhund from './media/dashhund.jpg';

function App() {
  return (
    <div classNameName="App">
      <header>
        <ul className="navbar">
          <li>
            <img src={logo} alt="imagen logo" className="logo botonGenerico" />
          </li>
          <li>
            <button className="botonGenerico mainButton alturaBotonColores"><i className="fas fa-plus"></i> Nuevo post</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar" />
              <i className="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
          </li>
          <li>
            <button className="botonGenerico secondaryButton alturaBotonColores">Iniciar Sesión</button>
          </li>
          <li>
            <button className="botonGenerico mainButton alturaBotonColores">Registrarme</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1 className="titulo">Razas de Perros</h1>
          <ul className="breedCardContainer">
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={borderCollie} alt="Border Collie" />
              </div>
              <span className="breedTitle">Border Collie</span>
              <div className="breedInteraction">
                <span><i className="fas fa-heart iconoMeGusta"></i> 150</span>
                <span><i className="fas fa-comment"></i> 1.5k</span>
                <span><i className="fas fa-eye"></i> 120</span>
              </div>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={rhodesian} alt="Rhodesian" />
              </div>
              <span className="breedTitle">Rhodesian</span>
              <div className="breedInteraction">
                <span><i className="fas fa-heart iconoMeGusta"></i> 450</span>
                <span><i className="fas fa-comment"></i> 1.1k</span>
                <span><i className="fas fa-eye"></i> 1850</span>
              </div>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={pitbull} alt="Pitbull" />
              </div>
              <span className="breedTitle">Pitbull</span>
              <div className="breedInteraction">
                <span><i className="fas fa-heart iconoMeGusta"></i> 1000</span>
                <span><i className="fas fa-comment"></i> 5.1k</span>
                <span><i className="fas fa-eye"></i> 7321</span>
              </div>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={dashhund} alt="Dachshund" />
              </div>
              <span className="breedTitle">Dachshund</span>
              <div className="breedInteraction">
                <span><i className="fas fa-heart iconoMeGusta"></i> 8145</span>
                <span><i className="fas fa-comment"></i> 10.7k</span>
                <span><i className="fas fa-eye"></i> 15.9k</span>
              </div>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
