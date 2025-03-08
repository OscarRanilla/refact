import Header from './top'
import './App.css'
import Calculator from './Calculator';
import Footer from './footer'
import EmployeeList from './CardEmployee'

function App() {
  //ejemplo para cambiar luego patata por el resultado que tengo que guardar en las variables para que haga la suma. Puedo usar las mismas variables para el resto */
    return (
    // tengo que poner aquí el logo en lo de arriba. Que no se me olvide {almacenamiento}

    <div className='main'>
        <Header /> 
        <div className="container">
            <section className="section-cards">
                <EmployeeList/>
            </section>

            <section className='section-forms'>
                <Calculator />
            </section>
    
        </div>
        <Footer/>
    </div>

    
    /* <pie /> */
)
};

export default App;