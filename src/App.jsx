
import Header from './top'
import './App.css'
import Calculator from './Calculator';
import Footer from './footer'
import EmployeeList from './CardEmployee'

function App() {
   return (
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

  )
}

export default App

